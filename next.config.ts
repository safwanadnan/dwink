import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'nexxt-app'; // Replace with your actual repository name

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
