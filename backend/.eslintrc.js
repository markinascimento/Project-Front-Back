module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'spaced-comment': 'off',
    'consistent-return': 'off',
    'prefer-const': 'off',
    'object-curly-newline': 'off',
  },
};
