/** @type {import('next').NextConfig} */
// import withPWA from "next-pwa";

const runtimeCaching = require("next-pwa/cache");
const isDev = process.env.NODE_ENV !== "production";

const config = {
  experimental: {
    appDir: true,
  },
};

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
})(config);

module.exports = nextConfig;
