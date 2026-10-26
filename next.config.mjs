const isDev = process.env.NODE_ENV === "development";

/**
 * Static-friendly CSP for the current threat model: no user-generated HTML,
 * no third-party scripts, and no auth/forms. `unsafe-inline` is required for
 * Next.js inline bootstrap/theme scripts without a nonce. A nonce-based policy
 * via `proxy.ts` would force every page to render dynamically and lose ISR.
 * Revisit that trade-off if comments, embeds, or user-authored HTML are added.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  `connect-src 'self'${isDev ? " ws: wss:" : ""}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "frame-src 'none'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  { key: "Strict-Transport-Security", value: "max-age=15552000" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  poweredByHeader: false,
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
    // High-res hero portraits render crisper at 90; 75 stays the default.
    qualities: [75, 90],
    // Only hosts observed in verified content. Everything else is rejected by
    // `getResumeImageUrl`/`getCoverImage` and falls back to a local asset.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1ljophloyhryl.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "d28xxvmjntstuh.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "i.gr-assets.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
