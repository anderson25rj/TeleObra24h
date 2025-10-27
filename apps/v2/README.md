# TeleObra24h V2 - Vibrante e Moderno

Version 2 of TeleObra24h with a vibrant, modern design theme.

## Theme

**Vibrante e Moderno** - Vibrant and modern aesthetics
- Primary: Purple/Violet gradient (#667eea, #764ba2)
- Accent: Vibrant Orange (#F97316)
- Gradients: Multiple gradient options for dynamic UI

## Tech Stack

- **Framework**: Next.js 14.2+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom gradients
- **Fonts**: Inter (body), Montserrat (headings)
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Development

```bash
# Install dependencies (from monorepo root)
npm install

# Run development server (port 3002)
npm run dev:v2

# Build for production
npm run build:v2

# Start production server
npm run start
```

## Project Structure

```
apps/v2/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles with Tailwind
├── public/             # Static assets
├── next.config.mjs     # Next.js configuration with OWASP headers
├── tailwind.config.ts  # Tailwind configuration with V2 theme
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
- Vibrant gradient designs
- Responsive design
- Accessibility ready
- Performance optimized
- Security hardened
