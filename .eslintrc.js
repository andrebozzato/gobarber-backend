module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
    // eslint-disable-next-line prettier/prettier
    'camelcase': 'off',
  },
};
