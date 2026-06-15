import type { Metadata } from "next";
import PolicyPage from "../components/PolicyPage";

export const metadata: Metadata = {
  title: "Refund Policy — ATDASHBOARDS",
};

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[#8b949e] leading-relaxed">{children}</p>
);

export default function RefundPolicy() {
  return (
    <PolicyPage title="Refund Policy" lastUpdated="June 15, 2026">
      <P>
        The Company may provide products, services, subscriptions, or access to
        certain portions to the Company&rsquo;s website at a monetary cost.
        Prices and availability are subject to change without notice. The
        Company may allow for such purchases within its website or via a white
        label affiliate. It is your responsibility to thoroughly read and
        understand any such terms and conditions. By making any such purchases,
        you agree that the Company has no responsibility and acquires no
        liability for any claim related to your purchases.
      </P>

      <P>
        Upon the complete purchase of a product, service, subscription, or
        access to certain portions of the Company website, the Company will make
        any said product, service, or access will be available to you following
        the approved transaction.
      </P>

      <P>
        There are no refunds on any Services purchased from the Company.
      </P>
    </PolicyPage>
  );
}
