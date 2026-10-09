import type { NextConfig } from "next";

const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "img-src 'self' data: blob: https:",
  "font-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline'",
  "connect-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
          },
          { key: "Content-Security-Policy", value: csp },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.jointhegrid.net" }],
        destination: "https://jointhegrid.net/:path*",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/enquiry",
        permanent: true,
      },
      {
        source: "/enterprise-intelligence",
        destination: "/ai-integration",
        permanent: true,
      },
      {
        source: "/google-workspace",
        destination: "/digital-workspace",
        permanent: true,
      },
      {
        source: "/gemini-enterprise",
        destination: "/ai-integration",
        permanent: true,
      },
      {
        source: "/hosting",
        destination: "/cloud-infrastructure",
        permanent: true,
      },
      {
        source: "/ai-credits",
        destination: "/digital-workspace",
        permanent: true,
      },
      {
        source: "/interoperability",
        destination: "/digital-workspace",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
