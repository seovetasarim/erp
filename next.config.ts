import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  turbopack: {},
  images: {
    qualities: [75, 90, 95],
  },
  async redirects() {
    return [
      {
        source: "/downloads/dijitalerp.rar",
        destination: "/api/download",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
