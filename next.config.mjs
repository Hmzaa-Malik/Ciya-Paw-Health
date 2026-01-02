/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  
  // If your repo is at github.com/username/repo-name, uncomment and set:
  // basePath: '/repo-name',
}

export default nextConfig
