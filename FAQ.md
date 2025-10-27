# TeleObra24h - Frequently Asked Questions

This document answers common questions about the TeleObra24h project, from setup to development and deployment.

## Table of Contents

- [General Questions](#general-questions)
- [Architecture & Design](#architecture--design)
- [Development](#development)
- [Customization](#customization)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Performance](#performance)
- [Future Features](#future-features)

---

## General Questions

### What is TeleObra24h?

TeleObra24h is a platform that connects customers with verified construction professionals in Brazil. The project features three distinct design versions (V1, V2, V3) built with Next.js 14 and organized as a Turborepo monorepo.

### Why three different versions?

The three versions serve different strategic purposes:
- **V1 (Confianca Profissional)**: Professional, trust-focused design for general and corporate audiences
- **V2 (Vibrante e Moderno)**: Dynamic, modern design for young professionals and tech-savvy users
- **V3 (Minimalista Premium)**: Luxury, minimalist design for high-end clients and premium services

This allows for:
- A/B testing to determine which design resonates best
- Targeting different market segments with appropriate branding
- Flexibility to choose one as primary or use all three strategically

### Is this ready for production?

Currently (v0.1.0), this is a **prototype/demo phase**. The three frontends are fully functional but use mock data. For production readiness, you'll need:
- Backend integration (Supabase recommended)
- Authentication system (OTP/SMS)
- Payment processing
- Real professional data
- Full testing suite

See [ROADMAP.md](./ROADMAP.md) for the complete development plan.

### What's the license?

The project is licensed under the MIT License, which means you can freely use, modify, and distribute it.

---

## Architecture & Design

### Why Turborepo?

**Turborepo** was chosen for several reasons:
1. **Efficient Builds**: Incremental builds and intelligent caching
2. **Code Sharing**: Easy sharing of components and utilities across apps
3. **Independent Deployment**: Each app can be deployed separately
4. **Scalability**: Great for growing projects with multiple apps
5. **Performance**: Parallel task execution and build optimization

### Why Next.js 14?

**Next.js 14** provides:
- **App Router**: Modern routing with React Server Components
- **Performance**: Automatic optimization, code splitting, image optimization
- **SEO**: Server-side rendering and static generation
- **DX**: Great developer experience with TypeScript support
- **Production Ready**: Battle-tested framework used by major companies

### Can I use only one version?

**Yes!** You can choose to use only one version:

```bash
# Develop only V1
npm run dev:v1

# Build only V1
npm run build:v1

# Deploy only V1
cd apps/v1 && vercel deploy
```

You can safely delete the other app folders if you only need one version.

### Can I add a fourth version?

**Yes!** To add a new version:

1. Copy an existing app:
```bash
cp -r apps/v1 apps/v4
```

2. Update `apps/v4/package.json`:
```json
{
  "name": "v4",
  "scripts": {
    "dev": "next dev -p 3004",
    "start": "next start -p 3004"
  }
}
```

3. Add scripts to root `package.json`:
```json
{
  "scripts": {
    "dev:v4": "turbo run dev --filter=v4",
    "build:v4": "turbo run build --filter=v4"
  }
}
```

4. Customize theme in `apps/v4/tailwind.config.ts`

5. Update `apps/v4/app/layout.tsx` with new metadata

### How do the apps share code?

Apps share code through workspace packages in `packages/`:

- **@teleobra24h/ui**: Shared UI components
- **@teleobra24h/mocks**: Centralized mock data
- **@teleobra24h/config**: Shared configurations

Import them in any app:
```typescript
import { Button } from "@teleobra24h/ui"
import { professionals } from "@teleobra24h/mocks"
```

---

## Development

### How do I get started?

```bash
# 1. Clone the repository
git clone <repo-url>
cd TeleObra24h

# 2. Install dependencies
npm install

# 3. Run all apps
npm run dev

# 4. Open browsers
# V1: http://localhost:3001
# V2: http://localhost:3002
# V3: http://localhost:3003
```

See [QUICK_START.md](./QUICK_START.md) for detailed setup instructions.

### How do I add a new page?

To add a new page to an app (e.g., `/contato`):

1. Create page file:
```bash
mkdir apps/v1/app/contato
touch apps/v1/app/contato/page.tsx
```

2. Add page component:
```typescript
// apps/v1/app/contato/page.tsx
export default function ContatoPage() {
  return (
    <main>
      <h1>Contact Us</h1>
      {/* Page content */}
    </main>
  )
}
```

3. Add to navigation in Header component
4. Repeat for other versions (V2, V3) if needed

### How do I add a new component?

**Option 1: App-specific component**

```bash
# Create in app's components folder
touch apps/v1/components/NewComponent.tsx
```

```typescript
// apps/v1/components/NewComponent.tsx
interface NewComponentProps {
  title: string
}

export function NewComponent({ title }: NewComponentProps) {
  return <div>{title}</div>
}

// Export from index
// apps/v1/components/index.ts
export { NewComponent } from "./NewComponent"
```

**Option 2: Shared component** (if used by multiple apps)

```bash
# Create in shared UI package
touch packages/ui/components/new-component.tsx
```

```typescript
// packages/ui/components/new-component.tsx
export function NewComponent() {
  return <div>Shared component</div>
}

// Add to package exports
// packages/ui/index.ts
export { NewComponent } from "./components/new-component"
```

### How do I modify mock data?

Mock data is in `packages/mocks/`:

1. Edit JSON files:
```bash
# Edit professionals data
nano packages/mocks/professionals.json

# Edit reviews data
nano packages/mocks/reviews.json
```

2. Changes are immediately available to all apps:
```typescript
import { professionals } from "@teleobra24h/mocks"
```

### How do I add a Shadcn component?

Since we're in a monorepo, add Shadcn components to the shared UI package:

```bash
cd packages/ui

# Add a new component
npx shadcn-ui@latest add [component-name]
```

Then import in your app:
```typescript
import { ComponentName } from "@teleobra24h/ui"
```

---

## Customization

### How do I change the theme colors?

Each app has its own Tailwind config:

```typescript
// apps/v1/tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: "#YOUR_COLOR",
        secondary: "#YOUR_COLOR",
        accent: "#YOUR_COLOR"
      }
    }
  }
}
```

See [THEME_COMPARISON.md](./THEME_COMPARISON.md) for color palettes of each version.

### How do I change fonts?

1. Import fonts in layout:
```typescript
// apps/v1/app/layout.tsx
import { Inter, Poppins } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins"
})
```

2. Update Tailwind config:
```typescript
// apps/v1/tailwind.config.ts
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-poppins)"]
      }
    }
  }
}
```

### How do I customize animations?

Animations are handled by Framer Motion:

```typescript
import { motion } from "framer-motion"

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

Adjust animation values to match your version's theme (subtle for V1, aggressive for V2, refined for V3).

### How do I add custom Tailwind utilities?

```typescript
// apps/v1/tailwind.config.ts
export default {
  theme: {
    extend: {
      // Custom spacing
      spacing: {
        "18": "4.5rem"
      },
      // Custom breakpoints
      screens: {
        "3xl": "1920px"
      }
    }
  },
  plugins: [
    // Custom plugin
    function({ addUtilities }) {
      addUtilities({
        ".text-gradient": {
          "background-clip": "text",
          "-webkit-background-clip": "text",
          "color": "transparent"
        }
      })
    }
  ]
}
```

---

## Deployment

### How do I deploy to Vercel?

**Option 1: Deploy all apps**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from root
vercel
```

**Option 2: Deploy individual apps**

```bash
cd apps/v1
vercel --prod
```

**Option 3: Connect GitHub** (Recommended)
1. Push to GitHub
2. Import project in Vercel dashboard
3. Configure root directory for each app
4. Set up custom domains

### Can I deploy to other platforms?

**Yes!** The apps are standard Next.js applications and can be deployed to:

- **Vercel**: Recommended, zero-config
- **Netlify**: Supports Next.js
- **AWS**: Using Amplify or EC2
- **DigitalOcean**: App Platform or Droplet
- **Docker**: See [ARCHITECTURE.md](./ARCHITECTURE.md#deployment-architecture)

### How do I set environment variables?

**Development:**
```bash
# Copy example
cp apps/v1/.env.example apps/v1/.env.local

# Edit with your values
nano apps/v1/.env.local
```

**Production (Vercel):**
1. Go to project settings
2. Navigate to Environment Variables
3. Add variables for each app

```
NEXT_PUBLIC_API_URL=https://api.teleobra24h.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+5511999999999
```

### Do I need a backend?

**Current version (v0.1.0)**: No, uses mock data

**Future versions**: Yes, you'll need a backend for:
- User authentication
- Professional profiles (CRUD)
- Reviews and ratings
- Real-time chat
- Payment processing

**Recommended**: Supabase (see [ROADMAP.md](./ROADMAP.md))

---

## Troubleshooting

### Port already in use

```bash
# Error: Port 3001 is already in use

# Solution: Kill process on port
npx kill-port 3001

# Or change port in package.json
"dev": "next dev -p 3010"
```

### Module not found errors

```bash
# Error: Cannot find module '@teleobra24h/ui'

# Solution: Reinstall dependencies
rm -rf node_modules
rm -rf apps/*/node_modules
rm -rf packages/*/node_modules
npm install
```

### TypeScript errors

```bash
# Error: Type error in components

# Solution 1: Clean Next.js cache
rm -rf apps/v1/.next
npm run dev:v1

# Solution 2: Restart TypeScript server
# In VS Code: Cmd+Shift+P -> "TypeScript: Restart TS Server"
```

### Tailwind styles not applying

```bash
# Error: Classes not working

# Solution 1: Check content paths in tailwind.config.ts
content: [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
]

# Solution 2: Restart dev server
# Ctrl+C, then npm run dev
```

### Build fails

```bash
# Error: Build failed

# Solution 1: Check for TypeScript errors
npx turbo run type-check

# Solution 2: Check for linting errors
npm run lint

# Solution 3: Clean and rebuild
npm run clean
npm run build
```

### Images not loading

```bash
# Error: Images showing broken link

# Solution 1: Check image path (use absolute paths)
<Image src="/images/logo.png" />  // NOT "./images/logo.png"

# Solution 2: Check public folder structure
apps/v1/public/images/logo.png

# Solution 3: Add domain to next.config.mjs if external
images: {
  domains: ["example.com"]
}
```

### Monorepo workspace errors

```bash
# Error: Workspace packages not found

# Solution: Use workspace protocol in package.json
"dependencies": {
  "@teleobra24h/ui": "workspace:*"
}

# Then reinstall
npm install
```

---

## Performance

### How do I optimize images?

Use Next.js Image component:

```typescript
import Image from "next/image"

<Image
  src="/professional.jpg"
  alt="Professional"
  width={400}
  height={300}
  loading="lazy"        // Lazy load
  placeholder="blur"    // Blur placeholder
  blurDataURL="..."     // Base64 blur
/>
```

### How do I improve build times?

1. **Enable Turbo Cache**:
```bash
turbo build --cache-dir=.turbo
```

2. **Reduce dependencies**: Remove unused packages

3. **Use SWC**: Next.js 14 uses SWC by default (faster than Babel)

4. **Selective builds**:
```bash
# Build only changed apps
turbo build --filter=[main]
```

### How do I measure performance?

**Development:**
```bash
# Lighthouse CLI
npm install -g lighthouse
lighthouse http://localhost:3001 --view
```

**Production:**
- Vercel Analytics (built-in)
- Google PageSpeed Insights
- WebPageTest
- Chrome DevTools Performance tab

### How do I enable caching?

**Static Assets**: Next.js handles automatically

**API Responses** (future):
```typescript
export const revalidate = 60 // Revalidate every 60 seconds

export default async function Page() {
  const data = await fetch("...", { next: { revalidate: 60 } })
  return <div>{/* content */}</div>
}
```

---

## Future Features

### When will backend integration be ready?

Backend integration is planned for **Phase 3** (months 3-4 after prototype selection). See [ROADMAP.md](./ROADMAP.md) for timeline.

### Will there be a mobile app?

Yes! **Phase 7** includes React Native mobile apps for iOS and Android.

### Will you add authentication?

Yes! **Phase 4** includes:
- OTP authentication via SMS
- Social login (Google, Facebook)
- JWT tokens
- User profiles and roles

### What about payments?

Payment integration is planned for **Phase 5** with:
- Stripe or local Brazilian payment processors
- Subscription management
- Professional payout system
- Escrow for service completion

### Will you add real-time chat?

Yes! Real-time chat is planned using:
- Supabase real-time features
- WhatsApp Business API integration
- Push notifications
- Message history

### Can I contribute?

**Absolutely!** We welcome contributions. Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

---

## Still Have Questions?

### Documentation

- [README.md](./README.md) - Project overview
- [QUICK_START.md](./QUICK_START.md) - Getting started
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Technical details
- [CONTRIBUTING.md](./CONTRIBUTING.md) - How to contribute
- [ROADMAP.md](./ROADMAP.md) - Future plans

### Support Channels

- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: Questions and community
- **Documentation**: This FAQ and other docs

### Common Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn/ui Documentation](https://ui.shadcn.com)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

**Last Updated**: October 2025
**Version**: 0.1.0
**Status**: Prototype Phase

If your question isn't answered here, please [open an issue](https://github.com/your-repo/issues) or [start a discussion](https://github.com/your-repo/discussions).
