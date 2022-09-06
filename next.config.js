/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');
const nextConfig = {
  reactStrictMode: true,
  ...nextTranslate(),
  images: {
    domains: ['assets.coingecko.com'],
    formats: ['image/webp'],
  },
  env: {
    API_URL: process.env.API_URL,
    NEXT_URL: process.env.NEXT_URL,
  }
};

module.exports = nextConfig;
