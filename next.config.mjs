/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  basePath: '/Ciya-Paw-Health',
  assetPrefix: '/Ciya-Paw-Health/',
  
  images: {
    unoptimized: true,
  },
  
  trailingSlash: true,
  
  typescript: {
    ignoreBuildErrors: true,
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
