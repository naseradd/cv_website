import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/cv_website',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
