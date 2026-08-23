import type { NextConfig } from "next";

const repo = "Portfolio";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",

  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

export default nextConfig;