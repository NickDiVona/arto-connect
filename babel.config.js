module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.svg', '.png'],
          alias: {
            components: './src/components/',
            screens: './src/screens/',
            constants: './src/constants/',
            redux: './src/redux'
          }
        }
      ],
      'react-native-reanimated/plugin'
    ]
  };
};
