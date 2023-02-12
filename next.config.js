/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  images: {
    domains: ["firebasestorage.googleapis.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/v0/b/omsu-schedule.appspot.com/**",
      },
    ],
  },
};

module.exports = nextConfig;
