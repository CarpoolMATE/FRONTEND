import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'placehold.co',
      },
      {
        hostname: 'carool-s3.s3.ap-northeast-2.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
