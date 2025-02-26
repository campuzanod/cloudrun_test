import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
  output: 'standalone',
  swcMinify: true,
  poweredByHeader: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizeCss: true,
  },
  webpack: (config, { dev }) => {
    // Production optimizations only
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        minimize: true,
        // Add additional optimizations for production
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
        },
      }
    }
    return config;
  },
};

export default nextConfig;