module.exports = {
  extends: [
    'airbnb-base',
  ],
  env: {
    node: true,
    es6: true,
  },
  parser: '@babel/eslint-parser',
  rules: {
    'no-alert': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'import/prefer-default-export': 'off',
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
      },
    },
  },
};
