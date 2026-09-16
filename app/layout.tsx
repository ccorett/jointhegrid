import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jointhegrid.com"),
  title: {
    default: "#jointhegrid — Digital Workplace Solutions",
    template: "%s | #jointhegrid",
  },
  description:
    "#jointhegrid helps organizations deploy, administer, and adopt Google Workspace and Gemini Enterprise across the Caribbean.",
  icons: {
    icon: "/brand/jointhegrid-favicon.svg",
    apple: "/brand/jointhegrid-favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
