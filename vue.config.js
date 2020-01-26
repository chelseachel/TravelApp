const webpack = require('webpack')
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    // 基本路径
    publicPath: './',
    // 转达ajax数据请求
    
     /* webpack-dev-server 相关配置 */
    devServer: {
        port: 8080,
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                pathRewrite: {
                    '^/api': '/mock'
                }
            }
        }
    },
    // webpack配置
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                jQuery: 'jquery',
                $: 'jquery'
            })
        ]
    },
    /* 生产环境是否生成 sourceMap 文件，false将提高构建速度 */
    productionSourceMap: false,
    /* 代码保存时是否进行eslint检测 */
    lintOnSave: false,
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: config => {
        config.entry.app = ["babel-polyfill", resolve('src/main.js')],
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('styles', resolve('src/assets/styles'))
            .set('common', resolve('src/common'))
    }
}
