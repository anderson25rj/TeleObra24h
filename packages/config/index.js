/**
 * TeleObra24h Shared Configuration Package
 *
 * This package exports all shared configurations for the monorepo.
 * Import specific configurations using the named exports below.
 *
 * @example
 * ```js
 * // Import TypeScript configs
 * import { tsConfigBase, tsConfigNextJS } from '@teleobra24h/config';
 *
 * // Import Tailwind config
 * import { tailwindConfig } from '@teleobra24h/config';
 *
 * // Import ESLint config
 * import { eslintConfig } from '@teleobra24h/config';
 *
 * // Import Prettier config
 * import { prettierConfig } from '@teleobra24h/config';
 * ```
 */

// TypeScript configurations
export { default as tsConfigBase } from './tsconfig.base.json' assert { type: 'json' };
export { default as tsConfigNextJS } from './tsconfig.nextjs.json' assert { type: 'json' };

// Tailwind CSS configuration
export { default as tailwindConfig } from './tailwind.base.js';

// ESLint configuration
export { default as eslintConfig } from './eslint.config.js';

// Prettier configuration
export { default as prettierConfig } from './prettier.config.js';

// Re-export everything for convenience
export default {
  tsConfigBase: await import('./tsconfig.base.json', { assert: { type: 'json' } }).then(
    (m) => m.default
  ),
  tsConfigNextJS: await import('./tsconfig.nextjs.json', { assert: { type: 'json' } }).then(
    (m) => m.default
  ),
  tailwindConfig: await import('./tailwind.base.js').then((m) => m.default),
  eslintConfig: await import('./eslint.config.js').then((m) => m.default),
  prettierConfig: await import('./prettier.config.js').then((m) => m.default),
};
