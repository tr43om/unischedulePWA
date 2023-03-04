/** @type {import('next').NextConfig} */
// import withPWA from "next-pwa";

// const withPWA = require("next-pwa")({
//   dest: "public",
//   register: true,
//   skipWaiting: true,
//   // disable: process.env.NODE_ENV === "development",
//   scope: "/app",
// });

const config = {
  experimental: {
    appDir: true,
  },
};

const nextConfig = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
})(config);

module.exports = nextConfig;
