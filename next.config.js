/** @type {import('next').NextConfig} */
// import withPWA from "next-pwa";

const runtimeCaching = require("next-pwa/cache");

const config = {
  experimental: {
    appDir: true,
  },
};

const nextConfig = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",

  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
})(config);

module.exports = nextConfig;
