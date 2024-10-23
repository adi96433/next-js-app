/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rickandmortyapi.com", // Changed to a string
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "us.123rf.com", // Added as a separate pattern
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
