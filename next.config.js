const { withGlobalCss } = require("next-global-css");

/** @type {import('next').NextConfig} */
const nextConfig = withGlobalCss()({
  reactStrictMode: true,
});

module.exports = nextConfig;
