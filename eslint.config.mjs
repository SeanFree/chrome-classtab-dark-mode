import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'
import skipFormatting from 'eslint-config-prettier/flat'

export default defineConfig([
  {
    files: ['./build.js'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ['./src/**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.browser,
        chrome: 'readonly',
      },
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
  skipFormatting,
])
