const MergeJsonWebpackPlugin = require('merge-jsons-webpack-plugin');
const { join } = require('path');
const { readdirSync } = require('fs');

const LANGUAGE_FOLDER = './src/assets/i18n'; // Relative to this file
const OUTPUT_FOLDER = './assets/i18n'; // Relative to the outputPath of angular build config

const getDirectories = source => readdirSync(source, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

// Get list of language folder name
const languages = getDirectories(join(__dirname, LANGUAGE_FOLDER));

module.exports = {
  module: {
    rules: [
      {
        test: /\.(json)$/i
      }
    ]
  },
  plugins: [
    new MergeJsonWebpackPlugin({
      debug: true,
      output: {
        groupBy: languages.map(l => ({
          pattern: join(LANGUAGE_FOLDER, l, '*.json'),
          fileName: join(OUTPUT_FOLDER, l + '.json')
        }))
      },
      globOptions: {
        nosort: true
      }
    })
  ]
};
