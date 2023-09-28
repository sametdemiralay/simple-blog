/** @type {import('next').NextConfig} */

const config = require('./config');

const nextConfig = {
  env: {
    DB_URI: config.DB_URI,
  },
};

module.exports = nextConfig;
