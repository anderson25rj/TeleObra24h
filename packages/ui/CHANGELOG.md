# Changelog

All notable changes to the @teleobra24h/ui package will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2025-10-27

### Added

- Initial release of shared UI component library
- Core components based on Shadcn/ui patterns:
  - **Button** - Multiple variants (default, destructive, outline, ghost, link)
  - **Card** - Container with header, content, and footer sections
  - **Badge** - Status indicators with multiple variants (success, warning, info, etc.)
  - **Avatar** - Profile images with fallback support
  - **Input** - Form input fields
  - **Select** - Dropdown select menus
  - **Separator** - Visual dividers
  - **Sheet** - Slide-out panels for mobile menus
  - **Dialog** - Modal overlays
  - **Tabs** - Tabbed interface components
  - **Accordion** - Expandable content sections (perfect for FAQ)
  - **Carousel** - Image/content carousel for testimonials and portfolios
  - **Command** - Command palette with search (for V3 search)
  - **ScrollArea** - Custom scrollable containers
- Utility functions:
  - `cn()` - Class name merging with Tailwind conflict resolution
- Type definitions:
  - Common component prop types
  - Professional certification types
  - Status and variant enums
- Full TypeScript support with proper type exports
- Accessibility features (ARIA labels, keyboard navigation)
- JSDoc comments for all components
- Comprehensive README with usage examples

### Dependencies

- @radix-ui/* primitives for accessible component behavior
- class-variance-authority for variant management
- clsx and tailwind-merge for className handling
- embla-carousel-react for carousel functionality
- cmdk for command palette
- lucide-react for icons

### Configuration

- TypeScript configuration for strict type checking
- ESLint configuration for code quality
- Components.json for Shadcn/ui compatibility
- Proper exports in package.json for monorepo usage

## [Unreleased]

### Planned

- Form components (Label, Textarea, Checkbox, Radio, Switch)
- Feedback components (Toast, Alert, Progress)
- Data display components (Table, DataTable)
- Navigation components (Breadcrumb, Pagination, NavigationMenu)
- Overlay components (Popover, Tooltip, DropdownMenu)
- Layout components (Container, Grid, Stack)
- Custom TeleObra24h-specific components:
  - ProfessionalCard
  - ServiceBadge
  - RatingDisplay
  - LocationPicker
