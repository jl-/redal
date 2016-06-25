import path from 'path';
import { PATHS } from '../webpack.conf';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const GHP_SRC_PATH = path.resolve(__dirname);
const conf = {
  entry: {
    ghpages: [
      path.resolve(GHP_SRC_PATH, 'index.js')
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(PATHS.DIST, '..'),
    filename: 'index.js',
    publicPath: './',
    sourceMapFilename: 'index.map.json',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: [PATHS.SRC, PATHS.DEMO, PATHS.DIST, GHP_SRC_PATH]
    }, {
      test: /\.(css|scss)$/,
      loader: `style!css?importLoaders=1!sass`
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      hash: false,
      template: path.resolve(GHP_SRC_PATH, 'index.html'),
      title: 'Demo',
      filename: 'index.html'
    })
  ]
}

export default conf;
