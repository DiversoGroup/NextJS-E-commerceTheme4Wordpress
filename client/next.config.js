/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    customKey: "customValue",
  },
  compress: true,
};

module.exports = nextConfig;
