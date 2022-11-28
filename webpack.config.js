const ASSET_PATH = process.env.ASSET_PATH || '';

/**
 * @typedef {import('webpack').Configuration & {devServer?: import('webpack').WebpackOptionsNormalized['devServer']}} WebpackConfig
 * @returns {WebpackConfig}
 */
module.exports = () => ({
  plugins: [
    new (require('webpack').DefinePlugin)({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
    }),
  ],
  stats: 'minimal',
  infrastructureLogging: {
    level: 'warn',
  }
});
