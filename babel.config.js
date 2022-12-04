module.exports = api => {
  const babelEnv = api.env();
  const plugins = [
      // ['react-native-reanimated/plugin'],
      ['babel-plugin-styled-components'],
      [
          'module-resolver',
          {
              root: ['./src'],
              extensions: ['.ts', '.tsx', '.jsx', '.js', '.ios.ts', '.android.ts', '.ios.tsx', '.android.tsx', '.json'],
              // alias: {
              //     components: './src/components',
              // },
          }
      ],
  ];

  if (babelEnv !== 'development') {
      plugins.push(['transform-remove-console']);
  }

  return {
      presets: ['module:metro-react-native-babel-preset'],
      plugins,
  };
}