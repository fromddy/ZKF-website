/** @type {import('next').NextConfig} */

const trueEnv = ['true', '1', 'yes'];


const NEXTJS_IGNORE_ESLINT = trueEnv.includes(
  process.env?.NEXTJS_IGNORE_ESLINT ?? 'false'
);



const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: NEXTJS_IGNORE_ESLINT,
    dirs: ['src'],
  },

}

module.exports = nextConfig
