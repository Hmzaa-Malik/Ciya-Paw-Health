/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  basePath: '/Ciya-Paw-Health',
  
  images: {
    unoptimized: true,
  },
  
  typescript: {
    ignoreBuildErrors: true,
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
