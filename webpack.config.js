//__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
var webpack = require('webpack')
var HtmlwebpackPlugin = require('html-webpack-plugin');
module.exports = {//注意这里是exports不是export
  devtool: 'eval-source-map',//生成Source Maps,这里选择eval-source-map
  entry: __dirname + "/app/main.js",//唯一入口文件，就像Java中的main方法
  output: {//输出目录
    path: __dirname + "/build",//打包后的js文件存放的地方
    filename: "bundle.js"//打包后的js文件名
  },
  //添加我们的插件会自动生成一个html文件
  plugins: [
    new HtmlwebpackPlugin({
      template: __dirname + "/build/index.html"//html模版地址
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function () {
          return [precss, autoprefixer];
        },
        devServer: {
          contentBase: "./public", //本地服务器所加载的页面所在的目录
          colors: true, //终端中输出结果为彩色
          historyApiFallback: true, //不跳转
          inline: true //实时刷新
        }
      }
    })
  ],
  module: {
    //loaders加载器
    loaders: [
      {
        test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
        exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
        loader: 'babel-loader'//loader的名称（必须）
      }
    ]
  }
};