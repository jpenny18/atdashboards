import Stripe from "stripe";
import { NextRequest } from "next/server";

// ─── Product Catalog ──────────────────────────────────────────────────────────
// To add, remove, or rename products: update this object.
// Prices are in cents (e.g. 8950 = $89.50).
// IDs are intentionally opaque — do NOT use names that reveal account size,
// challenge type, evaluation tier, or anything finance/trading-related.
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

    // Validate productId is a known product — never trust price/name from the client
    if (typeof productId !== "string" || !(productId in PRODUCTS)) {
      return Response.json({ error: "Invalid product." }, { status: 400 });
    }

    const product = PRODUCTS[productId];

    // ─── Success / Cancel URLs ───────────────────────────────────────────────
    // To change these URLs, update the strings below.
    // NEXT_PUBLIC_SITE_URL should be set in your .env.local (e.g. https://atdashboards.com).
    const origin =
      process.env.NEXT_PUBLIC_SITE_URL ||
      req.headers.get("origin") ||
      "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: product.price,
            product_data: {
              name: product.name,
            },
          },
        },
      ],
      // ─── Redirect URLs ───────────────────────────────────────────────────
      // Success URL: update the path after the origin if your success page moves.
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      // Cancel URL: returns user to the checkout preview page for the same product.
      cancel_url: `${origin}/checkout?productId=${productId}`,
    });

    return Response.json({ url: session.url });
  } catch (err) {
    console.error("[create-checkout-session]", err);
    return Response.json(
      { error: "Failed to create checkout session." },
      { status: 500 }
    );
  }
}
