/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env, argv) =>
  merge(common, {
    mode: 'production',
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: path.join(process.cwd(), '/analyze/deps.graph.html'),
      }),
      new BundleStatsWebpackPlugin({
        outDir: '../analyze',
        baseline: env.ANALYZEBASELINE || false,
      }),
    ],
  });
