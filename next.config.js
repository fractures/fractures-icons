const { withGlobalCss } = require("next-global-css");
const withReactSvg = require('next-react-svg')
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = withReactSvg(withGlobalCss()({
  reactStrictMode: true,
  include: path.resolve(__dirname, 'src/icons'),
  webpack(config, _options) {
    return config
  }
}));

module.exports = nextConfig;
