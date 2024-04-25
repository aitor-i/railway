/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.graphql$/,
      loader: 'graphql-tag/loader', // Allows importing .graphql files
    });

    return config;
  },
};

export default nextConfig;
