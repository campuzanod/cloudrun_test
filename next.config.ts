import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
  // Ensure serverless functions work properly in Cloud Run
  output: 'standalone',
};

export default nextConfig;