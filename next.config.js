/** @type {import('next').NextConfig} */
// import withPWA from "next-pwa";

// const runtimeCaching = require("next-pwa/cache");

const nextConfig = require("next-pwa")({
  experimental: {
    appDir: true,
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching: require("next-pwa/cache"),
    buildExcludes: [/middleware-manifest.json$/],
  },
});

module.exports = nextConfig;
