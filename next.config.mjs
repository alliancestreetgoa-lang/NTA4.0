/** @type {import('next').NextConfig} */

// When deploying to GitHub Pages (project site), assets must be served from
// /<repo-name>. The Pages workflow injects PAGES_BASE_PATH; local dev leaves it empty.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath,
  trailingSlash: true,
  images: {
    // Static export cannot use the Next.js image optimizer.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
