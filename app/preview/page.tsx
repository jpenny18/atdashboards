import ExternalCheckoutButtons from "@/components/ExternalCheckoutButtons";

// Use NEXT_PUBLIC_SITE_URL from .env.local so links hit the right server.
// Falls back to localhost:3000 for local dev if the env var is not set.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-[#0d1117]">
      <ExternalCheckoutButtons checkoutDomain={siteUrl} />
    </div>
  );
}
