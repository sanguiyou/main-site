const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry:{
       index: './src/index.js',
    } ,
    output: {
        // filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            // {
            //     test: /\.html$/,
            //     use: [ {
            //         loader: 'html-loader',
            //     }],
            // },
            {
                test: /\.css$/,
                // use: [
                //     {
                //         loader: "style-loader"
                //     }, {
                //         loader: "css-loader"
                //     }
                // ]
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader"
                })
            }
       ],

    },
    devServer: {
        contentBase: "./dist",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,
        hot: true
    },
    plugins:[
        // new HtmlWebpackPlugin({
        //     "template":'src/index.html.ejs',
        //     'filename':'./dist/index.html',
        // }),
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        new CopyPlugin([
            { from: 'src/css', to: 'css/' },
            { from: 'src/img', to: 'img/' },
            { from: 'src/js', to: 'js/' },
        ]),
        new HtmlWebpackPlugin({
            "template":'src/index.html',
            'filename':'index.html',
            inject: 'head'
        }),
        new ExtractTextPlugin("/css/common.css"),
        new HtmlWebpackPlugin({
            "template":'src/contact.html',
            'filename':'contact.html',
        }),
        new HtmlWebpackPlugin({
            "template":'src/download.html',
            'filename':'download.html',
        }),
        new HtmlWebpackPlugin({
            "template":'src/price.html',
            'filename':'price.html',
        }),
        new HtmlWebpackPlugin({
            "template":'src/price_detail_360.html',
            'filename':'price_detail_360.html',
        }),
        new HtmlWebpackPlugin({
            "template":'src/price_detail_sogou.html',
            'filename':'price_detail_sogou.html',
        }),
        new HtmlWebpackPlugin({
            "template":'src/price_detail_baidu.html',
            'filename':'price_detail_baidu.html',
        }),
        new HtmlWebpackPlugin({
            "template":'src/question.html',
            'filename':'question.html',
        }),
        new HtmlWebpackPlugin({
            "template":'src/detail/baidu_zhuanye.html',
            'filename':'detail/baidu_zhuanye.html',
        }),
        new HtmlWebpackPlugin({
            "template":'src/detail/baidu_qijian.html',
            'filename':'detail/baidu_qijian.html',
        }),
        new HtmlWebpackPlugin({
            "template":'src/detail/360_yun.html',
            'filename':'detail/360_yun.html',
        }),
        new HtmlWebpackPlugin({
            "template":'src/detail/360_zhuanye.html',
            'filename':'detail/360_zhuanye.html',
        }),
        new HtmlWebpackPlugin({
            "template":'src/detail/sogou_yun.html',
            'filename':'detail/sogou_yun.html',
        }),
        new HtmlWebpackPlugin({
            "template":'src/detail/sogou_zhuanye.html',
            'filename':'detail/sogou_zhuanye.html',
        }),
        new HtmlWebpackPlugin({
            "template":'src/detail/wxyx.html',
            'filename':'detail/wxyx.html',
        }),
        new HtmlWebpackPlugin({
            "template":'src/detail/pwzs.html',
            'filename':'detail/pwzs.html',
        }),
        new HtmlWebpackPlugin({
            "template":'src/detail/feyzs.html',
            'filename':'detail/feyzs.html',
        }),
        new HtmlWebpackPlugin({
            "template":'src/detail/bdkpzs.html',
            'filename':'detail/bdkpzs.html',
        }),
        new HtmlWebpackPlugin({
            "template":'src/detail/wxhm.html',
            'filename':'detail/wxhm.html',
        })
    ]
};