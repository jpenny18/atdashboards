import Link from "next/link";
import Image from "next/image";

const policyLinks = [
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export default function Footer() {
  return (
    <footer className="bg-[#161b22] border-t border-[#30363d] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-5">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="AT Dashboards Analytics logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </Link>
        <div className="flex flex-wrap justify-center gap-6">
          {policyLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#8b949e] hover:text-blue-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-xs text-[#8b949e] text-center max-w-2xl">
          We create branded, tailored dashboards that provide critical performance metrics, API integration for real-time updates, and streamlined CRM functionality to manage essential business data.
        </p>
        <p className="text-xs text-[#8b949e]">AT Dashboards Analytics &copy; 2026</p>
      </div>
    </footer>
  );
}
