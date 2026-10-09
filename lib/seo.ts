import type { Metadata } from "next";
import { SITE_ORIGIN } from "@/lib/site-url";

export const OG_IMAGE_PATH = "/brand/og-share.jpg";

const OG_IMAGE = {
  url: `${SITE_ORIGIN}${OG_IMAGE_PATH}`,
  width: 1200,
  height: 630,
  alt: "#jointheGRID",
};

type PageMeta = {
  /** Full document title (use absolute titles from the SEO map). */
  title: string;
  description: string;
  path: string;
};

function canonicalUrl(path: string): string {
  if (path === "/" || path === "") {
    return `${SITE_ORIGIN}/`;
  }
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageMetadata({ title, description, path }: PageMeta): Metadata {
  const url = canonicalUrl(path);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "#jointheGRID",
      type: "website",
      locale: "en_TT",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
