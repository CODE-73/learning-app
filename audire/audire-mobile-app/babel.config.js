module.exports = function (api) {
  api.cache(true);
  console.info('\n\n\tBABBEL CONFIG\n\n');
  return {
    presets: ['babel-preset-expo'],
    // react-native-reanimated/plugin has to be listed last
    // https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/#step-2-add-reanimateds-babel-plugin
    plugins: ['expo-router/babel', '@babel/plugin-proposal-export-namespace-from', 'react-native-reanimated/plugin',],
  };
};
