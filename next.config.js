/** @type {import('next').NextConfig} */
// import withPWA from "next-pwa";

const runtimeCaching = require("next-pwa/cache");
<<<<<<< HEAD
const isDev = process.env.NODE_ENV !== "production";
=======
>>>>>>> master

const config = {
  experimental: {
    appDir: true,
  },
};

<<<<<<< HEAD
const nextConfig = require("@ducanh2912/next-pwa").default({
  dest: "public",
  disable: isDev,

  exclude: [
    // add buildExcludes here
    ({ asset, compilation }) => {
      if (
        asset.name.startsWith("server/") ||
        asset.name.match(
          /^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/
        )
      ) {
        return true;
      }
      if (isDev && !asset.name.startsWith("static/runtime/")) {
        return true;
      }
      return false;
    },
  ],
=======
const nextConfig = require("next-pwa")({
  // dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching,
  sw: "/sw.js",
  buildExcludes: [/middleware-manifest.json$/],
>>>>>>> master
})(config);

module.exports = nextConfig;
