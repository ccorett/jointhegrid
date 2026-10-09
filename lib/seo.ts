import type { Metadata } from "next";
import { SITE_ORIGIN } from "@/lib/site-url";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMeta): Metadata {
  return {
    title,
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: { canonical: `${SITE_ORIGIN}${path}` },
    openGraph: {
      title: `${title} | #jointhegrid`,
      description,
      url: `${SITE_ORIGIN}${path}`,
      siteName: "#jointhegrid",
      type: "website",
    },
  };
}
