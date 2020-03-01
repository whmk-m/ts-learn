// 提取生产环境配置
const path = require('path')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.base')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const prodConfing = {
    mode: 'production',
    devtool: "cheap-source-map",
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../')  // 将dist相对应的根目录调整至外层
        }),
    ]
}
module.exports = merge(commonConfig, prodConfing)
