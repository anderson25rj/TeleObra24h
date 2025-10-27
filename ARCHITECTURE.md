# TeleObra24h - Architecture Documentation

This document provides a comprehensive overview of the TeleObra24h architecture, including project structure, data flow, component hierarchy, and technical decisions.

## Table of Contents

- [System Overview](#system-overview)
- [Monorepo Structure](#monorepo-structure)
- [Technology Stack](#technology-stack)
- [Application Architecture](#application-architecture)
- [Component Hierarchy](#component-hierarchy)
- [Data Flow](#data-flow)
- [Package Dependencies](#package-dependencies)
- [Routing Structure](#routing-structure)
- [State Management](#state-management)
- [Styling Architecture](#styling-architecture)
- [Build Pipeline](#build-pipeline)
- [Deployment Architecture](#deployment-architecture)
- [Security Architecture](#security-architecture)
- [Performance Optimization](#performance-optimization)

## System Overview

TeleObra24h is built as a **Turborepo monorepo** containing three distinct Next.js applications with shared packages for common functionality. This architecture enables:

- Code reusability across versions
- Independent deployment of each version
- Consistent development experience
- Efficient build caching
- Scalable structure for future growth

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        TeleObra24h                          │
│                    Turborepo Monorepo                       │
└─────────────────────────────────────────────────────────────┘
                              │
                ┌─────────────┴─────────────┐
                │                           │
        ┌───────▼────────┐         ┌───────▼────────┐
        │  Applications  │         │    Packages    │
        │   (apps/*)     │         │  (packages/*)  │
        └───────┬────────┘         └───────┬────────┘
                │                           │
    ┌───────────┼───────────┐              │
    │           │           │              │
┌───▼───┐  ┌───▼───┐  ┌───▼───┐    ┌─────▼─────┐
│  V1   │  │  V2   │  │  V3   │    │ Shared UI │
│ :3001 │  │ :3002 │  │ :3003 │    │   Mocks   │
└───────┘  └───────┘  └───────┘    │  Config   │
                                    └───────────┘
```

## Monorepo Structure

### Directory Layout

```
TeleObra24h/
├── apps/                           # Application packages
│   ├── v1/                         # V1: Confianca Profissional
│   │   ├── app/                    # Next.js App Router
│   │   │   ├── layout.tsx          # Root layout
│   │   │   ├── page.tsx            # Homepage
│   │   │   ├── busca/              # Search page
│   │   │   ├── perfil/             # Profile pages
│   │   │   │   └── [id]/           # Dynamic profile route
│   │   │   ├── planos/             # Plans page
│   │   │   ├── sobre/              # About page
│   │   │   └── globals.css         # Global styles
│   │   ├── components/             # V1-specific components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ProfessionalCard.tsx
│   │   │   └── index.ts
│   │   ├── lib/                    # Utilities
│   │   │   └── utils.ts
│   │   ├── public/                 # Static assets
│   │   │   └── images/
│   │   ├── tailwind.config.ts      # Tailwind configuration
│   │   ├── next.config.mjs         # Next.js configuration
│   │   ├── tsconfig.json           # TypeScript configuration
│   │   └── package.json            # Dependencies
│   │
│   ├── v2/                         # V2: Vibrante e Moderno
│   │   └── [same structure as v1]
│   │
│   └── v3/                         # V3: Minimalista Premium
│       └── [same structure as v1]
│
├── packages/                       # Shared packages
│   ├── ui/                         # Shared UI components
│   │   ├── components/             # Component implementations
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── select.tsx
│   │   │   └── [other components]
│   │   ├── lib/                    # Utilities
│   │   │   └── utils.ts
│   │   ├── index.ts                # Main exports
│   │   └── package.json
│   │
│   ├── mocks/                      # Mock data
│   │   ├── professionals.json      # Professional profiles
│   │   ├── reviews.json            # Reviews data
│   │   ├── services.json           # Service categories
│   │   ├── testimonials.json       # Testimonials
│   │   ├── stats.json              # Statistics
│   │   ├── faq.json                # FAQ data
│   │   ├── types.ts                # Type definitions
│   │   ├── index.js                # Data exports
│   │   └── package.json
│   │
│   └── config/                     # Shared configurations
│       ├── eslint/                 # ESLint configs
│       └── package.json
│
├── docs/                           # Documentation
├── .github/                        # GitHub workflows
│   └── workflows/
│       └── ci.yml
├── turbo.json                      # Turborepo configuration
├── package.json                    # Root package.json
├── tsconfig.json                   # Base TypeScript config
└── [documentation files]
```

### Package Organization

#### Apps (`apps/*`)

Each app is a complete Next.js 14 application:
- **Independent**: Can be developed and deployed separately
- **Themed**: Unique visual identity and styling
- **Shared Logic**: Uses common packages for data and components
- **Port Assignment**: V1 (3001), V2 (3002), V3 (3003)

#### Packages (`packages/*`)

Shared code accessible to all apps:
- **@teleobra24h/ui**: Reusable UI components
- **@teleobra24h/mocks**: Centralized mock data
- **@teleobra24h/config**: Shared configurations

## Technology Stack

### Core Framework

```
Next.js 14.2.15
├── React 18.3.1
├── App Router (RSC enabled)
├── TypeScript 5.6.3
└── Node.js >= 20.0.0
```

### Build System

```
Turborepo 2.3.0
├── Task Orchestration
├── Incremental Builds
├── Remote Caching (future)
└── Parallel Execution
```

### Styling

```
Tailwind CSS 3.4.14
├── PostCSS 8.4.47
├── Autoprefixer 10.4.20
├── Custom Themes (per app)
└── tailwind-merge
```

### UI Components

```
Shadcn/ui
├── Radix UI Primitives
│   ├── @radix-ui/react-dialog
│   ├── @radix-ui/react-select
│   ├── @radix-ui/react-tabs
│   ├── @radix-ui/react-avatar
│   └── [other primitives]
├── Class Variance Authority
└── Lucide React (icons)
```

### Animation

```
Framer Motion 11.11.17
├── Page Transitions
├── Component Animations
├── Gesture Support
└── Layout Animations
```

### Development Tools

```
ESLint 8.57.0
├── eslint-config-next
├── TypeScript ESLint
└── Custom Rules
```

## Application Architecture

### Next.js App Router Structure

Each application follows Next.js 14 App Router conventions:

```
app/
├── layout.tsx              # Root layout (persistent across pages)
├── page.tsx               # Homepage route "/"
├── busca/
│   └── page.tsx           # Search route "/busca"
├── perfil/
│   └── [id]/
│       └── page.tsx       # Dynamic profile route "/perfil/:id"
├── planos/
│   └── page.tsx           # Plans route "/planos"
├── sobre/
│   └── page.tsx           # About route "/sobre"
└── globals.css            # Global styles
```

### Page Architecture

```typescript
// Typical page structure
export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Page-specific content */}
      </main>
      <Footer />
    </>
  )
}
```

### Layout Architecture

```typescript
// Root layout (app/layout.tsx)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {/* OWASP Security Headers */}
        {children}
      </body>
    </html>
  )
}
```

## Component Hierarchy

### Component Categories

#### 1. Layout Components

```
Layout Components
├── Header
│   ├── Logo
│   ├── Navigation
│   └── MobileMenu
└── Footer
    ├── FooterLinks
    ├── SocialLinks
    └── Copyright
```

#### 2. Page-Specific Components

```
Homepage Components
├── HeroSection
├── FeaturesSection
├── ProfessionalsSection
│   └── ProfessionalCard
├── TestimonialsSection
│   └── TestimonialCard
└── CTASection
```

```
Search Page Components
├── SearchBar
│   ├── LocationInput
│   ├── CategorySelect
│   └── SearchButton
├── FilterPanel
│   ├── RatingFilter
│   ├── PriceFilter
│   └── AvailabilityFilter
└── ResultsGrid
    └── ProfessionalCard
```

```
Profile Page Components
├── ProfileHeader
│   ├── ProfileAvatar
│   ├── ProfileInfo
│   └── ContactButton
├── ServicesSection
│   └── ServiceCard
├── PortfolioSection
│   └── PortfolioImage
└── ReviewsSection
    └── ReviewCard
```

#### 3. Shared UI Components (`packages/ui`)

```
Shared Components (@teleobra24h/ui)
├── Button
├── Card
├── Dialog
├── Select
├── Tabs
├── Avatar
├── Separator
├── ScrollArea
├── Accordion
└── Carousel
```

### Component Composition Pattern

```typescript
// Example: Professional Card composition
<ProfessionalCard>
  <ProfessionalCard.Image />
  <ProfessionalCard.Header>
    <ProfessionalCard.Title />
    <ProfessionalCard.Rating />
  </ProfessionalCard.Header>
  <ProfessionalCard.Services />
  <ProfessionalCard.Footer>
    <Button>Contact</Button>
  </ProfessionalCard.Footer>
</ProfessionalCard>
```

## Data Flow

### Current Architecture (Mock Data)

```
┌─────────────────────────────────────────────────┐
│            @teleobra24h/mocks                   │
│  (professionals.json, reviews.json, etc.)       │
└─────────────────┬───────────────────────────────┘
                  │ import
                  ▼
┌─────────────────────────────────────────────────┐
│         Page/Component (Server)                 │
│  - Import mock data directly                    │
│  - Transform if needed                          │
└─────────────────┬───────────────────────────────┘
                  │ props
                  ▼
┌─────────────────────────────────────────────────┐
│         Client Component (Browser)              │
│  - Render UI                                    │
│  - Handle interactions                          │
└─────────────────────────────────────────────────┘
```

### Future Architecture (Backend Integration)

```
┌─────────────────────────────────────────────────┐
│              Supabase Backend                   │
│  (PostgreSQL + Real-time + Auth + Storage)      │
└─────────────────┬───────────────────────────────┘
                  │ API calls
                  ▼
┌─────────────────────────────────────────────────┐
│         API Routes (/app/api/*)                 │
│  - Data fetching                                │
│  - Authentication                               │
│  - Business logic                               │
└─────────────────┬───────────────────────────────┘
                  │ Server Actions / API
                  ▼
┌─────────────────────────────────────────────────┐
│         Server Components                       │
│  - Fetch data server-side                       │
│  - SEO optimization                             │
└─────────────────┬───────────────────────────────┘
                  │ props
                  ▼
┌─────────────────────────────────────────────────┐
│         Client Components                       │
│  - Interactive UI                               │
│  - State management                             │
└─────────────────────────────────────────────────┘
```

### Data Flow Patterns

#### Pattern 1: Server-Side Data Fetching (Current with Mocks)

```typescript
// app/page.tsx (Server Component)
import { professionals } from "@teleobra24h/mocks"

export default function HomePage() {
  // Data is available immediately (mock)
  const featured = professionals.slice(0, 6)

  return (
    <ProfessionalsSection professionals={featured} />
  )
}
```

#### Pattern 2: Dynamic Routes with Data

```typescript
// app/perfil/[id]/page.tsx
import { professionals } from "@teleobra24h/mocks"

export default function ProfilePage({ params }: { params: { id: string } }) {
  const professional = professionals.find(p => p.id === params.id)

  if (!professional) {
    notFound()
  }

  return <ProfileView professional={professional} />
}

// Generate static params for SSG
export function generateStaticParams() {
  return professionals.map(p => ({ id: p.id }))
}
```

#### Pattern 3: Client-Side Interaction (Future)

```typescript
// components/ContactButton.tsx
"use client"

import { useState } from "react"

export function ContactButton({ professionalId }: Props) {
  const [loading, setLoading] = useState(false)

  const handleContact = async () => {
    setLoading(true)
    // Future: API call to create conversation
    await fetch(`/api/conversations`, {
      method: "POST",
      body: JSON.stringify({ professionalId })
    })
    setLoading(false)
  }

  return (
    <Button onClick={handleContact} disabled={loading}>
      {loading ? "Connecting..." : "Contact via WhatsApp"}
    </Button>
  )
}
```

## Package Dependencies

### Dependency Graph

```
┌─────────────────────────────────────────────────┐
│                Root (workspace)                 │
│  - turbo, typescript, @types/*                  │
└────┬──────────────────────────┬─────────────────┘
     │                          │
     ▼                          ▼
┌─────────────────┐    ┌─────────────────────────┐
│   apps/v1       │    │    packages/ui          │
│   apps/v2       │◄───│  - Radix UI primitives  │
│   apps/v3       │    │  - Lucide icons         │
│                 │    │  - CVA, clsx, tw-merge  │
│  Dependencies:  │    └─────────────────────────┘
│  - next         │              ▲
│  - react        │              │
│  - tailwindcss  │    ┌─────────┴───────────────┐
│  - framer-motion│    │    packages/mocks       │
│  - clsx         │◄───│  - JSON data files      │
│  - tw-merge     │    │  - Type definitions     │
│  - lucide-react │    └─────────────────────────┘
└─────────────────┘              ▲
                                 │
                       ┌─────────┴───────────────┐
                       │    packages/config      │
                       │  - ESLint configs       │
                       │  - Shared utilities     │
                       └─────────────────────────┘
```

### Package Relationships

#### Internal Dependencies

```json
// apps/v1/package.json
{
  "dependencies": {
    "@teleobra24h/ui": "workspace:*",
    "@teleobra24h/mocks": "workspace:*"
  }
}
```

#### Dependency Management

- **Workspace Protocol**: `workspace:*` links to local packages
- **Version Pinning**: External deps pinned for stability
- **Peer Dependencies**: React/React-DOM as peers in packages
- **Dev Dependencies**: Build tools at root level

## Routing Structure

### Route Mapping

| Route | Description | Component | Rendering |
|-------|-------------|-----------|-----------|
| `/` | Homepage | `app/page.tsx` | SSG |
| `/busca` | Search professionals | `app/busca/page.tsx` | SSR |
| `/perfil/[id]` | Professional profile | `app/perfil/[id]/page.tsx` | SSG |
| `/planos` | Subscription plans | `app/planos/page.tsx` | SSG |
| `/sobre` | About page | `app/sobre/page.tsx` | SSG |

### Rendering Strategies

#### Static Site Generation (SSG)

```typescript
// Used for: /, /planos, /sobre, /perfil/[id]
export default function Page() {
  // Generated at build time
  return <PageContent />
}

// For dynamic routes
export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }]
}
```

#### Server-Side Rendering (SSR)

```typescript
// Used for: /busca (with dynamic filters)
export const dynamic = "force-dynamic"

export default async function SearchPage({
  searchParams
}: {
  searchParams: { q: string }
}) {
  // Rendered on each request
  return <SearchResults query={searchParams.q} />
}
```

## State Management

### Current Approach

**No global state management library** - Using React built-ins:

- **useState**: Component-local state
- **useContext**: Sharing state between components (future)
- **URL State**: Search params for filters

### State Patterns

#### 1. Component State

```typescript
const [filters, setFilters] = useState({
  location: "",
  category: "",
  rating: 0
})
```

#### 2. URL State

```typescript
const searchParams = useSearchParams()
const category = searchParams.get("category")
```

#### 3. Server State (Future)

```typescript
// Using React Query or SWR
const { data: professionals } = useQuery({
  queryKey: ["professionals"],
  queryFn: fetchProfessionals
})
```

## Styling Architecture

### Tailwind Configuration

Each app has custom Tailwind config:

```typescript
// apps/v1/tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",    // Blue
        secondary: "#10B981",  // Green
        accent: "#F59E0B"      // Orange
      }
    }
  }
}
```

### Styling Patterns

#### 1. Utility Classes

```tsx
<div className="flex items-center gap-4 p-6 rounded-lg bg-white shadow-md">
```

#### 2. Component Variants (CVA)

```typescript
const buttonVariants = cva(
  "rounded-md font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-gray-200 text-gray-900",
        primary: "bg-blue-600 text-white",
        secondary: "bg-green-600 text-white"
      }
    }
  }
)
```

#### 3. Conditional Classes (cn)

```typescript
<button className={cn(
  "base-classes",
  isActive && "active-classes",
  className
)}>
```

### CSS Architecture

```
Styling Layers
├── Tailwind Base (@tailwind base)
├── Tailwind Components (@tailwind components)
├── Tailwind Utilities (@tailwind utilities)
├── Global Styles (globals.css)
└── Component-Specific Styles (inline classes)
```

## Build Pipeline

### Turborepo Pipeline

```json
// turbo.json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "dependsOn": ["^lint"]
    }
  }
}
```

### Build Flow

```
npm run build
    │
    ├─> Turborepo orchestrates
    │
    ├─> Build shared packages first
    │   ├─> @teleobra24h/ui (type check)
    │   ├─> @teleobra24h/mocks (validate)
    │   └─> @teleobra24h/config (lint check)
    │
    └─> Build apps in parallel
        ├─> apps/v1 (Next.js build)
        ├─> apps/v2 (Next.js build)
        └─> apps/v3 (Next.js build)
```

### Build Optimization

- **Incremental Builds**: Only rebuild changed packages
- **Parallel Execution**: Build apps simultaneously
- **Cache**: Turbo caches build outputs
- **Tree Shaking**: Unused code eliminated
- **Code Splitting**: Automatic by Next.js

## Deployment Architecture

### Deployment Options

#### Option 1: Vercel (Recommended)

```
Vercel Deployment
├── v1.teleobra24h.com → apps/v1
├── v2.teleobra24h.com → apps/v2
└── v3.teleobra24h.com → apps/v3
```

#### Option 2: Docker Containers

```dockerfile
# Multi-stage build for each app
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build:v1

FROM node:20-alpine AS runner
COPY --from=builder /app/apps/v1/.next ./.next
EXPOSE 3000
CMD ["npm", "start"]
```

#### Option 3: Static Export

```typescript
// next.config.mjs
export default {
  output: "export"
}
```

### CI/CD Pipeline (Future)

```yaml
# .github/workflows/ci.yml
name: CI/CD
on: [push]
jobs:
  build:
    - Checkout code
    - Install dependencies
    - Run linting
    - Run type check
    - Build all apps
    - Run tests
    - Deploy to Vercel
```

## Security Architecture

### OWASP Security Headers

```typescript
// next.config.mjs
const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on"
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload"
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN"
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff"
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block"
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin"
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()"
  }
]
```

### Security Best Practices

- **CSP**: Content Security Policy headers
- **HTTPS Only**: Enforce secure connections
- **Input Validation**: Server-side validation (future)
- **XSS Protection**: React's built-in escaping
- **CSRF Protection**: Token-based (future)

## Performance Optimization

### Current Optimizations

#### 1. Next.js Image Optimization

```tsx
import Image from "next/image"

<Image
  src="/professional.jpg"
  alt="Professional"
  width={400}
  height={300}
  loading="lazy"
/>
```

#### 2. Code Splitting

```tsx
// Automatic route-based splitting
// Dynamic imports for heavy components
const HeavyComponent = dynamic(() => import("./HeavyComponent"))
```

#### 3. Static Generation

```typescript
// Pre-render at build time
export default function Page() {
  return <StaticContent />
}
```

#### 4. Caching Strategy

```
Browser Cache
├── Static Assets: 1 year
├── Images: 1 year (with hash)
└── Pages: Revalidate on demand
```

### Performance Metrics Goals

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### Monitoring (Future)

```
Performance Monitoring
├── Vercel Analytics
├── Google Lighthouse
├── Core Web Vitals
└── Custom metrics
```

## Future Architecture Considerations

### Backend Integration

```
Future Backend Architecture
├── Supabase
│   ├── PostgreSQL Database
│   ├── Authentication (JWT)
│   ├── Real-time Subscriptions
│   ├── Storage (Images)
│   └── Edge Functions
├── API Routes (Next.js)
└── Server Actions (RSC)
```

### Microservices (Future)

```
Microservices Architecture
├── User Service
├── Professional Service
├── Review Service
├── Payment Service
└── Notification Service
```

### Scalability Plan

- **Horizontal Scaling**: Multiple instances
- **CDN**: Global content delivery
- **Database Sharding**: By region/category
- **Caching Layer**: Redis/Memcached
- **Load Balancing**: Auto-scaling groups

---

**Last Updated**: October 2025
**Version**: 0.1.0
**Status**: Prototype Phase
