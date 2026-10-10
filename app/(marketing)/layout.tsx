import Script from "next/script";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
      <Script
        src="https://app.fastbots.ai/embed.js"
        strategy="afterInteractive"
        data-bot-id="cm8wdsnhn04vgs5k5x0l8j898"
      />
    </>
  );
}
