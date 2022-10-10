/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => [
    {
      source: '/',
      destination: '/coins/market',
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
