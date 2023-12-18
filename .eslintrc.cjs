module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'postcss.config.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'react-refresh'],
  rules: {
    'prettier/prettier': ['error', {
      plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-organize-imports'],
      endOfLine: 'auto',
      semi: false,
      singleQuote: true,
      jsxSingleQuote: true
    }, {
      usePrettierrc: false
    }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'sort-keys': 'error'
  },
}
