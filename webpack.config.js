module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './dist/build.js'
    },
    //对应各种不同文件类型的资源, Webpack 有对应的模块 loader
    module: {
      loaders: [
        {test: /\.vue$/, loader: 'vue'}
      ]
    },
    
    resolve: {
        extensions: ['']
    }

}
