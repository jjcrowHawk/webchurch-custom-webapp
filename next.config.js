/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.fuio7-1.fna.fbcdn.net",
      },
      {
        protocol: 'https',
        hostname: 'scontent.fgye1-1.fna.fbcdn.net',
      },
    ]
  },
  publicRuntimeConfig: {
    staticFolder: '/public',
  },
}

module.exports = nextConfig
