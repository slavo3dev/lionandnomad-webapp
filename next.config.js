/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  nextConfig,
  webpack: config => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    config.plugins.push(new Dotenv({silent: true}));
    return config;
  },
}
