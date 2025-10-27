# TeleObra24h V1 - Confiança Profissional

Version 1 of TeleObra24h with a professional, trustworthy design theme.

## Theme

**Confiança Profissional** - Professional trust and reliability
- Primary: Blue (#1E40AF)
- Secondary: Green (#10B981)
- Accent: Orange (#F59E0B)

## Tech Stack

- **Framework**: Next.js 14.2+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter (body), Poppins (headings)
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Development

```bash
# Install dependencies (from monorepo root)
npm install

# Run development server (port 3001)
npm run dev:v1

# Build for production
npm run build:v1

# Start production server
npm run start
```

## Project Structure

```
apps/v1/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles with Tailwind
├── public/             # Static assets
├── next.config.mjs     # Next.js configuration with OWASP headers
├── tailwind.config.ts  # Tailwind configuration with V1 theme
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
- Responsive design
- Accessibility ready
- Performance optimized
- Security hardened
