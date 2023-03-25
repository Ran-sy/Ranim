/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  assetPrefix: !debug ? 'https://ran-sy.github.io/Ranim' : '',
  basePath: !debug ? '/Ranim' : '',
  
};

module.exports = nextConfig;
