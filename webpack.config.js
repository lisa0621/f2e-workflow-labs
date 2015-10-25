module.exports = { 
	entry: {
   	  bundle: './main.js',
      bundle2: './main2.js'
  	},
	output: { 
		filename: '[name].js' 
	} ,
  module: {
    loaders:[
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.png$/, loader: 'url-loader?name=tmp/[hash].[ext]&limit=8000' }
    ]
  }
};