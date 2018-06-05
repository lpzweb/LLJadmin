'use strict'

// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../admin/index.html'),
    assetsRoot: path.resolve(__dirname, '../admin'),
    assetsSubDirectory: 'assets',
    assetsPublicPath: './',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: true,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: process.env.DEV_PORT || 8089,
    autoOpenBrowser: true,
    assetsSubDirectory: 'assets',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
//      target: 'http://localhost:8080',
//      target: 'https://staging.lljgame.com',
        target: 'http://120.79.199.85:8080',
//      target: 'http://192.168.0.106:8080',
        changeOrigin: true
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
