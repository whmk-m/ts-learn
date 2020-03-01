// 提取公共的配置
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        main:'./src/index.ts',
    },
    output: {
        filename: "app.js",
        path: path.resolve(__dirname,'../dist') // 输出dist到外层目录
    },
    resolve: { // resolver 是一个库(library)，用于帮助找到模块的绝对路径,resolver 帮助 webpack 从每个如 require/import 语句中，找到需要引入到 bundle 中的模块代码。 当打包模块时，webpack 使用 enhanced-resolve 来解析文件路径。
        extensions: ['.js', '.ts', '.tsx']  //将使用 [resolve.extensions] 选项作为文件扩展名来解析，此选项告诉 resolver 在解析中能够接受哪些扩展名（例如 .js, .jsx）。
    },
    module: {
        // 除了node_modules文件下的其他js文件都用babel-loader打包转换
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use:[{
                    loader: "ts-loader", // 将代码转译为 JavaScript
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/tpl/index.html',
            title:"Typescript App"
        }),
    ]
}
