module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    semi: 0,
    'react-native/no-inline-styles': 0,
    'prettier/prettier': ['off', {singleQuote: true}],
    'react-hooks/exhaustive-deps': 'warn', //Sementara
  },
};
