/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  basePath: "/Ciya-Paw-Health",
  assetPrefix: "/Ciya-Paw-Health/",

  trailingSlash: true,

  // 👇 THIS IS THE KEY PART
  distDir: "docs",
}

module.exports = nextConfig
