import Link from "next/link";
import Image from "next/image";
import Footer from "./Footer";

interface PolicyPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function PolicyPage({
  title,
  lastUpdated,
  children,
}: PolicyPageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Minimal header */}
      <header className="bg-[#0d1117] border-b border-[#30363d]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="AT Dashboards Analytics logo"
              width={56}
              height={56}
              className="object-contain"
            />
          </Link>
        </div>
      </header>

      <main className="flex-1 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[#8b949e] hover:text-blue-400 transition-colors mb-6 group"
            >
              <svg
                className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>

            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              {title}
            </h1>
            <p className="text-sm text-[#8b949e]">Last updated: {lastUpdated}</p>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 sm:p-10 space-y-8">
            {children}

            <div className="pt-4 border-t border-[#30363d]">
              <p className="text-sm text-[#8b949e]">
                If you have any questions about this policy, please{" "}
                <Link
                  href="/#contact"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  contact us
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
