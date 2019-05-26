var path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '',
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
				// I haven't used SCSS in the base example, but it's here for you if you
				// want! If you want to use CSS, you can change this next like's regex to
				// /\.(css|scss)$/ or even just /\.css$/
				test: /\.scss$/,
				use: [
					// These three libraries are commonly used together to turn Sass into
					// CSS, then be able to load the CSS directly with imports. From there
					// It gets put in the DOM for you.
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' },
				],
			},
			{
				// Some image formats so you can import images
				test: /\.(png|gif|jpg|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 50000,
					},
				},
			},
    ]
  },
  resolve: {
		extensions: ['.scss', '.js', '.json', '.png', '.gif', '.jpg', '.svg'],
	},
  externals: {
    'react': 'commonjs react' 
  }
};