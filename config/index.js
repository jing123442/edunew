// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css','less'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8888 ,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
    '/369manage':{
      target:'http://192.168.5.21:8080',
      changeOrigin:true,
      // pathRewrite:{
      //   '^/api':''
      // }
    },
    '/369student':{
      target:'http://192.168.5.21:8080',
      changeOrigin:true
    },
    '/369research':{
      target:'http://192.168.5.21:8080',
      changeOrigin:true
    },
    '/369education':{
      target:'http://192.168.5.21:8080',
      changeOrigin:true
    }

  },
    cssSourceMap: false
  }
}
