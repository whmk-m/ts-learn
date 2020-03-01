// 提取开发环境配置
const Webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.base')

const devConfig = {
    mode: 'development',
    devtool: "cheap-module-eval-source-map",
    // webpack-dev-serve 能够用于快速开发应用程序
    devServer: {
        contentBase: './dist', // 提供内容的目录
        open: true, // 打开浏览器
        port: 8090, // 本地服务端口
        hot: true, // 启动热模块替换
        hotOnly: true, // 启动热模块替换后，即使其构建失败也不要刷新浏览器
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin()
    ]
}
module.exports = merge(commonConfig, devConfig)
