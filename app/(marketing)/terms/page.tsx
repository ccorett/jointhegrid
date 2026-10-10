import Link from "next/link";
import { PageHero } from "@/components/marketing/page-hero";
import { PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/contact";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

const TERMS_SUPPORT_EMAIL = "support@grid.co.tt";

export const metadata = pageMetadata({
  title: "Terms of Service | #jointheGRID",
  description:
    "Terms governing the use of the #jointheGRID website and online enquiry services.",
  path: "/terms",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Terms", path: "/terms" },
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

export default function TermsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[...breadcrumbs]} />
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="Last updated: October 2026"
      />
      <section className="border-b border-border bg-light-bg section-y-compact">
        <div
          className={cn(
            "content-container mx-auto max-w-[54rem]",
            "space-y-10 text-base leading-relaxed text-body-text md:text-[17px] lg:text-lg lg:leading-relaxed"
          )}
        >
          <PolicySection id="about-terms" title="1. About these terms">
            <p>
              These Terms of Service govern your use of the #jointheGRID website
              operated by Global Resilient Infrastructure &amp; Digitalisation
              Ltd.
            </p>
            <p>By accessing or using this website, you agree to these Terms of Service.</p>
            <p>
              If you do not agree with these terms, you should not use the
              website.
            </p>
          </PolicySection>

          <PolicySection id="about-grid" title="2. About #jointheGRID">
            <p>
              #jointheGRID provides technology solutions and services in areas
              including Digital Workspace, AI Integration and Cloud
              Infrastructure.
            </p>
            <p>
              Services may include Deployment, Administration and Adoption.
            </p>
            <p>
              Information presented on this website is intended to provide a
              general overview of our capabilities. The specific scope,
              deliverables, responsibilities, timelines, pricing and commercial
              terms for any engagement will be established separately.
            </p>
          </PolicySection>

          <PolicySection id="website-information" title="3. Website information">
            <p>We aim to keep information on this website accurate and current.</p>
            <p>
              However, website content is provided for general information and
              may be updated, changed or removed without notice.
            </p>
            <p>
              Descriptions of solutions, services, capabilities, timelines or
              processes on the website do not constitute a binding offer,
              guarantee or contractual commitment.
            </p>
            <p>
              Any formal engagement with #jointheGRID will be governed by the
              applicable quotation, proposal, statement of work, purchase order,
              agreement or other commercial document accepted by the relevant
              parties.
            </p>
          </PolicySection>

          <PolicySection id="enquiries" title="4. Enquiries">
            <p>
              The website allows visitors to submit enquiries about #jointheGRID
              solutions and services.
            </p>
            <p>
              Submitting an enquiry does not create a contractual relationship
              between you and #jointheGRID.
            </p>
            <p>An enquiry does not guarantee:</p>
            <PolicyList
              items={[
                "Availability of services",
                "Acceptance of a project",
                "Specific pricing",
                "Specific delivery dates",
                "Specific technical outcomes",
              ]}
            />
            <p>
              Any commercial commitment must be confirmed separately by
              #jointheGRID.
            </p>
          </PolicySection>

          <PolicySection id="communication" title="5. Communication">
            <p>
              If you submit an enquiry, contact us by email or communicate with
              us through WhatsApp, you authorize #jointheGRID to use the contact
              information you provide to respond to your request and continue
              relevant business discussions.
            </p>
            <p>
              Electronic communications may be subject to the terms and privacy
              practices of the service providers used to transmit those
              communications.
            </p>
          </PolicySection>

          <PolicySection id="quotations" title="6. Quotations and proposals">
            <p>
              Prices, estimates, timelines and service descriptions discussed
              informally or displayed on the website are not binding unless they
              are included in a formal commercial document issued by
              #jointheGRID.
            </p>
            <p>Formal quotations and proposals may include their own:</p>
            <PolicyList
              items={[
                "Scope",
                "Pricing",
                "Payment terms",
                "Delivery conditions",
                "Validity periods",
                "Service levels",
                "Warranties",
                "Limitations",
                "Responsibilities",
              ]}
            />
            <p>
              Where a formal agreement contains terms that differ from these
              website Terms of Service, the terms of the formal agreement will
              govern the relevant engagement.
            </p>
          </PolicySection>

          <PolicySection id="third-party" title="7. Third party technologies and services">
            <p>
              #jointheGRID may design, deploy, administer or integrate
              technologies supplied by third parties.
            </p>
            <p>
              Third party products and services may be subject to separate
              terms, licences, privacy policies, service levels, availability
              commitments and acceptable use requirements established by their
              respective providers.
            </p>
            <p>
              #jointheGRID does not control the operation, availability,
              pricing, functionality or policies of independent third party
              services.
            </p>
            <p>
              Nothing on this website should be interpreted as modifying the
              terms imposed by a third party technology provider.
            </p>
          </PolicySection>

          <PolicySection id="external-links" title="8. External links">
            <p>
              The website may contain links to third party websites, partner
              profiles, messaging platforms or other external resources.
            </p>
            <p>These links are provided for convenience or reference.</p>
            <p>
              #jointheGRID is not responsible for the content, security,
              availability or privacy practices of third party websites.
            </p>
            <p>
              Visiting an external website is subject to that provider&apos;s own
              terms and policies.
            </p>
          </PolicySection>

          <PolicySection id="intellectual-property" title="9. Intellectual property">
            <p>
              Unless otherwise stated, the content and materials made available
              through this website are owned by, licensed to or used with
              permission by Global Resilient Infrastructure &amp; Digitalisation
              Ltd.
            </p>
            <p>This may include:</p>
            <PolicyList
              items={[
                "The #jointheGRID brand",
                "Logos and visual identity",
                "Website design",
                "Written content",
                "Graphics",
                "Diagrams",
                "Service descriptions",
                "Documents and downloadable materials",
              ]}
            />
            <p>
              You may view and use website content for legitimate informational
              and business purposes.
            </p>
            <p>
              You may not reproduce, distribute, modify, publish, sell or
              commercially exploit protected website content without appropriate
              permission.
            </p>
            <p>
              Third party trademarks remain the property of their respective
              owners.
            </p>
          </PolicySection>

          <PolicySection id="acceptable-use" title="10. Acceptable use">
            <p>
              You must not use this website in a way that could damage, disrupt
              or compromise the website, its infrastructure or other users.
            </p>
            <p>You must not knowingly:</p>
            <PolicyList
              items={[
                "Submit malicious code",
                "Attempt unauthorized access",
                "Interfere with website operation",
                "Circumvent security controls",
                "Submit fraudulent or misleading enquiries",
                "Use automated systems in a manner that materially disrupts the website",
                "Attempt to obtain information or access that you are not authorized to receive",
              ]}
            />
            <p>
              We may restrict access where reasonably necessary to protect the
              website, our systems or other users.
            </p>
          </PolicySection>

          <PolicySection id="no-advice" title="11. No professional advice">
            <p>Information provided through this website is general in nature.</p>
            <p>
              It should not be treated as legal, financial, regulatory or other
              professional advice.
            </p>
            <p>
              Organizations remain responsible for obtaining appropriate
              professional advice where required for their specific
              circumstances.
            </p>
          </PolicySection>

          <PolicySection id="availability" title="12. Website availability">
            <p>
              We aim to maintain a reliable website, but continuous or
              uninterrupted access cannot be guaranteed.
            </p>
            <p>
              The website may occasionally be unavailable due to maintenance,
              technical issues, hosting services, internet connectivity, security
              measures or circumstances outside our control.
            </p>
            <p>
              We may modify, suspend or discontinue parts of the website where
              reasonably necessary.
            </p>
          </PolicySection>

          <PolicySection id="security" title="13. Security">
            <p>
              Reasonable measures are used to protect the website and information
              submitted through it.
            </p>
            <p>
              However, no internet based system can be guaranteed to be
              completely secure.
            </p>
            <p>
              Users should not submit passwords, payment credentials,
              confidential authentication information or other highly sensitive
              information through the general enquiry form.
            </p>
          </PolicySection>

          <PolicySection id="disclaimer" title="14. Disclaimer of warranties">
            <p>
              To the extent permitted by applicable law, this website and its
              general content are provided without warranties regarding
              uninterrupted availability, freedom from errors or suitability for
              a particular purpose.
            </p>
            <p>
              Nothing in this section excludes rights or obligations that cannot
              legally be excluded.
            </p>
          </PolicySection>

          <PolicySection id="liability" title="15. Limitation of liability">
            <p>
              To the extent permitted by applicable law, Global Resilient
              Infrastructure &amp; Digitalisation Ltd. will not be responsible
              for indirect, incidental or consequential loss arising solely from
              the use of, inability to use or reliance on general information
              contained on this website.
            </p>
            <p>
              This website limitation does not replace or modify any liability
              provisions agreed separately under a formal customer contract.
            </p>
            <p>
              Nothing in these Terms is intended to exclude or limit liability
              where such exclusion or limitation is prohibited by applicable
              law.
            </p>
          </PolicySection>

          <PolicySection id="privacy" title="16. Privacy">
            <p>
              Personal information submitted through the website is handled in
              accordance with the #jointheGRID Privacy Policy.
            </p>
            <p>
              The{" "}
              <Link href="/privacy" className={linkClass}>
                Privacy Policy
              </Link>{" "}
              should be read together with these Terms of Service.
            </p>
          </PolicySection>

          <PolicySection id="website-changes" title="17. Changes to the website">
            <p>
              #jointheGRID may update website content, solutions, services,
              features or functionality from time to time.
            </p>
            <p>
              The inclusion of a solution or service on the website does not
              guarantee that it will remain available indefinitely.
            </p>
          </PolicySection>

          <PolicySection id="terms-changes" title="18. Changes to these terms">
            <p>
              These Terms of Service may be updated when the website, business
              operations, services or applicable requirements change.
            </p>
            <p>
              The current version will be published on this page together with
              the date of the latest update.
            </p>
            <p>
              Continued use of the website after an updated version is published
              constitutes acceptance of the updated terms to the extent permitted
              by applicable law.
            </p>
          </PolicySection>

          <PolicySection id="governing-law" title="19. Governing law">
            <p>
              These Terms of Service are governed by the laws of the Republic of
              Trinidad and Tobago.
            </p>
            <p>
              Any dispute relating specifically to the use of this website will
              be subject to the applicable laws and courts of Trinidad and
              Tobago, unless another arrangement is required by law or agreed
              separately in writing.
            </p>
          </PolicySection>

          <PolicySection id="contact" title="20. Contact">
            <p className="font-medium text-primary-navy">
              GRID Ltd.
              <br />
              #jointheGRID
              <br />
              Trinidad and Tobago
            </p>
            <p>
              Email:{" "}
              <a
                href={`mailto:${TERMS_SUPPORT_EMAIL}`}
                className={linkClass}
              >
                {TERMS_SUPPORT_EMAIL}
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
          </PolicySection>
        </div>
      </section>
    </>
  );
}
