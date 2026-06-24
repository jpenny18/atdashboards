import Stripe from "stripe";
import { NextRequest } from "next/server";

// ─── Product Catalog ──────────────────────────────────────────────────────────
// To add, remove, or rename products: update this object.
// Prices are in cents (e.g. 8950 = $89.50).
// Keep in sync with the client-side PRODUCTS map in /app/checkout/page.tsx.
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

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { productId } = body as { productId: unknown };

    // Validate — price and name are always sourced from the server map
    if (typeof productId !== "string" || !(productId in PRODUCTS)) {
      return Response.json({ error: "Invalid product." }, { status: 400 });
    }

    const product = PRODUCTS[productId];

    const paymentIntent = await stripe.paymentIntents.create({
      amount: product.price,
      currency: "usd",
      // Explicit list excludes Stripe Link. Card still surfaces Apple Pay /
      // Google Pay automatically when the device/browser supports them.
      payment_method_types: ["card"],
      metadata: {
        productId,
        productName: product.name,
      },
    });

    return Response.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error("[create-payment-intent]", err);
    return Response.json(
      { error: "Failed to initialize payment." },
      { status: 500 }
    );
  }
}
