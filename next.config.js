const withMarkdoc = require('@markdoc/next.js')
const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md'],
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: isProd ? '/tailwindui-syntax/' : undefined,
}

module.exports = withMarkdoc()(nextConfig)
