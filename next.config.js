/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  resolve: {
    extensions: [".js", ".jsx"],
  },
  assetPrefix: isProd ? "ran-sy.github.io/Ranim" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
