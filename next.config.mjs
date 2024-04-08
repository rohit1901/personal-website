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
        ]
    }
};

export default nextConfig;
