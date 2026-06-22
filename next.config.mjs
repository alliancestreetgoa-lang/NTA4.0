/** @type {import('next').NextConfig} */

// When deploying to GitHub Pages (project site), assets must be served from
// /<repo-name>. The Pages workflow injects PAGES_BASE_PATH; local dev leaves it empty.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath,
  trailingSlash: true,
  // Exposed to components so local <Image> sources can be base-path-prefixed
  // (next/image does not auto-prefix basePath for unoptimized static exports).
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
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
