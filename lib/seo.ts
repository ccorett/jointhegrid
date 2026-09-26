import type { Metadata } from "next";

const BASE = "https://jointhegrid.com";

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
    alternates: { canonical: `${BASE}${path}` },
    openGraph: {
      title: `${title} | #jointhegrid`,
      description,
      url: `${BASE}${path}`,
      siteName: "#jointhegrid",
      type: "website",
    },
  };
}
