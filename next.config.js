/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "i.ibb.co",
      "media.istockphoto.com",
      "demoapus2.com",
      "github.com",
      "images.unsplash.com",
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig
