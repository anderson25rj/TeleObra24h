/**
 * Shared Prettier Configuration
 *
 * This configuration ensures consistent code formatting across all applications
 * in the TeleObra24h monorepo.
 *
 * Usage in app's prettier.config.js:
 * ```js
 * import baseConfig from '@teleobra24h/config/prettier';
 *
 * export default {
 *   ...baseConfig,
 *   // Add app-specific overrides here
 * };
 * ```
 */

/** @type {import('prettier').Config} */
export default {
  // Core formatting rules
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  requirePragma: false,
  insertPragma: false,
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  endOfLine: 'lf',

  // Plugin-specific options
  plugins: ['prettier-plugin-tailwindcss'],

  // File-specific overrides
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 80,
        tabWidth: 2,
      },
    },
    {
      files: '*.md',
      options: {
        printWidth: 80,
        proseWrap: 'always',
      },
    },
    {
      files: '*.yml',
      options: {
        tabWidth: 2,
        singleQuote: false,
      },
    },
    {
      files: ['*.css', '*.scss'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
