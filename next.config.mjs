/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  turbopack: {
    rules: {
      "*.graphql": {
        loaders: ["graphql-tag/loader"],
        as: "*.js",
      },
      "*.gql": {
        loaders: ["graphql-tag/loader"],
        as: "*.js",
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d28xxvmjntstuh.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "assets.lummi.ai",
      },
      {
        protocol: "https",
        hostname: "d1ljophloyhryl.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "d1.awsstatic.com",
      },
      {
        protocol: "https",
        hostname: "images.credly.com",
      },
      {
        protocol: "https",
        hostname: "app.skillsclub.com",
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
