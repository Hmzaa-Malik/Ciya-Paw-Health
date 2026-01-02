/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for GitHub Pages (static hosting only)
  output: "export",

  // GitHub Pages does not support Next.js image optimization
  images: {
    unoptimized: true,
  },

  // MUST match repo name exactly (case-sensitive)
  basePath: "/Ciya-Paw-Health",
  assetPrefix: "/Ciya-Paw-Health/",

  // Prevent routing issues on refresh
  trailingSlash: true,
}

module.exports = nextConfig
