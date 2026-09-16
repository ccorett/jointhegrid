import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a consultation with #jointhegrid for Google Workspace, Gemini Enterprise, or AI Credits.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
