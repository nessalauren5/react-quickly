module.exports = {
    entry: './jsx/app.jsx',
    output:{
        path: __dirname + '/js',
        filename:'bundle.js'
    },
    devtool:'#sourcemap',
    module:{
        loaders: [
            { test: /\.css$/,loader:'style-loader!css-loader'}, //specifies the loader to import and injects css into page from js
            { test: /\.jsx?$/,
              exclude: /(node_modules)/,
                loaders:['babel-loader']
            }//specifies the loader to do jsx transformation
        ]
    }
}