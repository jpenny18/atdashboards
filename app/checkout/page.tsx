"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

// ─── Stripe publishable key (safe to expose) ──────────────────────────────────
// Update NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY in .env.local
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

// ─── Product Catalog (display only — server enforces real prices) ─────────────
// To update a name or price, change it here AND in /app/api/create-payment-intent/route.ts
const PRODUCTS: Record<string, { name: string; price: number }> = {
  prd_a9x7k2: { name: "AvengePro Package A", price: 8950 },
  prd_m4q8v1: { name: "AvengePro Package B", price: 11950 },
  prd_t6r2n9: { name: "AvengePro Package C", price: 18950 },
  prd_z8p5w3: { name: "AvengePro Package D", price: 24900 },
  prd_b7h3s6: { name: "AvengeFlex Package A", price: 6950 },
  prd_k9d4f8: { name: "AvengeFlex Package B", price: 8900 },
  prd_x2v7c5: { name: "AvengeFlex Package C", price: 14950 },
  prd_q5n8j1: { name: "AvengeFlex Package D", price: 28900 },
};

// ─── Card field styling (dark theme) ──────────────────────────────────────────
// Applied to each Stripe card element. Change colors/fonts here.
const cardElementOptions = {
  style: {
    base: {
      color: "#c9d1d9",
      fontFamily: "inherit",
      fontSize: "15px",
      fontSmoothing: "antialiased",
      "::placeholder": { color: "#6e7681" },
      iconColor: "#8b949e",
    },
    invalid: {
      color: "#f85149",
      iconColor: "#f85149",
    },
  },
};

function formatPrice(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(cents / 100);
}

