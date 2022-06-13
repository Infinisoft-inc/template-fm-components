/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const custom = require('./config/custom.webpack.config.prod');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(custom, common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.join(process.cwd(), 'dist'),
    publicPath: 'auto',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
});
