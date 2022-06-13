/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const custom = require('./config/custom.webpack.config.dev');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const {peerDependencies, name, infinisoft} = require('./package.json')

module.exports = merge(custom, common, {
  mode: 'development',
  output: {
    filename: '[name].[contenthash].js',
    path: path.join(process.cwd(), 'dev'),
    publicPath: 'auto',
  },
  devServer: {
    static: path.join(process.cwd(), 'dev'),
    hot: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name,
      filename: 'remoteEntry.js',
      remotes: infinisoft.moduleFederation.dev.remotes,
      exposes: {
        [`./${infinisoft.moduleFederation.component}`]: './src/component',
      },
      shared: {
        ...peerDependencies,
        react: { singleton: true, eager: true, requiredVersion: peerDependencies.react },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: peerDependencies['react-dom'],
        },
      },
    }),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './config/index.html',
    }),
  ],
  devtool: 'eval-source-map',
});
