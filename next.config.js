/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  resolve: {
    extensions: [".js", ".jsx"],
  },
  compilerOptions: {
    baseUrl: ".",
  }
};

module.exports = nextConfig;
