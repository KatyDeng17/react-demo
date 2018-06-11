const path = require('path')
module.exports ={
  entry:'./src/index.js',
  output:{
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist')
  },
  module:{
    rules:[
        {
          test: /\.js$/,
          exclude: /node_modules/,
          //spacify which loader
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "env",
                "stage-2",
                'react'
              ]
            }
          }
        }

    ]
  }
}