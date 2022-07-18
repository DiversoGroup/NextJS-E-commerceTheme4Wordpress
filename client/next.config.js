/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    customKey: 'customValue',
  },
  compress: true,
};

module.exports = nextConfig;

// if (!process.env.NEXT_PUBLIC_WP_API_URL) {
//   throw new Error(`
//     Please provide a valid WordPress instance URL.
//     Add to your environment variables WORDPRESS_API_URL.
//   `);
// }

// module.exports = {
//   images: {
//     domains: [
//       process.env.NEXT_PUBLIC_WP_API_URL.match(/(http(?:s)?:\/\/)(.*)/)[2], // Valid WP Image domain.
//       '2.gravatar.com',
//       'secure.gravatar.com',
//     ],
//   },
// };
