# Contributing to TeleObra24h

Thank you for considering contributing to TeleObra24h! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Style Guide](#code-style-guide)
- [Component Guidelines](#component-guidelines)
- [Git Workflow](#git-workflow)
- [Commit Convention](#commit-convention)
- [Pull Request Process](#pull-request-process)
- [Testing Requirements](#testing-requirements)
- [Documentation Requirements](#documentation-requirements)

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all. Please be respectful and constructive in your interactions.

### Expected Behavior

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

### Unacceptable Behavior

- Trolling, insulting/derogatory comments, and personal attacks
- Public or private harassment
- Publishing others' private information without permission
- Other conduct which could reasonably be considered inappropriate

## Getting Started

### Prerequisites

- Node.js >= 20.0.0
- npm >= 10.0.0
- Git
- Basic knowledge of TypeScript, React, and Next.js
- Familiarity with Turborepo (optional but helpful)

### Fork and Clone

```bash
# Fork the repository on GitHub
# Then clone your fork
git clone https://github.com/YOUR_USERNAME/TeleObra24h.git
cd TeleObra24h

# Add upstream remote
git remote add upstream https://github.com/ORIGINAL_OWNER/TeleObra24h.git

# Install dependencies
npm install
```

### Development Setup

```bash
# Run all apps
npm run dev

# Or run specific app
npm run dev:v1  # Port 3001
npm run dev:v2  # Port 3002
npm run dev:v3  # Port 3003
```

## Development Workflow

### 1. Choose an Issue

- Check existing issues or create a new one
- Comment on the issue to let others know you're working on it
- Get approval for large changes before starting work

### 2. Create a Branch

```bash
# Update your local main
git checkout main
git pull upstream main

# Create a feature branch
git checkout -b feature/issue-number-short-description
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `refactor/` - Code refactoring
- `test/` - Adding or updating tests
- `chore/` - Maintenance tasks

### 3. Make Your Changes

- Follow the code style guide
- Write clean, maintainable code
- Add tests for new features
- Update documentation as needed

### 4. Test Your Changes

```bash
# Run linting
npm run lint

# Run type checking
npx turbo run type-check

# Test in browser
npm run dev
```

### 5. Commit Your Changes

Follow our [Commit Convention](#commit-convention)

```bash
git add .
git commit -m "feat: add new search filter"
```

### 6. Push and Create PR

```bash
git push origin feature/your-branch-name
```

Then create a Pull Request on GitHub.

## Code Style Guide

### TypeScript

#### Use TypeScript Features

```typescript
// Good: Explicit types
interface SearchFilters {
  location: string
  category: string
  rating: number
}

function filterProfessionals(filters: SearchFilters): Professional[] {
  // Implementation
}

// Bad: Using 'any'
function filterProfessionals(filters: any): any {
  // Implementation
}
```

#### Prefer Type over Interface for Simple Types

```typescript
// Good: Use type for unions and simple types
type Status = "pending" | "active" | "completed"

// Good: Use interface for objects that might be extended
interface Professional {
  id: string
  name: string
  rating: number
}
```

### React Components

#### Use Functional Components

```typescript
// Good: Functional component with TypeScript
interface ButtonProps {
  variant?: "default" | "primary" | "secondary"
  children: React.ReactNode
  onClick?: () => void
}

export function Button({ variant = "default", children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={cn(buttonVariants({ variant }))}>
      {children}
    </button>
  )
}

// Bad: Class component
class Button extends React.Component<ButtonProps> {
  render() {
    return <button>{this.props.children}</button>
  }
}
```

#### Use Named Exports

```typescript
// Good: Named exports
export function ProfessionalCard() { }
export function SearchBar() { }

// Bad: Default exports (except for pages)
export default function ProfessionalCard() { }
```

### Styling with Tailwind

#### Use Utility Classes

```tsx
// Good: Tailwind utilities
<div className="flex items-center justify-between p-4 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold text-gray-900">Title</h2>
</div>

// Bad: Inline styles
<div style={{ display: "flex", padding: "16px" }}>
  <h2 style={{ fontSize: "24px" }}>Title</h2>
</div>
```

#### Use cn() for Conditional Classes

```typescript
import { cn } from "@/lib/utils"

<button
  className={cn(
    "px-4 py-2 rounded-md",
    isActive && "bg-blue-500 text-white",
    isDisabled && "opacity-50 cursor-not-allowed"
  )}
>
  Click me
</button>
```

### File Organization

```
component-folder/
├── ComponentName.tsx        # Component implementation
├── ComponentName.test.tsx   # Tests (future)
├── index.ts                 # Exports
└── types.ts                 # Type definitions (if complex)
```

### Naming Conventions

- **Components**: PascalCase - `ProfessionalCard`, `SearchBar`
- **Functions**: camelCase - `filterProfessionals`, `formatDate`
- **Constants**: UPPER_SNAKE_CASE - `MAX_RATING`, `DEFAULT_PAGE_SIZE`
- **Files**: kebab-case or PascalCase - `professional-card.tsx` or `ProfessionalCard.tsx`
- **Types/Interfaces**: PascalCase - `Professional`, `SearchFilters`

## Component Guidelines

### Component Structure

```typescript
// 1. Imports
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// 2. Type definitions
interface ComponentProps {
  className?: string
  title: string
  onAction?: () => void
}

// 3. Component
export function Component({ className, title, onAction }: ComponentProps) {
  // 4. Hooks
  const [state, setState] = useState(false)

  // 5. Functions
  const handleClick = () => {
    setState(true)
    onAction?.()
  }

  // 6. Render
  return (
    <div className={cn("base-classes", className)}>
      <h2>{title}</h2>
      <Button onClick={handleClick}>Action</Button>
    </div>
  )
}
```

### Props Guidelines

```typescript
// Always define prop types
interface CardProps {
  // Required props first
  title: string
  description: string

  // Optional props
  image?: string
  className?: string

  // Callbacks
  onClick?: () => void
  onHover?: (id: string) => void
}

// Use default values in destructuring
export function Card({
  title,
  description,
  image = "/default.jpg",
  className,
  onClick
}: CardProps) {
  // Component logic
}
```

### Accessibility

```tsx
// Always include ARIA labels and roles
<button
  aria-label="Close dialog"
  onClick={onClose}
>
  <X className="h-4 w-4" />
</button>

// Use semantic HTML
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
</nav>

// Ensure keyboard navigation
<div
  role="button"
  tabIndex={0}
  onKeyDown={(e) => e.key === "Enter" && handleClick()}
  onClick={handleClick}
>
  Click or press Enter
</div>
```

### Performance Optimization

```typescript
// Use React.memo for expensive components
export const ProfessionalCard = React.memo(({ professional }: Props) => {
  // Component logic
})

// Use useMemo for expensive calculations
const filteredProfessionals = useMemo(() => {
  return professionals.filter(p => p.rating >= minRating)
}, [professionals, minRating])

// Use useCallback for callbacks passed to children
const handleSelect = useCallback((id: string) => {
  onSelect(id)
}, [onSelect])
```

## Git Workflow

### Branch Strategy

- `main` - Production-ready code
- `develop` - Development branch (future)
- `feature/*` - New features
- `fix/*` - Bug fixes
- `hotfix/*` - Urgent production fixes

### Keeping Your Branch Updated

```bash
# Update main
git checkout main
git pull upstream main

# Update your feature branch
git checkout feature/your-branch
git rebase main

# If conflicts, resolve them and continue
git add .
git rebase --continue
```

## Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/).

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semi-colons, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `perf`: Performance improvements

### Examples

```bash
# Simple commit
git commit -m "feat: add professional search filter"

# With scope
git commit -m "fix(v1): resolve navigation bug on mobile"

# With body and breaking change
git commit -m "feat(api): add authentication system

Implement JWT-based authentication with refresh tokens.
Add login, logout, and token refresh endpoints.

BREAKING CHANGE: Authentication is now required for all API calls"
```

### Scope Examples

- `v1`, `v2`, `v3` - Specific version
- `ui` - Shared UI components
- `mocks` - Mock data
- `config` - Configuration files
- `docs` - Documentation

## Pull Request Process

### Before Creating PR

1. Ensure your code follows the style guide
2. Run linting: `npm run lint`
3. Test your changes thoroughly
4. Update documentation if needed
5. Rebase on latest main
6. Write clear commit messages

### PR Title

Follow the same convention as commits:

```
feat: add advanced search filters
fix(v2): resolve mobile navigation issue
docs: update contributing guidelines
```

### PR Description Template

```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Changes Made
- Change 1
- Change 2
- Change 3

## Testing Done
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on Safari
- [ ] Tested on mobile devices
- [ ] All lint checks pass

## Screenshots (if applicable)
Add screenshots here

## Related Issues
Closes #123
Relates to #456

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added/updated (when applicable)
```

### Review Process

1. Create PR with clear description
2. Assign reviewers (if applicable)
3. Address review comments
4. Update PR with requested changes
5. Wait for approval
6. Merge when approved

### Merging

- Squash and merge for feature branches
- Rebase and merge for simple fixes
- Never force push to main

## Testing Requirements

### Current Status

Testing infrastructure is planned for future implementation.

### Future Testing Strategy

#### Unit Tests

```typescript
// Example: Component test
import { render, screen } from "@testing-library/react"
import { ProfessionalCard } from "./ProfessionalCard"

describe("ProfessionalCard", () => {
  it("renders professional name", () => {
    render(<ProfessionalCard name="John Doe" />)
    expect(screen.getByText("John Doe")).toBeInTheDocument()
  })
})
```

#### Integration Tests

```typescript
// Example: Search functionality test
describe("Professional Search", () => {
  it("filters professionals by category", async () => {
    // Test implementation
  })
})
```

### Manual Testing Checklist

For now, manually test:
- [ ] Desktop browsers (Chrome, Firefox, Safari)
- [ ] Mobile devices (iOS, Android)
- [ ] All breakpoints (mobile, tablet, desktop)
- [ ] Dark mode (if applicable)
- [ ] Keyboard navigation
- [ ] Screen reader compatibility

## Documentation Requirements

### Code Documentation

```typescript
/**
 * Filters professionals based on search criteria
 * @param professionals - Array of professionals to filter
 * @param filters - Filter criteria
 * @returns Filtered array of professionals
 */
export function filterProfessionals(
  professionals: Professional[],
  filters: SearchFilters
): Professional[] {
  // Implementation
}
```

### Component Documentation

Add JSDoc comments for complex components:

```typescript
/**
 * Professional profile card component
 *
 * Displays professional information including:
 * - Name and title
 * - Rating and reviews
 * - Services offered
 * - Contact button
 *
 * @example
 * ```tsx
 * <ProfessionalCard
 *   professional={professionalData}
 *   onContact={handleContact}
 * />
 * ```
 */
export function ProfessionalCard({ professional, onContact }: Props) {
  // Implementation
}
```

### README Updates

When adding new features:
1. Update main README.md
2. Update relevant app README (v1/README.md, etc.)
3. Update ARCHITECTURE.md if structure changes
4. Update FAQ.md with common questions

### Examples and Guides

Provide examples for complex features:

```typescript
// In docs/examples/
// how-to-create-filter.md
// how-to-add-animation.md
// how-to-style-component.md
```

## Version-Specific Contributions

### V1: Confianca Profissional

- Focus on professional, clean design
- Use blue/green color palette
- Subtle animations
- Trust-building elements

### V2: Vibrante e Moderno

- Bold, dynamic design
- Purple/orange gradients
- Energetic animations
- Modern UI patterns

### V3: Minimalista Premium

- Minimalist, luxury design
- Black/gold color palette
- Refined, elegant animations
- Premium feel throughout

### Shared Components

When creating shared components for `/packages/ui`:
- Must work with all three versions
- Should be theme-agnostic
- Well-documented
- Fully accessible

## Questions and Support

### Where to Ask Questions

- GitHub Issues: Bug reports and feature requests
- GitHub Discussions: General questions and ideas
- Pull Requests: Code review questions

### Response Time

We try to respond to:
- Bug reports: Within 48 hours
- Feature requests: Within 1 week
- Pull requests: Within 1 week

### Getting Help

1. Check existing documentation
2. Search closed issues
3. Create a new issue with details
4. Join discussions

## Recognition

Contributors will be recognized:
- In CHANGELOG.md
- In project README
- In release notes

Thank you for contributing to TeleObra24h!

---

**Last Updated**: October 2025
**Version**: 0.1.0
