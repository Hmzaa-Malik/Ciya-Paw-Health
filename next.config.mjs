/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Uncomment the following lines to enable static export for GitHub Pages:
  // output: 'export',
  // basePath: '/paw-health', // Replace 'paw-health' with your GitHub repo name
}

export default nextConfig
