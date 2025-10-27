# @teleobra24h/config

Shared configuration package for the TeleObra24h monorepo. This package provides consistent configurations for TypeScript, Tailwind CSS, ESLint, and Prettier across all applications.

## Included Configurations

### TypeScript

- **tsconfig.base.json**: Base TypeScript configuration with strict mode and modern settings
- **tsconfig.nextjs.json**: Next.js-specific TypeScript configuration

### Tailwind CSS

- **tailwind.base.js**: Base Tailwind configuration with:
  - Custom color palette
  - Font configurations (Inter, Poppins, Playfair Display, Raleway)
  - Container utilities
  - Animation keyframes
  - Responsive breakpoints
  - Common design tokens

### ESLint

- **eslint.config.js**: Comprehensive ESLint configuration with:
  - TypeScript support
  - Next.js rules
  - React and React Hooks rules
  - Accessibility (a11y) rules
  - Prettier integration

### Prettier

- **prettier.config.js**: Code formatting configuration with:
  - Consistent formatting rules
  - Tailwind CSS plugin support
  - File-specific overrides

## Usage

### TypeScript

In your app's `tsconfig.json`:

```json
{
  "extends": "@teleobra24h/config/typescript/nextjs",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### Tailwind CSS

In your app's `tailwind.config.js`:

```js
import baseConfig from '@teleobra24h/config/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  ...baseConfig,
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Add app-specific customizations here
};
```

### ESLint

In your app's `eslint.config.js`:

```js
import baseConfig from '@teleobra24h/config/eslint';

export default [
  ...baseConfig,
  // Add app-specific rules here
];
```

### Prettier

In your app's `prettier.config.js`:

```js
import baseConfig from '@teleobra24h/config/prettier';

export default {
  ...baseConfig,
  // Add app-specific overrides here
};
```

## Features

### Extensible Configurations

All configurations are designed to be extended and customized by individual applications while maintaining consistency across the monorepo.

### Modern ES Modules

Uses ES module syntax for better compatibility with modern tooling and bundlers.

### Turborepo Compatible

Configurations are optimized for use with Turborepo and monorepo architectures.

### Strict Type Checking

TypeScript configurations enable strict mode for better type safety and code quality.

### Accessibility First

ESLint rules include comprehensive accessibility checks to ensure inclusive web applications.

### Consistent Formatting

Prettier configuration ensures consistent code formatting across all projects.

## Development

### Install Dependencies

```bash
npm install
```

### Lint Configuration Files

```bash
npm run lint
```

### Format Configuration Files

```bash
npm run format
```

## Contributing

When modifying shared configurations:

1. Consider the impact on all applications
2. Test changes across multiple apps
3. Update this README with any new features or breaking changes
4. Maintain backward compatibility when possible

## License

MIT
