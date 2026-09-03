import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // Allow the dev server to be accessed from other devices on the same LAN
  // (e.g. phones for mobile testing). Replace with your actual subnet if needed.
  allowedDevOrigins: ["192.168.1.*", "10.0.0.*"],
  // Redirect the bare www/non-www or trailing-slash variants to a single
  // canonical host at the edge once the production domain is known.
  async redirects() {
    return [];
  },
};

export default nextConfig;


