/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  exportPathMap: function () { // /Next-React-Components
    return {
      "/": { page: "/" },
      "/ap-grid-layout": { page: "/ap-grid-layout" },
      "/ap-highlight": { page: "/ap-highlight" },
    }
  },
  assetPrefix: !debug ? 'https://ran-sy.github.io/Ranim/' : '',
  
};

module.exports = nextConfig;
