/** @type {import('next').NextConfig} */
// import withPWA from "next-pwa";

const runtimeCaching = require("next-pwa/cache");

const config = {
  experimental: {
    appDir: true,
  },
};

const nextConfig = require("@ducanh2912/next-pwa").default()({
  // dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching,
  sw: "/sw.js",
  buildExcludes: [/middleware-manifest.json$/],
})(config);

module.exports = nextConfig;
