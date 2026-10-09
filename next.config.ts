import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
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
