/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['example.com','th.bing.com','marketplace.foodotawp.com'],
        deviceSizes: [640, 750, 828, 1080, 1200],
        imageSizes: [16, 32, 48, 64, 96],
        path: '/_next/image',
        loader: 'default',
      },
}

module.exports = nextConfig
