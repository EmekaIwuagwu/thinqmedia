/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'thinqmedia.com.ng',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            }
        ],
    },
};

export default nextConfig;
