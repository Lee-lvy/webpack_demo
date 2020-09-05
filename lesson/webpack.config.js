var path = require('path') // 引入node的核心模块
module.exports = {
    mode: 'development', // mode是development 代码不被压缩
    entry: {
        main: './src/index.js',
    },
    module: {
        rules: [{
            // test: /\.jpeg$/,
            // use: {
            //     loader: 'file-loader',
            //     options: {
            //         // 配置语法 placehoder 占位符
            //         name: '[name].[ext]', // 老的文件名和后缀 
            //         outputPath: 'images/'
            //     }
            // }
        }, {
            test: /\.(jpg|png|gif|jpeg)$/,
            use: {
                loader: 'url-loader' // 图片转换为base64 的字符串 直接放到bundle.js中 
            }
        }, {

        }]
    },
    output: {
        filename: 'bundle.js', // 打包出来文件名
        path: path.resolve(__dirname, 'dist'),// 打包出来的文件放在哪个文件夹下 绝对路径 _dirname webpack.config.js所在位置
    }
}