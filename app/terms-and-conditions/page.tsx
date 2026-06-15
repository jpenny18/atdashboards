import type { Metadata } from "next";
import Link from "next/link";
import PolicyPage from "../components/PolicyPage";

export const metadata: Metadata = {
  title: "Terms & Conditions — ATDASHBOARDS",
};

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-base font-semibold text-white uppercase tracking-wide pt-2">
    {children}
  </h2>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[#8b949e] leading-relaxed">{children}</p>
);

const Email = ({ address }: { address: string }) => (
  <a
    href={`mailto:${address}`}
    className="text-blue-400 hover:text-blue-300 transition-colors"
  >
    {address}
  </a>
);

export default function TermsAndConditions() {
  return (
    <PolicyPage title="Terms & Conditions" lastUpdated="January 1, 2023">
      <P>
        Welcome to ATDASHBOARDS (referred to as &ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;our&rdquo;). These terms and conditions
        (the &ldquo;Terms&rdquo;) govern your use of our website,{" "}
        <Link
          href="/"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          atdashboards.com
        </Link>{" "}
        (the &ldquo;Website&rdquo;), and our custom dashboard software services
        (the &ldquo;Service&rdquo;). By accessing or using our Website and
        Service, you agree to comply with and be bound by these Terms. If you do
        not agree to these Terms, please do not use our Website or Service.
      </P>

      <div className="space-y-3">
        <H2>Limited License</H2>
        <P>
          The Company provides you with limited, non-exclusive,
          non-sublicensable, non-assignable, revocable, and royalty-free license
          to use the Services for its customary and intended purposes. You are
          expressly prohibited from scraping, framing, hacking, reverse
          engineering, crawling, or aggregating the Services, the Company
          Website, whether in whole or in part, without the prior written
          consent of the Company.
        </P>
        <P>
          You acknowledge and agree that your limited use of the Services does
          not entitle you to any license or intellectual property rights to any
          technology, intellectual property, copyrights, trademarks, or trade
          secrets of the Company or any third-party contractor thereof. You
          acknowledge and agree that your use of the Services is limited by the
          terms of this Agreement, and you expressly agree that you will not use
          the Services in any manner that is not expressly authorized under the
          terms of this Agreement. The Company reserves all of its rights not
          expressly granted through this Agreement.
        </P>
        <P>
          This license is revocable at any time, and any rights not expressly
          granted in this Agreement are reserved for the Company.
        </P>
      </div>

      <div className="space-y-3">
        <H2>Prohibited Uses</H2>
        <P>
          You are expressly prohibited from using the Services to violate any
          law, statute, ordinance, regulation, or treaty, whether local, state,
          provincial, national, or international, or to violate the rights of a
          third-party, including, but not limited to intellectual property
          rights, privacy rights, rights of publicity, or other personal or
          proprietary rights.
        </P>
        <P>
          Additionally, you are expressly prohibited from scraping, crawling,
          framing, posting unauthorized links to, aggregating, hacking,
          performing denial of service (DOS) attacks on, reverse engineering, or
          circumventing technological protection measures of the Services or the
          Company website.
        </P>
      </div>

      <div className="space-y-3">
        <H2>Business Information</H2>
        <P>
          ATDASHBOARDS &mdash; Business Entity Type: Corporation
        </P>
      </div>

      <div className="space-y-3">
        <H2>User Eligibility</H2>
        <P>
          <span className="text-white font-medium">Age Requirement:</span> You
          must be 18 years of age or older to use our Service.
        </P>
        <P>
          <span className="text-white font-medium">
            Account Registration:
          </span>{" "}
          You may be required to register for an account with us to access
          certain features of the Service. You are responsible for maintaining
          the confidentiality of your account credentials.
        </P>
      </div>

      <div className="space-y-3">
        <H2>Purchases and Refunds</H2>
        <P>
          The Company may provide products, services, subscriptions, or access
          to certain portions to the Company&rsquo;s website at a monetary cost.
          Prices and availability are subject to change without notice. The
          Company may allow for such purchases within its website or via a white
          label affiliate. It is your responsibility to thoroughly read and
          understand any such terms and conditions. By making any such
          purchases, you agree that the Company has no responsibility and
          acquires no liability for any claim related to your purchases.
        </P>
        <P>
          Upon the complete purchase of a product, service, subscription, or
          access to certain portions of the Company website, the Company will
          make any said product, service, or access will be available to you
          following the approved transaction.
        </P>
        <P>
          There are no refunds on any Services purchased from the Company.
        </P>
      </div>

      <div className="space-y-3">
        <H2>Governing Law and Jurisdiction</H2>
        <P>
          <span className="text-white font-medium">Governing Law:</span> These
          Terms shall be governed by and construed in accordance with the laws
          of Quebec, Canada, without regard to its conflict of law principles.
        </P>
        <P>
          <span className="text-white font-medium">Jurisdiction:</span> Any
          disputes arising from or related to these Terms, the Website, or the
          Service shall be subject to the exclusive jurisdiction of the courts
          of Quebec, Canada.
        </P>
      </div>

      <div className="space-y-3">
        <H2>Contact Information</H2>
        <P>
          If you have any questions or concerns regarding these Terms, or if you
          need to contact us for any reason, you can reach us at:
        </P>
        <P>
          ATDASHBOARDS &mdash; Email:{" "}
          <Email address="info@atdashboards.com" />
        </P>
      </div>

      <div className="space-y-3">
        <H2>Updates to Terms and Conditions</H2>
        <P>
          <span className="text-white font-medium">Modifications:</span> We
          reserve the right to update or modify these Terms at any time. Changes
          will be effective upon posting on our Website. It is your
          responsibility to review these Terms periodically for updates.
        </P>
        <P>
          <span className="text-white font-medium">Notification:</span> We may
          notify users of material changes to these Terms through the Website or
          by other means we deem appropriate.
        </P>
      </div>

      <div className="space-y-3">
        <H2>Compliance with Laws</H2>
        <P>
          By using our Website and Service, you agree to comply with all
          applicable laws and regulations, including but not limited to those
          related to data protection and privacy.
        </P>
      </div>

      <div className="space-y-3">
        <H2>Intellectual Property</H2>
        <P>
          <span className="text-white font-medium">Ownership:</span> All
          content, trademarks, and copyrights on the Website and within the
          Service are the property of ATDASHBOARDS and its licensors. You may
          not use, reproduce, or distribute any content without our express
          written permission.
        </P>
        <P>
          <span className="text-white font-medium">
            User-Generated Content:
          </span>{" "}
          Users may be permitted to submit content to the Service. By submitting
          content, you grant us a non-exclusive, worldwide, royalty-free license
          to use, modify, and distribute your content within the scope of
          providing the Service.
        </P>
      </div>

      <div className="space-y-3">
        <H2>Termination</H2>
        <P>
          We reserve the right to terminate or suspend your access to the
          Service at our discretion, without notice, for any violation of these
          Terms or for any other reason.
        </P>
      </div>

      <div className="space-y-3">
        <H2>Acceptance of Terms</H2>
        <P>
          By using our Website and Service, you acknowledge that you have read,
          understood, and agreed to these comprehensive Terms and Conditions.
        </P>
      </div>

      <div className="space-y-3">
        <H2>Disclaimer of Warranties and Limitation of Liability</H2>
        <p className="text-[#8b949e] leading-relaxed text-sm">
          YOU ACKNOWLEDGE AND AGREE THAT THE SERVICE AND COMPANY WEBSITE ARE
          PROVIDED ON AN &ldquo;AS-IS&rdquo; BASIS AND WITHOUT WARRANTY OF ANY
          KIND, INCLUDING, BUT NOT LIMITED TO WARRANTIES OF TITLE,
          MERCHANTABILITY, ACCURACY, FITNESS FOR A PARTICULAR PURPOSE,
          SECURITY, AND NON-INFRINGEMENT. WHEREVER PERMITTED BY LAW, YOU
          ACKNOWLEDGE THAT THE COMPANY WILL NOT BE HELD RESPONSIBLE OR LIABLE
          FOR ANY CLAIMS, DAMAGES, JUDGMENTS, CHARGES, OR FEES ARISING OUT OF
          OR RELATED TO INFORMATION ON THE WEBSITE AND YOUR USE OF OR ACCESS TO
          THE SERVICE OR THE COMPANY WEBSITE, INCLUDING, BUT NOT LIMITED TO
          COMPENSATORY DAMAGES, CONSEQUENTIAL DAMAGES, SPECIAL DAMAGES,
          INCIDENTAL DAMAGES, PUNITIVE DAMAGES, EXEMPLARY DAMAGES, COSTS AND
          ATTORNEYS&rsquo; FEES, DAMAGES ARISING OUT OF ERRORS OR OMISSIONS,
          AND DAMAGES ARISING OUT OF THE UNAVAILABILITY OF THE WEBSITE OR
          DOWNTIME. YOU ACKNOWLEDGE THAT YOUR USE OF THE SERVICES AND/OR THE
          COMPANY WEBSITE IS AT YOUR SOLE RISK AND THAT THE COMPANY&rsquo;S
          LIABILITY IS LIMITED TO THE AMOUNT THAT YOU PAID TO USE THE SERVICES
          OR $1,000, WHICHEVER IS LESS.
        </p>
      </div>

      <div className="space-y-3">
        <H2>Indemnification</H2>
        <P>
          You agree to indemnify, defend, and hold harmless The Company, its
          officers, shareholders, directors, employees, subsidiaries,
          affiliates, white label users, and representatives from any and all
          losses, including, but not limited to costs and attorneys&rsquo; fees
          arising out of or related to your use of the Website; your violation
          of any term or condition of this Agreement; your violation of the
          rights of third parties, including but not limited to intellectual
          property rights or other personal or proprietary rights; and violation
          of any law, statute, ordinance, regulation, or treaty, whether local,
          state, provincial, national or international.
        </P>
        <P>
          Your obligation to defend The Company will not provide you with the
          ability to control The Company&rsquo;s defense, and The Company
          reserves the right to control its defense, including its choice of
          counsel and whether to litigate or settle a claim subject to
          indemnification.
        </P>
      </div>
    </PolicyPage>
  );
}
