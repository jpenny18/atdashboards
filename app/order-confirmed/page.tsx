import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Confirmed — AT Dashboards",
  description: "Your payment was received successfully.",
};

export default function OrderConfirmedPage() {
  return (
    <main className="min-h-screen bg-[#0d1117] flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-10">
          {/* Check Icon */}
          <div className="w-16 h-16 rounded-full bg-[#1a3a2a] border border-[#2ea043] flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-[#3fb950]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-2xl font-bold text-white mb-4">
            Payment confirmed
          </h1>

          <p className="text-[#8b949e] text-sm leading-relaxed">
            Your order has been received. You will receive an email with your
            login credentials and next steps shortly.
          </p>
        </div>
      </div>
    </main>
  );
}
