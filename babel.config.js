module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@config': './src/config',
            '@constants': './src/constants',
            '@context': './src/context',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@storage': './src/storage',
            '@theme': './src/theme',
            '@utils': './src/utils',
            '@services': './src/services',
            '@hooks': './src/hooks',
            '@types': './src/types',
          },
        },
      ],
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blocklist: null,
          allowlist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  };
};
