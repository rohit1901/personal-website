/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'd28xxvmjntstuh.cloudfront.net',
            },
            {
                protocol: 'https',
                hostname: 'daisyui.com',
            },
            {
                protocol: 'https',
                hostname: 'scontent-dus1-1.cdninstagram.com',
            },
        ]
    }
};

export default nextConfig;
