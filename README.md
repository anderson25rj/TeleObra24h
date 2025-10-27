# TeleObra24h

> A modern platform connecting customers with verified construction professionals in Brazil, available 24/7.

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen.svg)
![Next.js](https://img.shields.io/badge/Next.js-14.2-black.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)
![Turborepo](https://img.shields.io/badge/Turborepo-2.3-red.svg)

## Overview

TeleObra24h is a comprehensive platform designed to revolutionize how customers find and hire construction professionals in Brazil. The project features a unique **multi-version approach** with three distinct design themes, allowing stakeholders to choose the best visual identity for their target audience or run A/B tests to optimize conversion rates.

Built as a **Turborepo monorepo**, the project demonstrates modern development practices, code sharing, and scalable architecture while maintaining three completely independent frontends with different design philosophies.

## Key Features

- **24/7 Availability**: Connect with professionals anytime
- **Verified Professionals**: All professionals are verified and certified
- **Real-time Chat**: Direct communication via WhatsApp integration
- **Advanced Search**: Filter by service type, location, rating, and availability
- **Professional Profiles**: Detailed profiles with portfolios, reviews, and certifications
- **Multiple Service Categories**: Plumbers, electricians, painters, masons, and more
- **Emergency Services**: Quick response for urgent construction needs
- **Subscription Plans**: Flexible plans for both customers and professionals

## Tech Stack

### Core Technologies

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Turborepo](https://turbo.build/)** - High-performance monorepo build system
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animations

### UI Components

- **[Shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### Development Tools

- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing
- **Autoprefixer** - Automatic vendor prefixes

## Project Structure

```
TeleObra24h/
├── apps/
│   ├── v1/                      # Confianca Profissional (Professional Trust)
│   │   ├── app/                 # Next.js App Router
│   │   ├── components/          # V1-specific components
│   │   ├── public/              # Static assets
│   │   └── package.json         # V1 dependencies
│   │
│   ├── v2/                      # Vibrante e Moderno (Vibrant & Modern)
│   │   ├── app/                 # Next.js App Router
│   │   ├── components/          # V2-specific components
│   │   ├── public/              # Static assets
│   │   └── package.json         # V2 dependencies
│   │
│   └── v3/                      # Minimalista Premium (Minimalist Premium)
│       ├── app/                 # Next.js App Router
│       ├── components/          # V3-specific components
│       ├── public/              # Static assets
│       └── package.json         # V3 dependencies
│
├── packages/
│   ├── ui/                      # Shared UI components
│   │   ├── components/          # Reusable components
│   │   └── lib/                 # Utilities
│   │
│   ├── mocks/                   # Shared mock data
│   │   ├── professionals.json   # Professional profiles
│   │   ├── reviews.json         # Customer reviews
│   │   ├── services.json        # Service categories
│   │   ├── testimonials.json    # Testimonials
│   │   ├── stats.json           # Platform statistics
│   │   └── faq.json             # FAQ data
│   │
│   └── config/                  # Shared configurations
│       └── eslint/              # ESLint configs
│
├── docs/                        # Documentation
├── .github/                     # GitHub workflows
├── turbo.json                   # Turborepo configuration
├── package.json                 # Root package.json
└── README.md                    # This file
```

## Three Versions Comparison

| Aspect | V1: Confianca Profissional | V2: Vibrante e Moderno | V3: Minimalista Premium |
|--------|---------------------------|------------------------|-------------------------|
| **Port** | 3001 | 3002 | 3003 |
| **Primary Color** | Blue (#1E40AF) | Purple (#764ba2) | Black (#000000) |
| **Accent Color** | Orange (#F59E0B) | Orange (#F97316) | Gold (#D4AF37) |
| **Typography** | Inter + Poppins | Inter + Montserrat | Inter + Playfair Display |
| **Design Style** | Professional, Clean | Dynamic, Energetic | Minimalist, Luxury |
| **Animations** | Subtle | Aggressive | Refined |
| **Target Audience** | Corporate, B2B | Young professionals, Tech-savvy | High-end, VIP clients |
| **Best For** | General audience | Modern businesses | Luxury properties |
| **Visual Identity** | Trust and reliability | Innovation and energy | Elegance and exclusivity |
| **Layout Density** | Balanced | Full, Rich content | Spacious, Generous whitespace |

### Version Details

#### V1: Confianca Profissional (Professional Trust)
- **Philosophy**: Building trust through professional design
- **Target**: Corporate clients, property management, traditional residential customers
- **Strengths**: Universal appeal, professional credibility, clear communication
- **Use Cases**: Default version, B2B services, corporate presentations

#### V2: Vibrante e Moderno (Vibrant & Modern)
- **Philosophy**: Innovation and dynamism in construction services
- **Target**: Young homeowners, startups, tech companies, modern businesses
- **Strengths**: Eye-catching design, energetic feel, modern appeal
- **Use Cases**: Digital marketing, social media campaigns, tech-oriented clients

#### V3: Minimalista Premium (Minimalist Premium)
- **Philosophy**: Luxury and exclusivity in service delivery
- **Target**: High-end residential, luxury commercial, VIP clients
- **Strengths**: Premium positioning, sophisticated aesthetics, exclusive feel
- **Use Cases**: Luxury property presentations, VIP client interactions, premium services

## Quick Start

### Prerequisites

- Node.js >= 20.0.0
- npm >= 10.0.0
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd TeleObra24h

# Install all dependencies
npm install
```

### Development

```bash
# Run all apps simultaneously
npm run dev

# Run individual apps
npm run dev:v1    # V1 on http://localhost:3001
npm run dev:v2    # V2 on http://localhost:3002
npm run dev:v3    # V3 on http://localhost:3003
```

### Building for Production

```bash
# Build all apps
npm run build

# Build individual apps
npm run build:v1
npm run build:v2
npm run build:v3
```

### Other Commands

```bash
# Lint all apps
npm run lint

# Clean all build artifacts
npm run clean

# Type check
npx turbo run type-check
```

## Environment Configuration

Each app requires environment variables for full functionality:

```bash
# For each app (v1, v2, v3)
cd apps/v1  # or v2, v3
cp .env.example .env.local

# Edit .env.local with your values
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_WHATSAPP_NUMBER=your_whatsapp_number
```

## Pages and Routes

All three versions share the same routing structure:

- **/** - Homepage with hero section, features, and professional listings
- **/busca** - Advanced search page with filters
- **/perfil/[id]** - Professional profile page with portfolio and reviews
- **/planos** - Subscription plans for customers and professionals
- **/sobre** - About page with company information

## Shared Packages

### @teleobra24h/ui
Shared UI components built with Shadcn/ui and Radix UI:
- Button, Card, Dialog, Select, Tabs
- Avatar, Separator, ScrollArea
- Accordion, Carousel
- Form components

### @teleobra24h/mocks
Centralized mock data for all applications:
- Professional profiles with ratings and portfolios
- Customer reviews and testimonials
- Service categories and descriptions
- Platform statistics
- FAQ data

### @teleobra24h/config
Shared configuration files:
- ESLint configurations
- TypeScript configurations (future)
- Shared utilities (future)

## Development Guidelines

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Implement proper error boundaries
- Write accessible components (ARIA labels, keyboard navigation)
- Follow Tailwind CSS conventions
- Use semantic HTML

### Component Creation

```typescript
// Example component structure
import { cn } from "@/lib/utils"

interface ComponentProps {
  className?: string
  // other props
}

export function Component({ className, ...props }: ComponentProps) {
  return (
    <div className={cn("base-classes", className)}>
      {/* component content */}
    </div>
  )
}
```

### Adding New Features

1. Create feature in one version first
2. Test thoroughly
3. Extract shared logic to packages
4. Implement in other versions with theme adaptations
5. Update documentation

## Security Features

All versions implement OWASP security best practices:

- Content Security Policy (CSP)
- XSS Protection
- Frame Options
- HTTPS enforcement
- Referrer Policy
- Permissions Policy
- Security headers configuration

## Performance Optimization

- Server-side rendering (SSR)
- Static site generation (SSG) where applicable
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Optimized bundle sizes
- Efficient caching strategies

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy all apps
vercel --prod

# Deploy individual apps
cd apps/v1 && vercel --prod
cd apps/v2 && vercel --prod
cd apps/v3 && vercel --prod
```

### Docker

```bash
# Build Docker images
docker build -t teleobra24h-v1 -f apps/v1/Dockerfile .
docker build -t teleobra24h-v2 -f apps/v2/Dockerfile .
docker build -t teleobra24h-v3 -f apps/v3/Dockerfile .

# Run containers
docker run -p 3001:3000 teleobra24h-v1
docker run -p 3002:3000 teleobra24h-v2
docker run -p 3003:3000 teleobra24h-v3
```

### Manual Deployment

```bash
# Build production bundles
npm run build

# Start production servers
cd apps/v1 && npm start
cd apps/v2 && npm start
cd apps/v3 && npm start
```

## Testing Strategy

### Unit Tests (Future)
- Component testing with Jest and React Testing Library
- Utility function tests
- Hook tests

### Integration Tests (Future)
- API integration tests
- User flow tests
- Cross-component interaction tests

### E2E Tests (Future)
- Playwright for end-to-end testing
- Critical user journeys
- Cross-browser testing

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

### Quick Contribution Guide

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new search filter
fix: resolve navigation bug in mobile
docs: update README with deployment instructions
style: format code with prettier
refactor: restructure component hierarchy
test: add tests for professional profile
chore: update dependencies
```

## Documentation

- [Quick Start Guide](./QUICK_START.md)
- [Theme Comparison](./THEME_COMPARISON.md)
- [Architecture Details](./ARCHITECTURE.md)
- [Contributing Guidelines](./CONTRIBUTING.md)
- [FAQ](./FAQ.md)
- [Roadmap](./ROADMAP.md)
- [Changelog](./CHANGELOG.md)

## Roadmap

See [ROADMAP.md](./ROADMAP.md) for detailed development phases.

**Quick Overview:**
- Phase 1: Three prototypes (Current)
- Phase 2: Version selection and refinement
- Phase 3: Backend integration (Supabase)
- Phase 4: OTP authentication
- Phase 5: Full MVP features (6 months timeline)
- Phase 6: Blockchain integration
- Phase 7: Mobile applications

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Support

For questions and support:
- Create an issue on GitHub
- Check [FAQ.md](./FAQ.md) for common questions
- Review documentation in `/docs` folder

## Acknowledgments

- Next.js team for the amazing framework
- Vercel for Turborepo
- Shadcn for the component library
- Radix UI for accessible primitives
- The open-source community

## Team

**Project**: TeleObra24h
**Status**: Prototype Phase (v0.1.0)
**Started**: October 2025

---

**Built with modern tools and best practices for the Brazilian construction industry.**
