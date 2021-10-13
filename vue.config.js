const path = require('path')
const fs = require('fs')
const loash = require('loadsh')
const { getEntry } = require('./webpack/utils')
const { getNPMParams } = require('./webpack/config')
console.log('page', getNPMParams())
const entry = getEntry('src/pages/*/main.js', getNPMParams().page, '.')

const pageName = getNPMParams().page.split('/')[1]
let projectConfig = {}
if (fs.existsSync('./src/pages/' + pageName + '/vue.config.js')) {
  projectConfig = require('./src/pages/' + pageName + '/vue.config.js')
}
console.log('projectConfig', projectConfig)

module.exports = loash.merge({
  publicPath: './',
  lintOnSave: process.env.NODE_ENV !== 'production',
  pages: entry,
  devServer: {
    disableHostCheck: true
  },
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        '@': path.resolve(__dirname, 'src'),
        utils: path.resolve(__dirname, 'src/utils'), // 公用的函数
        pages: path.resolve(__dirname, 'src/pages'), // 多页面目录
        assets: path.resolve(__dirname, 'src/assets'), // 图片资料
        components: path.resolve(__dirname, 'src/components'), // 公用组件
        invoice: path.resolve(__dirname, 'src/pages/invoice'),
        classChoice: path.resolve(__dirname, 'src/pages/classChoice'),
        studyReport: path.resolve(__dirname, 'src/pages/studyReport')
      }
    }
  },
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 75, // 换算的基数(设计图750的根字体为75)
            selectorBlackList: ['.van'], // 要忽略的选择器并保留为px。
            // 要忽略的选择器并保留为px。 selectorBlackList: ['.van'], // 要忽略的选择器并保留为px。
            propList: ['*'], // 可以从px更改为rem的属性。
            minPixelValue: 2 // 设置要替换的最小像素值。
          })
        ]
      }
    }
  }
}, {})
