import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.aranyvallalkozas.eu",
      },
      {
        protocol: "https",
        hostname: "www.autoturul.eu",
      },
    ],
  },
};

export default nextConfig;
