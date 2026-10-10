import Link from "next/link";
import { PageHero } from "@/components/marketing/page-hero";
import { PHONE_DISPLAY, SALES_EMAIL, WHATSAPP_URL } from "@/lib/contact";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Privacy | #jointheGRID",
  description:
    "Privacy Policy for #jointheGRID: how Global Resilient Infrastructure & Digitalisation Ltd. collects, uses and protects information from website visitors and enquiries.",
  path: "/privacy",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Privacy", path: "/privacy" },
] as const;

const linkClass =
  "font-medium text-infrastructure-blue hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-infrastructure-blue focus-visible:ring-offset-2";

function PolicySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-display text-xl font-bold leading-snug text-primary-navy md:text-2xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-6">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[...breadcrumbs]} />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated: October 2026"
      />
      <section className="border-b border-border bg-light-bg section-y-compact">
        <div
          className={cn(
            "content-container mx-auto max-w-[54rem]",
            "space-y-10 text-base leading-relaxed text-body-text md:text-[17px] lg:text-lg lg:leading-relaxed"
          )}
        >
          <PolicySection id="about" title="1. About this policy">
            <p>
              This Privacy Policy explains how Global Resilient Infrastructure
              &amp; Digitalisation Ltd., operating as #jointheGRID, collects,
              uses, stores and protects personal information when you visit our
              website or contact us through our online services.
            </p>
            <p>
              #jointheGRID is based in Trinidad and Tobago and provides Digital
              Workspace, AI Integration and Cloud Infrastructure solutions across
              the Caribbean.
            </p>
            <p>
              We aim to handle personal information responsibly and in accordance
              with applicable data protection requirements, including the Data
              Protection Act, 2011 of Trinidad and Tobago to the extent that its
              provisions are in force.
            </p>
          </PolicySection>

          <PolicySection id="collect" title="2. Information we collect">
            <p>
              When you submit an enquiry through this website, we may collect
              information such as:
            </p>
            <PolicyList
              items={[
                "Full name",
                "Organization name",
                "Work email address",
                "Telephone or WhatsApp number",
                "Organization size",
                "Area of interest",
                "Information included in your enquiry or message",
              ]}
            />
            <p>
              You choose whether to provide this information. Certain information
              may be required so that we can properly respond to your enquiry.
            </p>
            <p>
              Our website infrastructure may also collect limited technical
              information required to operate and secure the website, such as IP
              address, browser type, device information, request information and
              server logs.
            </p>
          </PolicySection>

          <PolicySection id="use" title="3. How we use your information">
            <p>Information submitted through the website may be used to:</p>
            <PolicyList
              items={[
                "Respond to enquiries",
                "Understand your organization's requirements",
                "Discuss our solutions and services",
                "Prepare quotations, proposals or other requested information",
                "Communicate with you about an existing or potential business relationship",
                "Maintain records of business communications",
                "Operate, maintain and secure the website",
                "Detect or prevent misuse, spam or other security issues",
              ]}
            />
            <p>
              We do not use information submitted through the enquiry form for
              purposes unrelated to your interaction with #jointheGRID without an
              appropriate reason or consent where required.
            </p>
          </PolicySection>

          <PolicySection id="enquiry" title="4. Enquiry form and email">
            <p>
              When you submit the website enquiry form, the information you provide
              is transmitted to #jointheGRID through our website and email
              infrastructure.
            </p>
            <p>
              The enquiry may be delivered to authorized #jointheGRID email
              accounts so that a member of the team can respond.
            </p>
            <p>
              Your submitted email address may be used as the reply address for
              that communication.
            </p>
          </PolicySection>

          <PolicySection id="whatsapp" title="5. WhatsApp">
            <p>
              The website provides links that allow visitors to contact
              #jointheGRID through WhatsApp.
            </p>
            <p>
              If you choose to use WhatsApp, your interaction is also subject to
              WhatsApp's own terms and privacy practices.
            </p>
            <p>
              Information you provide through WhatsApp may be used by #jointheGRID
              to respond to your enquiry and manage the resulting business
              communication.
            </p>
          </PolicySection>

          <PolicySection id="cookies" title="6. Cookies and analytics">
            <p>
              The website may use essential technologies required for normal site
              operation, security and performance.
            </p>
            <p>
              If analytics, advertising or other nonessential tracking technologies
              are introduced in the future, this Privacy Policy and any required
              consent mechanisms should be updated before those technologies are
              used.
            </p>
            <p>
              We do not intend to use hidden tracking simply for the purpose of
              collecting unnecessary personal information.
            </p>
          </PolicySection>

          <PolicySection id="share" title="7. How we share information">
            <p>#jointheGRID does not sell personal information.</p>
            <p>
              Information may be shared with service providers where necessary to
              operate the website and business, including providers involved in:
            </p>
            <PolicyList
              items={[
                "Website hosting",
                "Email delivery",
                "Information security",
                "Website infrastructure",
                "Technical support",
              ]}
            />
            <p>
              These providers may process information only as necessary to provide
              their services or as otherwise permitted by applicable law.
            </p>
            <p>
              Information may also be disclosed where required by law, regulation,
              legal process or a lawful request from an appropriate authority.
            </p>
          </PolicySection>

          <PolicySection id="international" title="8. International processing">
            <p>
              Some of the technology services used to operate this website may
              process or store information outside Trinidad and Tobago.
            </p>
            <p>
              Where this occurs, reasonable steps are taken to use reputable
              service providers and appropriate safeguards for the information
              being processed.
            </p>
          </PolicySection>

          <PolicySection id="retention" title="9. Data retention">
            <p>
              Personal information is retained only for as long as reasonably
              necessary for the purpose for which it was collected, including
              responding to enquiries, maintaining business records, meeting legal
              or accounting requirements, resolving disputes and protecting the
              security of our systems.
            </p>
            <p>
              Information that is no longer required may be deleted, anonymized or
              otherwise securely disposed of where appropriate.
            </p>
          </PolicySection>

          <PolicySection id="security" title="10. Information security">
            <p>
              Reasonable administrative and technical measures are used to protect
              personal information from unauthorized access, loss, misuse,
              alteration or disclosure.
            </p>
            <p>
              However, no website, email system or internet transmission can be
              guaranteed to be completely secure.
            </p>
            <p>
              Visitors should therefore avoid submitting passwords, financial
              credentials or other highly sensitive information through the general
              enquiry form.
            </p>
          </PolicySection>

          <PolicySection id="your-information" title="11. Your information">
            <p>
              Subject to applicable law, you may contact us to request information
              about personal information we hold about you or to request that
              inaccurate information be corrected.
            </p>
            <p>
              You may also contact us if you have questions about how your personal
              information has been used or wish to request deletion where
              appropriate.
            </p>
            <p>
              Requests may be sent to:{" "}
              <a href={`mailto:${SALES_EMAIL}`} className={linkClass}>
                {SALES_EMAIL}
              </a>
            </p>
            <p>
              We may need to verify your identity before acting on certain
              requests.
            </p>
          </PolicySection>

          <PolicySection id="external-links" title="12. External links">
            <p>
              The website may contain links to third party websites or services.
            </p>
            <p>
              These may include partner profiles, social platforms, messaging
              services or other external resources.
            </p>
            <p>
              #jointheGRID is not responsible for the privacy practices or content
              of third party websites. Visitors should review the privacy policies
              of those services when leaving our website.
            </p>
          </PolicySection>

          <PolicySection id="children" title="13. Children">
            <p>
              The #jointheGRID website and services are intended for organizations
              and business users.
            </p>
            <p>
              The website is not designed to knowingly collect personal
              information from children.
            </p>
          </PolicySection>

          <PolicySection id="changes" title="14. Changes to this policy">
            <p>
              This Privacy Policy may be updated when our website, services,
              technology providers or legal obligations change.
            </p>
            <p>
              The current version will be published on this page with the date of
              the latest update.
            </p>
          </PolicySection>

          <PolicySection id="contact" title="15. Contact">
            <p className="font-medium text-primary-navy">
              Global Resilient Infrastructure &amp; Digitalisation Ltd.
              <br />
              #jointheGRID
              <br />
              Trinidad and Tobago
            </p>
            <p>
              Email:{" "}
              <a href={`mailto:${SALES_EMAIL}`} className={linkClass}>
                {SALES_EMAIL}
              </a>
            </p>
            <p>
              WhatsApp:{" "}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {PHONE_DISPLAY}
              </a>
            </p>
            <p className="pt-2 text-base md:text-[17px]">
              You may also use our{" "}
              <Link href="/enquiry" className={linkClass}>
                enquiry page
              </Link>
              .
            </p>
          </PolicySection>
        </div>
      </section>
    </>
  );
}
