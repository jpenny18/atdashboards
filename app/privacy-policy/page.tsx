import type { Metadata } from "next";
import Link from "next/link";
import PolicyPage from "../components/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy — ATDASHBOARDS",
};

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-base font-semibold text-white uppercase tracking-wide pt-2">
    {children}
  </h2>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[#8b949e] leading-relaxed">{children}</p>
);

const UL = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="list-disc list-inside space-y-1 text-[#8b949e] leading-relaxed pl-2">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

const Email = ({ address }: { address: string }) => (
  <a
    href={`mailto:${address}`}
    className="text-blue-400 hover:text-blue-300 transition-colors"
  >
    {address}
  </a>
);

const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:text-blue-300 transition-colors break-all"
  >
    {children}
  </a>
);

export default function PrivacyPolicy() {
  return (
    <PolicyPage title="Privacy Policy" lastUpdated="June 15, 2026">
      <P>
        ATDASHBOARDS (the &ldquo;Company,&rdquo; &ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;our&rdquo;) has created this privacy notice
        to explain our data collection and processing practices. By using our
        Services, you acknowledge and agree to our policies and procedures
        regarding personal information. If you have any questions or concerns,
        feel free to reach out to us at{" "}
        <Email address="info@atdashboards.com" />. If you do not agree with our
        policies, please refrain from using our Services.
      </P>

      <div className="space-y-4">
        <H2>What Information Do We Collect?</H2>
        <P>
          Personal information is gathered from you through voluntary means when
          you register on our Services, show interest in learning about us or
          our products/services, take part in activities on the Services, or
          make contact with us.
        </P>
        <P>
          The personal information we collect is based on your interactions with
          us and the Services, the choices you make, and the products/features
          you use. This can include:
        </P>
        <UL
          items={[
            "Names",
            "Phone numbers",
            "Email addresses",
            "Physical address",
            "Billing addresses",
          ]}
        />
        <P>
          <span className="text-white font-medium">Sensitive Information:</span>{" "}
          we do not collect sensitive information such as social security numbers
          or other information not necessary to the operation of the
          Company&rsquo;s business.
        </P>
        <P>
          <span className="text-white font-medium">Payment Information:</span>{" "}
          In case of any purchases, we may gather data necessary to process your
          payment, such as the payment instrument number and security code linked
          to your payment method. The storage of all payment information is
          handled by our payment processors. Their respective privacy notices
          can be accessed on their websites.
        </P>
        <P>
          It&rsquo;s crucial that all personal information you provide us is
          truthful, comprehensive, and up to date. In the event of any changes
          to your personal information, it&rsquo;s your responsibility to notify
          us.
        </P>
      </div>

      <div className="space-y-4">
        <H2>Information Automatically Collected</H2>
        <P>
          During your visit, usage, or navigation of the Services, certain
          information is automatically collected by us. This information, while
          not revealing your specific identity (e.g. name or contact details),
          may include device and usage data such as IP address, browser and
          device specifications, operating system, language preferences, source
          URLs, device name, country, location, usage information of our
          Services, and other technical details. This information is mainly
          utilized for ensuring the security and functioning of our Services, as
          well as for internal analysis and reporting purposes.
        </P>
        <P>
          Similar to other businesses, we also gather information through the
          use of cookies and similar technologies.
        </P>
        <P>
          <span className="text-white font-medium">
            We collect information — Log and Usage Data:
          </span>{" "}
          This refers to information related to service, diagnostics, usage, and
          performance, which our servers automatically gather when you access or
          utilize our Services. This data is stored in log files and may include
          details like your IP address, device information, browser type and
          settings, and information about your activities within the Services
          (such as timestamps of usage, pages/files viewed, searches performed,
          and other actions like feature usage), and device event information
          (such as system activity, error reports, and hardware configurations),
          depending on your interaction with us.
        </P>
      </div>

      <div className="space-y-4">
        <H2>How Do We Process Your Information?</H2>
        <P>
          Your personal information is processed by us for several purposes,
          based on your interaction with our Services. These may include:
        </P>
        <UL
          items={[
            "Easing account creation and authentication and identifying fraudulent activity.",
            "We may use your information to seek feedback and communicate with you regarding your usage of our Services. Processing of your information may also occur when necessary to protect someone's vital interests, for instance, to prevent harm.",
          ]}
        />
      </div>

      <div className="space-y-4">
        <H2>What Legal Bases Do We Rely On To Process Your Information?</H2>
        <P>
          We process your personal data only when necessary and when we have a
          valid legal justification, such as with your consent, to follow laws,
          provide services, fulfill contracts, protect your rights, or serve our
          legitimate business interests, inclusive of those set forth in our
          Terms &amp; Conditions and to protect the Company against fraud.
        </P>

        <p className="text-[#8b949e] leading-relaxed font-medium text-white/80 italic">
          This section applies to users located in EU or UK
        </p>
        <P>
          The GDPR and UK GDPR mandate us to outline the legal grounds for
          processing your personal data. Therefore, we process your information
          based on the following legal grounds:
        </P>
        <P>
          <span className="text-white font-medium">Consent:</span> We may
          process your information if you have provided us with consent to use
          your personal information for a specific purpose. You have the right
          to revoke your consent at any time. To do so, simply reach out to us
          through the contact form or send an email to{" "}
          <Email address="info@atdashboards.com" />.
        </P>
        <P>
          <span className="text-white font-medium">Legitimate Interest:</span>{" "}
          We may use your information if it is necessary for our legitimate
          business interests, provided that these interests do not override your
          interests or basic rights and freedoms, inclusive of those set forth
          in our Terms &amp; Conditions and to protect the Company against
          fraud.
        </P>
        <P>
          <span className="text-white font-medium">Legal Obligation:</span> We
          may handle your information to fulfill our legal obligations, such as
          cooperating with law enforcement or regulatory bodies, protecting our
          legal rights, or providing your information as evidence in relevant
          legal proceedings.
        </P>
        <P>
          <span className="text-white font-medium">Vital Interests:</span> We
          may also process your information if it is crucial to safeguarding
          your vital interests or the vital interests of others, for example in
          emergency situations where safety is at risk.
        </P>

        <p className="text-[#8b949e] leading-relaxed font-medium text-white/80 italic">
          If you are located in Canada, this section applies to you.
        </p>
        <P>
          We can only process your information if you have either given us
          express consent for a specific purpose or if it can be assumed from
          the circumstances (implied consent). However, you have the right to
          revoke this consent at any time. In exceptional cases where the law
          permits, we may process your information without your consent such as:
        </P>
        <UL
          items={[
            "it is in an individual's best interests and consent cannot be obtained promptly,",
            "it is necessary for fraud investigation and prevention,",
            "it is required for commercial transactions under certain conditions,",
            "it is contained in a witness statement for insurance claim evaluation and settlement,",
            "it is needed to identify injured, ill, or deceased people and communicate with next of kin,",
            "there are reasonable grounds to believe an individual has been or may be a victim of financial abuse,",
            "collection and use with consent would jeopardize information availability or accuracy and collection is necessary for breach of agreement or violation investigation,",
            "disclosure is required by law, such as a subpoena or court order,",
            "it was created in the course of employment, business, or profession and consistent with the information's original purpose,",
            "its sole purpose is for journalism, art, or literature,",
            "it is publicly available and required by law.",
          ]}
        />
      </div>

      <div className="space-y-4">
        <H2>When and With Whom Do We Share Your Personal Information?</H2>
        <P>Your personal information may be shared in the following cases:</P>
        <P>
          <span className="text-white font-medium">Business Transfers:</span>{" "}
          During negotiations or completion of a merger, sale of assets,
          financing, or acquisition of our company or a part of it, your
          information may be shared or transferred to another company.
        </P>
        <P>
          <span className="text-white font-medium">Working with Vendors:</span>{" "}
          To provide the Services, the Company works with various third-parties.
          The Company may share your personal information to the extent it
          ensures adherence to the Company&rsquo;s Terms &amp; Conditions and
          to otherwise protect against fraud or manipulation involving the
          Company or third-parties.
        </P>
      </div>

      <div className="space-y-4">
        <H2>Do We Use Cookies and Other Tracking Technologies?</H2>
        <P>
          The use of cookies and other tracking technologies (e.g. web beacons,
          pixels) may allow access or storage of information. Our Cookie Notice
          provides detailed information on our usage of these technologies and
          offers options to decline certain cookies.
        </P>
        <P>
          We also utilize various tracking methods such as Google AdWords, Meta
          Advertising, and Google Analytics to gather and store data on user
          interactions with our websites.
        </P>
      </div>

      <div className="space-y-4">
        <H2>How Long Do We Keep Your Information?</H2>
        <P>
          We retain your personal information only as long as necessary or
          legally allowed, including for tax, accounting, or other legal
          reasons. When our business no longer requires it, we will either
          delete or anonymize your personal information. If deletion is not
          feasible, we will securely store it and restrict access until it can
          be deleted.
        </P>
      </div>

      <div className="space-y-4">
        <H2>How Do We Keep Your Information Safe?</H2>
        <P>
          We have taken necessary and reasonable technical and organizational
          measures to secure personal information in our possession. However,
          the Internet and information storage technology are not foolproof, so
          we cannot guarantee that your information will not be accessed,
          stolen, or altered by unauthorized third parties.
        </P>
        <P>
          While we strive to protect your personal information, it is your
          responsibility to ensure the safety of the information you transmit
          through our Services. Use caution when using the Services and only in
          a secure environment.
        </P>
      </div>

      <div className="space-y-4">
        <H2>Do We Collect Information from Minors?</H2>
        <P>
          We do not intentionally gather information from or target individuals
          under 18. By using our services, you certify that you are 18 or
          older, or the parent/guardian of a minor using the services with your
          consent.
        </P>
        <P>
          In case we discover any personal information from minors, we will
          promptly disable their account and erase the data from our records. If
          you become aware of any information collected from minors, please
          contact us at <Email address="info@atdashboards.com" />.
        </P>
      </div>

      <div className="space-y-4">
        <H2>What Are Your Privacy Rights?</H2>
        <P>
          In some regions with applicable data protection laws (such as the EEA,
          UK, and Canada), you have certain rights, such as:
        </P>
        <UL
          items={[
            "Requesting access and a copy of your personal information.",
            "Requesting correction or deletion.",
            "Limiting the processing of your personal information and data portability (if applicable).",
            "Objecting to the processing of your personal information under certain circumstances.",
          ]}
        />
        <P>If you wish to make such a request, please contact us.</P>
        <P>
          If you reside in the European Economic Area or the UK and think that
          your personal information is being mishandled, you can file a
          complaint with your local data protection authority. Find their
          contact details at:{" "}
          <ExternalLink href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm">
            https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
          </ExternalLink>
          .
        </P>
        <P>
          If you are in Switzerland, the data protection authorities&rsquo;
          information can be found at:{" "}
          <ExternalLink href="https://www.edoeb.admin.ch/edoeb/en/home.html">
            https://www.edoeb.admin.ch/edoeb/en/home.html
          </ExternalLink>
          .
        </P>
        <P>
          <span className="text-white font-medium">
            Withdrawing your Consent:
          </span>{" "}
          If your personal information is being processed based on your consent,
          either expressed or implied as per the relevant laws, you have the
          right to withdraw it at any moment.
        </P>
      </div>

      <div className="space-y-4">
        <H2>Opting Out of Marketing and Promotional Communications</H2>
        <P>
          To stop receiving our marketing and promotional emails, simply click
          the unsubscribe link in the emails we send you. You will then be
          removed from our marketing lists. Note that we may still send you
          non-marketing communications such as service-related updates, account
          administration, responding to your service requests, etc.
        </P>
      </div>

      <div className="space-y-4">
        <H2>Account Information</H2>
        <P>
          To review or change information in your account or close it, follow
          these steps:
        </P>
        <UL
          items={[
            "Log in to your account settings and update your user account.",
            "Contact us using the provided contact information.",
          ]}
        />
        <P>
          Note: Upon request, we will deactivate or delete your account and
          information from our active databases. However, some information may
          be retained in our files for fraud prevention, problem resolution,
          investigations, enforcement of legal terms, and compliance with legal
          requirements.
        </P>
      </div>

      <div className="space-y-4">
        <H2>Cookies and Similar Technologies</H2>
        <P>
          Web browsers are typically configured to accept cookies by default.
          You can choose to remove or reject cookies, but this may impact
          certain features or services of our Services. To opt out of
          interest-based ads by advertisers on our Services, go to{" "}
          <ExternalLink href="https://youradchoices.com/control">
            https://youradchoices.com/control
          </ExternalLink>
          .
        </P>
        <P>
          For privacy-related questions or comments, email us at{" "}
          <Email address="info@atdashboards.com" />.
        </P>
      </div>

      <div className="space-y-4">
        <H2>Controls for Do-Not-Track Features</H2>
        <P>
          Many web browsers, mobile OS and apps have a Do-Not-Track
          (&ldquo;DNT&rdquo;) feature to signal your preference for not having
          your online browsing activities monitored and collected. However, as
          there is no agreed technology standard for DNT, we do not currently
          respond to DNT browser signals or any other mechanism that
          communicates your preference not to be tracked. If a future standard
          for online tracking is adopted, we will update this privacy notice and
          inform you.
        </P>
      </div>

      <div className="space-y-4">
        <H2>Do California Residents Have Specific Privacy Rights?</H2>
        <P>
          As a California resident, you have specific rights. While the Company
          does not solicit or accept minors under 18 years of age, if you are a
          minor under 18 years old and have a registered account with us, you
          have the right to request the removal of unwanted data from your
          account.
        </P>
        <P>
          To make this request, please reach out to us via email at{" "}
          <Email address="info@atdashboards.com" /> with your email address and
          a statement confirming your residency in California. We will take
          steps to ensure that the data is not publicly displayed on our
          services, but please note that it may not be fully or entirely deleted
          from all of our systems (such as backups, etc.).
        </P>
      </div>

      <div className="space-y-4">
        <H2>CCPA Privacy Notice</H2>
        <P>
          According to the California Code of Regulations, a
          &ldquo;resident&rdquo; is defined as:
        </P>
        <P>
          (1) any individual who is in California for purposes other than
          temporary or transitory, and
        </P>
        <P>
          (2) any individual who has a permanent home in California but is
          temporarily outside the state for a transitory purpose.
        </P>
        <P>
          Individuals who do not meet the definition of &ldquo;resident&rdquo;
          are defined as &ldquo;non-residents.&rdquo; If you are considered a
          &ldquo;resident&rdquo; under this definition, certain rights and
          obligations must be followed in regards to your personal information.
        </P>

        <p className="text-white font-medium">
          How Do We Use and Share Your Personal Information?
        </p>
        <P>
          For additional details on our data collection and sharing procedures,
          please refer to our privacy notice. To get in touch with us, you can
          email us at <Email address="info@atdashboards.com" /> or visit{" "}
          <Link
            href="/"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            atdashboards.com
          </Link>
          .
        </P>
        <P>
          If you choose to use an authorized agent to opt out, please note that
          we may reject the request if the authorized agent cannot provide
          proper proof of their authorization to act on your behalf.
        </P>

        <p className="text-white font-medium">
          Will Your Information Be Shared With Anyone Else?
        </p>
        <P>
          We may share your personal information with our service providers in
          accordance with the terms outlined in our contracts with them. These
          service providers are for-profit entities that process information on
          our behalf while complying with the CCPA&rsquo;s rigorous privacy
          standards.
        </P>
        <P>
          We may use your personal information for internal business purposes,
          such as technological advancement and demonstration research, but this
          is not considered &ldquo;selling&rdquo; your personal information.
        </P>
        <P>
          In the past 12 months, the Company has not disclosed, sold, or shared
          any personal information with third parties for business or commercial
          purposes. We will not sell or share personal information about website
          visitors, users, or other consumers in the future.
        </P>
      </div>

      <div className="space-y-4">
        <H2>Your Rights With Respect to Your Personal Data</H2>

        <p className="text-white font-medium">
          Right to Request Deletion of the Data — Request to Delete
        </p>
        <P>
          You have the right to request the deletion of your personal
          information. We will comply with your request, subject to certain
          exceptions under the law, such as (but not limited to) when another
          consumer is exercising their right to free speech, when we are
          obligated to comply with a legal requirement, or when processing is
          necessary to prevent illegal activities.
        </P>

        <p className="text-white font-medium">
          Right to Be Informed — Request to Know
        </p>
        <P>You have the right to know:</P>
        <UL
          items={[
            "If we collect and use your personal information,",
            "The types of personal information we collect,",
            "The reasons for collecting the personal information,",
            "Whether we sell or share personal information with third parties,",
            "The types of personal information that have been sold, shared, or disclosed for business purposes,",
            "The third parties to whom the personal information was sold, shared, or disclosed for business purposes,",
            "The purpose of collecting, selling, or sharing personal information,",
            "The specific personal information we have collected about you.",
          ]}
        />
        <P>
          By law, we are not obligated to supply or remove consumer information
          that has been de-identified in response to a consumer&rsquo;s
          request, or to re-identify individual data to confirm a
          consumer&rsquo;s request.
        </P>

        <p className="text-white font-medium">
          Right to Non-Discrimination for the Exercise of a Consumer&rsquo;s
          Privacy Rights
        </p>
        <P>
          We will not engage in discrimination if you exercise your privacy
          rights. You have the right to limit the use and disclosure of
          sensitive personal information, and we do not handle
          consumers&rsquo; sensitive personal information.
        </P>

        <p className="text-white font-medium">Verification Process</p>
        <P>
          To confirm your identity when we receive your request, we may need to
          verify that you are the same person whose information we have on
          record. This verification process may require us to ask for additional
          information from you that matches what we already have.
        </P>
        <P>
          For instance, based on the type of request you submit, we may request
          specific information to verify, or reach out to you using a previously
          provided communication method, such as phone or email. Other methods
          of verification may also be employed depending on the situation.
        </P>
        <P>
          The personal information you provide in your request will only be
          utilized to verify your identity and authority to make the request. We
          will aim to minimize the need to request additional information from
          you for verification purposes.
        </P>
        <P>
          If our existing information is insufficient to verify your identity,
          we may ask for additional information to verify your identity, as well
          as for security and fraud prevention purposes. Once the verification
          process is completed, any additional information you provide will be
          promptly deleted.
        </P>

        <p className="text-white font-medium">Other Privacy Rights</p>
        <UL
          items={[
            "You have the right to object to the processing of your personal information.",
            "You have the right to request correction of your personal data if it is inaccurate or outdated, or to request that processing be limited.",
            "You may appoint an authorized agent to make a request under the CCPA on your behalf, but we may reject the request if the authorized agent fails to provide proof of their authorization to act on your behalf.",
            "You may request that your personal information not be sold or shared with third parties in the future. We will respond to your opt-out request within 15 days from the date of receipt.",
          ]}
        />
        <P>
          To assert these rights, contact us via{" "}
          <Email address="info@atdashboards.com" /> or refer to the contact
          information at the bottom of this document. If you have a concern
          about our data handling, we&rsquo;d like to hear from you.
        </P>
      </div>

      <div className="space-y-4">
        <H2>Do We Make Updates to This Notice?</H2>
        <P>
          This privacy notice may be revised periodically, with the updated
          version indicated by a new &ldquo;Revised&rdquo; date. It will become
          effective immediately upon release. We may notify you of significant
          changes by posting a prominent notice or sending you a notification.
          It&rsquo;s important to regularly review this privacy notice to stay
          informed of how we safeguard your information.
        </P>
      </div>

      <div className="space-y-4">
        <H2>How Can You Contact Us About This Notice?</H2>
        <P>
          For questions or comments regarding this notice, you may reach us via
          email at <Email address="info@atdashboards.com" />.
        </P>
      </div>

      <div className="space-y-4">
        <H2>
          How Can You Review, Update, or Delete the Data We Collect from You?
        </H2>
        <P>
          Depending on your country&rsquo;s laws, you may have the right to
          access, modify, or delete the personal information we have collected
          from you. To do so, please send your request via email at{" "}
          <Email address="info@atdashboards.com" />.
        </P>
      </div>
    </PolicyPage>
  );
}
