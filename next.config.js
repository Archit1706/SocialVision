/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  typescript: {
        ignoreBuildErrors: true,
    },
  images: {
    domains: ["dummyimage.com", "mf.b37mrtl.ru", "cdnn1.img.sputniknews.com"],
  },
};

module.exports = nextConfig;
