/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.fuio7-1.fna.fbcdn.net",
      }
    ]
  }
}

module.exports = nextConfig
