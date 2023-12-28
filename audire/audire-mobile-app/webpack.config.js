const createExpoWebpackConfigAsync = require('@expo/webpack-config');


module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Customize the config before returning it.

  // https://stackoverflow.com/a/72225795
  config.resolve.alias['../Utilities/Platform'] =
    'react-native-web/dist/exports/Platform';

  return config;
};
