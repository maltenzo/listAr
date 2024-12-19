/* eslint-env node */

module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-native/all',
      'plugin:@typescript-eslint/recommended',
    ],      
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: [
      'react',
      'react-native',
      '@typescript-eslint',
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
        'react-native/no-inline-styles': 'warn',
    },
  };
