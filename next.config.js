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
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
})(config);

module.exports = nextConfig;
