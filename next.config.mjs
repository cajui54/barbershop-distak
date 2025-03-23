/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fs.sh',
                pathname: '/f/**',
            },
            {
                protocol: 'https',
                hostname: 'utfs.io',
                pathname: '/f/**',
            },
            {
                protocol: 'https',
                hostname: 'tbumv1vygb.ufs.sh',
                pathname: '/f/**',
            },
        ],
    },
};

export default nextConfig;
