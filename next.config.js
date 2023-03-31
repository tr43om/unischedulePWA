/** @type {import('next').NextConfig} */
// import withPWA from "next-pwa";

const isDev = process.env.NODE_ENV !== "production";

const config = {
  experimental: {
    appDir: true,
  },
};

const nextConfig = require("next-pwa")({
  // dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching,
  sw: "/sw.js",
  buildExcludes: [/middleware-manifest.json$/],
})(config);

module.exports = nextConfig;
