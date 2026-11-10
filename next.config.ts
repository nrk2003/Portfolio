import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    // The original design has no standalone projects index — projects live on the homepage.
    return [{ source: '/projects', destination: '/#projects', permanent: false }];
  },
};

export default nextConfig;
