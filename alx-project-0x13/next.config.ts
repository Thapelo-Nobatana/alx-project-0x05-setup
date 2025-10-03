import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["prlabsapi.com"], // add your image host here
  },
};

export default nextConfig;
