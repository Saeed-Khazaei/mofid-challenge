/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');
const nextConfig = {
  reactStrictMode: true,
  ...nextTranslate(),
  images: {
    domains: ['assets.coingecko.com'],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
