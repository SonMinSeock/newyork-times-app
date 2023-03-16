/** @type {import('next').NextConfig} */
const API_URL = "https://books-api.nomadcoders.workers.dev";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/newyorktimes",
        destination: `${API_URL}/lists`,
      },
      {
        source: "/api/newyorktimes/list/:id",
        destination: `${API_URL}/list?name=:id`,
      },
    ];
  },
};

module.exports = nextConfig;
