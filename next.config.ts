import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "zrgiilcbdaxplrrjgskt.supabase.co",
      },
      {
        protocol: "https",
        hostname: "a0.muscache.com",
      },
    ],
  },
};

export default nextConfig;
