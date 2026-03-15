/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: '/favicon.ico', destination: '/icon', permanent: false }];
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'play.google.com', pathname: '/**' },
      { protocol: 'https', hostname: 'tools.applemediaservices.com', pathname: '/**' },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
