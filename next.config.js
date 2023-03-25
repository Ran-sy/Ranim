/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  resolve: {
    extensions: [".js", ".jsx"],
  },
  compilerOptions: {
    baseUrl: ".",
    paths: {
      "@components/*": ["components/*"],
      "@pages/*": ["pages/*"],
    },
  },
};

module.exports = nextConfig;
