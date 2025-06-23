const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['images.pexels.com', 'blob.v0.dev'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'blob.v0.dev',
      }
    ],
    unoptimized: true,
  },
  env: {
    MONGO_URI: process.env.MONGO_URI,
    PEXELS_API_KEY: process.env.PEXELS_API_KEY,
    PEXELS_API_URL: process.env.PEXELS_API_URL,
    PEXELS_PER_PAGE: process.env.PEXELS_PER_PAGE,
    PEXELS_PAGE: process.env.PEXELS_PAGE,
    WHATSAPP_NUMBER: process.env.WHATSAPP_NUMBER,
  },
};

export default nextConfig;
