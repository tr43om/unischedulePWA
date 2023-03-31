/** @type {import('next').NextConfig} */
// import withPWA from "next-pwa";

const isDev = process.env.NODE_ENV !== "production";

const config = {
  experimental: {
    appDir: true,
  },
};

const nextConfig = require("@ducanh2912/next-pwa").default({
  dest: "public",
  disable: isDev,
})(config);

module.exports = nextConfig;
