import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY || '',
  },
  output: 'standalone',
  swcMinify: true,
};

export default nextConfig;