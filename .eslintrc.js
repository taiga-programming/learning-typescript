module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
    // 'prettier/@typescript-eslint',
    // 'plugin:prettier/recommended',
  ],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    // 'explicit-module-boundary-types': 'off',

  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  settings: {
    "react": {
      "version": "17.0.1"
    }
  },
  plugins: ['react', '@typescript-eslint']
};
