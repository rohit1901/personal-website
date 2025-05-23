/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d28xxvmjntstuh.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "daisyui.com",
      },
      {
        protocol: "https",
        hostname: "scontent-dus1-1.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "*.literal.club",
      },
      {
        protocol: "http",
        hostname: "*.google.com",
      },
      {
        protocol: "https",
        hostname: "*.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "*.githubassets.com",
      },
      {
        protocol: "https",
        hostname: "*.gr-assets.com",
      },
    ],
  },
};

export default nextConfig;
