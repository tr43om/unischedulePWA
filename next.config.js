const withPWAInit = require("next-pwa");

const isDev = process.env.NODE_ENV !== "production";

const withPWA = withPWAInit({
  dest: "public",
  disable: isDev,
  // fallbacks: { document: "app/fallback.tsx" },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = withPWA(nextConfig);
