"use client";

import { useState } from "react";

// ─── Checkout Domain ──────────────────────────────────────────────────────────
// Change this constant to update where all "Get Started" buttons link to.
const CHECKOUT_DOMAIN = "https://atdashboards.com";

// ─── Product Catalog ──────────────────────────────────────────────────────────
// To add/remove products: update the PRODUCTS array for the relevant tab.
// To change a name or price: update the matching entry below.
// productId must match the keys in /app/api/create-payment-intent/route.ts.
interface Product {
  productId: string;
  name: string;
  price: string;
}

interface ExternalCheckoutButtonsProps {
  // Override the checkout domain for local dev/testing.
  // Defaults to CHECKOUT_DOMAIN constant above.
  checkoutDomain?: string;
}

const AVENGE_PRO: Product[] = [
  { productId: "prd_a9x7k2", name: "Package A", price: "$89.50" },
  { productId: "prd_m4q8v1", name: "Package B", price: "$119.50" },
  { productId: "prd_t6r2n9", name: "Package C", price: "$189.50" },
  { productId: "prd_z8p5w3", name: "Package D", price: "$249" },
];

const AVENGE_FLEX: Product[] = [
  { productId: "prd_b7h3s6", name: "Package A", price: "$69.50" },
  { productId: "prd_k9d4f8", name: "Package B", price: "$89" },
  { productId: "prd_x2v7c5", name: "Package C", price: "$149.50" },
  { productId: "prd_q5n8j1", name: "Package D", price: "$289" },
];

type Tab = "avengepro" | "avengeflex";

function ProductCard({
  product,
  checkoutDomain,
}: {
  product: Product;
  checkoutDomain: string;
}) {
  const checkoutUrl = `${checkoutDomain}/checkout?productId=${product.productId}`;

  return (
    <div className="flex flex-col bg-[#161b22] border border-[#30363d] rounded-xl p-5 hover:border-[#e11d48]/50 transition-all duration-200 group">
      <p className="text-xs font-medium text-[#8b949e] uppercase tracking-widest mb-1">
        {product.name}
      </p>
      <p className="text-3xl font-bold text-white mb-5">{product.price}</p>
      <a
        href={checkoutUrl}
        className="mt-auto block text-center py-2.5 px-4 rounded-lg bg-[#e11d48] hover:bg-[#be123c] text-white text-sm font-semibold transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}

export default function ExternalCheckoutButtons({
  checkoutDomain = CHECKOUT_DOMAIN,
}: ExternalCheckoutButtonsProps = {}) {
  const [activeTab, setActiveTab] = useState<Tab>("avengepro");

  const tabs: { id: Tab; label: string }[] = [
    { id: "avengepro", label: "AvengePro" },
    { id: "avengeflex", label: "AvengeFlex" },
  ];

  const products = activeTab === "avengepro" ? AVENGE_PRO : AVENGE_FLEX;
  const tabTitle = activeTab === "avengepro" ? "AvengePro" : "AvengeFlex";

  return (
    <section className="bg-[#0d1117] py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">
            Choose Your Package
          </h2>
          <p className="text-[#8b949e] text-sm">
            Select the plan that fits your goals. One-time payment, no
            subscriptions.
          </p>
        </div>

        {/* Tab Bar */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-[#161b22] border border-[#30363d] rounded-xl p-1 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-[#e11d48] text-white shadow"
                    : "text-[#8b949e] hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Label */}
        <p className="text-center text-xs font-medium text-[#8b949e] uppercase tracking-widest mb-6">
          {tabTitle} Packages
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.productId}
              product={product}
              checkoutDomain={checkoutDomain}
            />
          ))}
        </div>

        {/* Trust Line */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <svg
            className="w-4 h-4 text-[#3fb950]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
            />
          </svg>
          <span className="text-xs text-[#8b949e]">
            Secure checkout powered by Stripe
          </span>
        </div>
      </div>
    </section>
  );
}
