const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact({
  stylePreprocessorOptions: {
    "includePaths": ["libs/ad-universe/styles/settings/global.scss"]
  },
  extractCss:true  
}), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  return config;
});
