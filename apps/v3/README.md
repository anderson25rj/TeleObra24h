# TeleObra24h V3 - Minimalista Premium

Version 3 of TeleObra24h with a minimalist, premium luxury design theme.

## Theme

**Minimalista Premium** - Luxury minimalist aesthetics
- Primary: Pure Black (#000000)
- Secondary: Gold (#D4AF37)
- Accent: Pure White (#FFFFFF)

## Tech Stack

- **Framework**: Next.js 14.2+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with luxury theme
- **Fonts**: Inter (body), Playfair Display (headings)
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Development

```bash
# Install dependencies (from monorepo root)
npm install

# Run development server (port 3003)
npm run dev:v3

# Build for production
npm run build:v3

# Start production server
npm run start
```

## Project Structure

```
apps/v3/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles with Tailwind
├── public/             # Static assets
├── next.config.mjs     # Next.js configuration with OWASP headers
├── tailwind.config.ts  # Tailwind configuration with V3 theme
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```

## Security

This app includes OWASP security headers:
- Strict Transport Security (HSTS)
- X-Frame-Options (Clickjacking protection)
- X-Content-Type-Options (MIME sniffing prevention)
- Content Security Policy (CSP)
- X-XSS-Protection
- Referrer Policy
- Permissions Policy

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

## Features

- SEO optimized with comprehensive metadata
- Luxury minimalist design
- Premium typography
- Responsive design
- Accessibility ready
- Performance optimized
- Security hardened
