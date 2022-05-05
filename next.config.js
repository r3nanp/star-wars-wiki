/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = withPWA({
  reactStrictMode: true,
  pwa: {
    disable: !isProd,
    dest: 'public',
  },
  images: {
    domains: ['localhost'],
  },
})

module.exports = nextConfig
