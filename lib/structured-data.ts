import { SALES_EMAIL } from "@/lib/contact";
import { SITE_ORIGIN } from "@/lib/site-url";

export const LEGAL_NAME = "GRID Ltd.";
export const BRAND_NAME = "#jointheGRID";
export const ORG_TELEPHONE = "+1 868 483 4959";
export const PARTNER_PROFILE_URL =
  "https://cloud.google.com/find-a-partner/partner/global-resilient-infrastructure-and-digitalisation-grid-limited";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: LEGAL_NAME,
    alternateName: BRAND_NAME,
    url: SITE_ORIGIN,
    email: SALES_EMAIL,
    telephone: ORG_TELEPHONE,
    logo: `${SITE_ORIGIN}/brand/grid-symbol-light.webp`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "TT",
    },
    areaServed: "Caribbean",
    sameAs: [PARTNER_PROFILE_URL],
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item:
        item.path === "/"
          ? `${SITE_ORIGIN}/`
          : `${SITE_ORIGIN}${item.path}`,
    })),
  };
}
