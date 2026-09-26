import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jointhegrid.com"),
  title: {
    default: "#jointhegrid — Digital Workspace + AI Integration",
    template: "%s | #jointhegrid",
  },
  description:
    "Google Workspace and Gemini Enterprise for Caribbean organizations. Deployment, administration and adoption from Trinidad & Tobago across the region.",
  icons: {
    icon: "/brand/jointhegrid-favicon.svg",
    apple: "/brand/jointhegrid-favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
