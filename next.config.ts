import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  async redirects() {
    return [
      {
        source: "/ai-credits",
        destination: "/",
        permanent: false,
      },
      {
        source: "/google-workspace",
        destination: "/digital-workspace",
        permanent: true,
      },
      {
        source: "/gemini-enterprise",
        destination: "/enterprise-intelligence",
        permanent: true,
      },
      {
        source: "/ai-integration",
        destination: "/enterprise-intelligence",
        permanent: true,
      },
      {
        source: "/cloud-infrastructure",
        destination: "/",
        permanent: true,
      },
      {
        source: "/interoperability",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
