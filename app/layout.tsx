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
    "#jointhegrid helps organizations deploy, administer and adopt Google Workspace and Gemini Enterprise—creating a connected digital workplace.",
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
