/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-media0.fl.yelpcdn.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