// ─── Spinner ──────────────────────────────────────────────────────────────────
function Spinner({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={`animate-spin ${className}`} fill="none" viewBox="0 0 24 24">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

// ─── Field wrapper (bordered container with red focus ring) ───────────────────
function Field({
  label,
  focused,
  children,
}: {
  label: string;
  focused: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-[#8b949e] uppercase tracking-widest mb-1.5">
        {label}
      </label>
      <div
        className={`px-3 py-3 rounded-lg bg-[#1c2128] border transition-colors ${
          focused
            ? "border-[#e11d48] ring-2 ring-[#e11d48]/15"
            : "border-[#30363d]"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

// ─── Payment Form (must be inside <Elements>) ─────────────────────────────────
function PaymentForm({
  price,
  clientSecret,
}: {
  price: number;
  clientSecret: string | null;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focus, setFocus] = useState<"number" | "expiry" | "cvc" | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements || !clientSecret) return;

    const cardNumber = elements.getElement(CardNumberElement);
    if (!cardNumber) return;

    setProcessing(true);
    setError(null);

    const { error: stripeError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardNumber },
      });

    if (stripeError) {
      setError(stripeError.message ?? "Payment failed. Please try again.");
      setProcessing(false);
    } else if (paymentIntent?.status === "succeeded") {
      // ─── Post-payment redirect ───────────────────────────────────────────
      // To change the success page: update this path.
      router.push("/order-confirmed");
    } else {
      setProcessing(false);
    }
  }

  const ready = Boolean(stripe && clientSecret);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Field label="Card number" focused={focus === "number"}>
        <CardNumberElement
          options={{ ...cardElementOptions, showIcon: true }}
          onFocus={() => setFocus("number")}
          onBlur={() => setFocus(null)}
        />
      </Field>

      <div className="grid grid-cols-2 gap-3">
        <Field label="Expiry" focused={focus === "expiry"}>
          <CardExpiryElement
            options={cardElementOptions}
            onFocus={() => setFocus("expiry")}
            onBlur={() => setFocus(null)}
          />
        </Field>
        <Field label="CVC" focused={focus === "cvc"}>
          <CardCvcElement
            options={cardElementOptions}
            onFocus={() => setFocus("cvc")}
            onBlur={() => setFocus(null)}
          />
        </Field>
      </div>

      {error && (
        <p className="text-[#f85149] text-sm flex items-start gap-2">
          <svg
            className="w-4 h-4 mt-0.5 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={!ready || processing}
        className="w-full py-3.5 bg-[#e11d48] hover:bg-[#be123c] disabled:bg-[#6b2040] disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 text-sm mt-1"
      >
        {processing ? (
          <>
            <Spinner />
            Processing…
          </>
        ) : (
          <>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            Pay {formatPrice(price)}
          </>
        )}
      </button>

    </form>
  );
}

// ─── Invalid Product Screen ───────────────────────────────────────────────────
function InvalidProduct() {
  return (
    <main className="min-h-screen bg-[#0d1117] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-full bg-[#1c2128] border border-[#30363d] flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-[#8b949e]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-semibold text-white mb-3">
          Invalid order link
        </h1>
        <p className="text-[#8b949e] text-sm mb-8">
          This link doesn&apos;t match any available product. Please return to
          the main site and select a package.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-[#e11d48] hover:bg-[#be123c] text-white text-sm font-semibold rounded-lg transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}

// ─── Checkout content (reads the URL — must live inside <Suspense>) ───────────
function CheckoutContent() {
  const searchParams = useSearchParams();
  // Accept any casing of the param (productId / productID / productid) so links
  // work no matter how they were written on the external site.
  const productId =
    searchParams.get("productId") ??
    searchParams.get("productID") ??
    searchParams.get("productid") ??
    "";
  const product = PRODUCTS[productId] ?? null;

  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [initError, setInitError] = useState<string | null>(null);

  useEffect(() => {
    if (!product) return;

    // Fetch a fresh PaymentIntent for whichever product is in the URL.
    // The <Elements> provider does NOT depend on this value, so switching
    // products never breaks the card fields — it just swaps the secret used
    // at confirmation time.
    setClientSecret(null);
    setInitError(null);

    const controller = new AbortController();

    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId }),
      signal: controller.signal,
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.clientSecret) setClientSecret(data.clientSecret);
        else setInitError(data.error ?? "Failed to initialize payment.");
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setInitError("Network error. Please refresh and try again.");
        }
      });

    return () => controller.abort();
  }, [productId]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!product) return <InvalidProduct />;

  return (
    <main className="min-h-screen bg-[#0d1117] flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-[1fr_1.4fr]">

            {/* ── Left: Order Summary ─────────────────────────────────────── */}
            <div className="bg-[#1c2128] px-6 py-8 md:border-r border-b md:border-b-0 border-[#30363d] flex flex-col justify-between gap-6">
              <div>
                <p className="text-xs font-medium text-[#8b949e] uppercase tracking-widest mb-4">
                  Order Summary
                </p>

                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="text-white font-semibold text-base leading-snug">
                      {product.name}
                    </p>
                    <p className="text-[#8b949e] text-xs mt-1">One-time payment</p>
                  </div>
                  <p className="text-white font-bold text-lg shrink-0">
                    {formatPrice(product.price)}
                  </p>
                </div>

                <div className="border-t border-[#30363d] pt-4 flex items-center justify-between">
                  <span className="text-sm text-[#8b949e]">Total due today</span>
                  <span className="text-white font-bold text-xl">
                    {formatPrice(product.price)}
                  </span>
                </div>
              </div>

            </div>

            {/* ── Right: Payment Form ─────────────────────────────────────── */}
            <div className="px-6 py-8">
              <p className="text-xs font-medium text-[#8b949e] uppercase tracking-widest mb-6">
                Payment Details
              </p>

              {initError ? (
                <div className="rounded-xl bg-[#1c2128] border border-[#f85149]/40 p-4 text-[#f85149] text-sm">
                  {initError}
                </div>
              ) : (
                <Elements stripe={stripePromise}>
                  <PaymentForm price={product.price} clientSecret={clientSecret} />
                </Elements>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// ─── Page export ──────────────────────────────────────────────────────────────
// useSearchParams() requires a Suspense boundary for the production build.
export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#0d1117] flex items-center justify-center px-4">
          <Spinner className="w-6 h-6 text-[#8b949e]" />
        </main>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
