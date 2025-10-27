# TeleObra24h Deployment Guide

Complete guide for deploying the TeleObra24h monorepo to Vercel with automated CI/CD.

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Initial Setup](#initial-setup)
4. [Vercel Configuration](#vercel-configuration)
5. [GitHub Actions Setup](#github-actions-setup)
6. [Manual Deployment](#manual-deployment)
7. [Environment Variables](#environment-variables)
8. [Troubleshooting](#troubleshooting)
9. [SEO Configuration](#seo-configuration)

## Overview

This project uses:
- **Turborepo**: Monorepo management
- **Next.js 14**: App Router for all three versions
- **Vercel**: Hosting platform
- **GitHub Actions**: CI/CD automation

Each version (V1, V2, V3) is deployed as a separate Vercel project with independent URLs:
- V1: https://v1-teleobra24h.vercel.app
- V2: https://v2-teleobra24h.vercel.app
- V3: https://v3-teleobra24h.vercel.app

## Prerequisites

Before deploying, ensure you have:

- [x] GitHub account with repository access
- [x] Vercel account (free tier is sufficient)
- [x] Node.js 20+ and npm 10+ installed locally
- [x] Vercel CLI installed: `npm i -g vercel`
- [x] Git configured locally

## Initial Setup

### 1. Clone and Install

```bash
git clone <repository-url>
cd TeleObra24h
npm install
```

### 2. Test Local Build

```bash
# Test individual builds
npm run build:v1
npm run build:v2
npm run build:v3

# Test all builds
npm run build

# Test linting
npm run lint
```

### 3. Test Local Development

```bash
# Run all versions
npm run dev

# Run individual versions
npm run dev:v1  # http://localhost:3001
npm run dev:v2  # http://localhost:3002
npm run dev:v3  # http://localhost:3003
```

## Vercel Configuration

### Step 1: Create Vercel Projects

You need to create **three separate Vercel projects** (one for each version).

#### Via Vercel Dashboard:

1. Go to https://vercel.com/dashboard
2. Click "Add New..." > "Project"
3. Import your GitHub repository
4. Configure each project:

**For V1:**
- Project Name: `teleobra24h-v1`
- Framework Preset: `Next.js`
- Root Directory: `apps/v1`
- Build Command: `cd ../.. && npm run build:v1`
- Output Directory: `.next`
- Install Command: `cd ../.. && npm install`

**For V2:**
- Project Name: `teleobra24h-v2`
- Framework Preset: `Next.js`
- Root Directory: `apps/v2`
- Build Command: `cd ../.. && npm run build:v2`
- Output Directory: `.next`
- Install Command: `cd ../.. && npm install`

**For V3:**
- Project Name: `teleobra24h-v3`
- Framework Preset: `Next.js`
- Root Directory: `apps/v3`
- Build Command: `cd ../.. && npm run build:v3`
- Output Directory: `.next`
- Install Command: `cd ../.. && npm install`

#### Via Vercel CLI:

```bash
# Navigate to each app directory and link
cd apps/v1
vercel link

cd ../v2
vercel link

cd ../v3
vercel link
```

### Step 2: Configure Environment Variables

For each Vercel project, add environment variables:

#### Required Variables (Production):

```env
NEXT_PUBLIC_APP_VERSION=v1  # or v2, v3
NEXT_PUBLIC_APP_NAME=TeleObra24h V1  # or V2, V3
NEXT_PUBLIC_APP_URL=https://v1-teleobra24h.vercel.app  # or v2, v3
NEXT_PUBLIC_API_URL=https://v1-teleobra24h.vercel.app/api
NEXT_PUBLIC_PHONE=+55-22-XXXXX-XXXX
NEXT_PUBLIC_EMAIL=contato@teleobra24h.com.br
```

#### Optional Variables (for future features):

```env
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
STRIPE_PUBLIC_KEY=pk_live_xxxxxxxxxxxxx
STRIPE_SECRET_KEY=sk_live_xxxxxxxxxxxxx
DATABASE_URL=postgresql://user:password@host:5432/dbname
```

### Step 3: Get Vercel Credentials

You need these for GitHub Actions:

1. **Vercel Token**:
   - Go to: https://vercel.com/account/tokens
   - Create new token with name "GitHub Actions"
   - Copy the token (save securely)

2. **Organization ID**:
   ```bash
   vercel whoami
   # Copy the "ID" value
   ```

3. **Project IDs**:
   ```bash
   cd apps/v1
   vercel project ls
   # Note the project ID for v1

   cd ../v2
   vercel project ls
   # Note the project ID for v2

   cd ../v3
   vercel project ls
   # Note the project ID for v3
   ```

   Or find them in the Vercel dashboard:
   - Go to Project Settings > General
   - Copy "Project ID"

## GitHub Actions Setup

### Step 1: Add GitHub Secrets

Go to your GitHub repository settings:

`Settings > Secrets and variables > Actions > New repository secret`

Add these secrets:

| Secret Name | Description | Example |
|-------------|-------------|---------|
| `VERCEL_TOKEN` | Vercel authentication token | `xxxxxxxxxxxxxxxxxx` |
| `VERCEL_ORG_ID` | Your Vercel organization/team ID | `team_xxxxxxxxxxxxx` |
| `VERCEL_PROJECT_V1_ID` | V1 project ID | `prj_xxxxxxxxxxxxx` |
| `VERCEL_PROJECT_V2_ID` | V2 project ID | `prj_xxxxxxxxxxxxx` |
| `VERCEL_PROJECT_V3_ID` | V3 project ID | `prj_xxxxxxxxxxxxx` |

Optional (for Turborepo caching):
| Secret Name | Description |
|-------------|-------------|
| `TURBO_TOKEN` | Turborepo remote caching token |
| `TURBO_TEAM` | Turborepo team name |

### Step 2: Enable GitHub Actions

1. Go to `Settings > Actions > General`
2. Enable "Allow all actions and reusable workflows"
3. Enable "Read and write permissions" for workflows

### Step 3: Verify Workflow

The workflow file is at `.github/workflows/deploy.yml` and will:

1. **On Pull Request**: Run linting and build tests
2. **On Push to Main**:
   - Run linting and build tests
   - Deploy V1 to production
   - Deploy V2 to production
   - Deploy V3 to production
   - Notify completion status

### Step 4: Test the Workflow

```bash
# Make a change and push to main
git add .
git commit -m "test: trigger deployment"
git push origin main

# Watch the workflow in GitHub Actions tab
```

## Manual Deployment

### Deploy All Versions

```bash
# From project root
npm run build
vercel --prod
```

### Deploy Individual Versions

**V1:**
```bash
cd apps/v1
vercel --prod
```

**V2:**
```bash
cd apps/v2
vercel --prod
```

**V3:**
```bash
cd apps/v3
vercel --prod
```

### Preview Deployments (non-production)

```bash
cd apps/v1
vercel
# Returns preview URL
```

## Environment Variables

### Local Development (.env.local)

Copy `.env.local` files for each app:

```bash
# V1
cp apps/v1/.env.example apps/v1/.env.local

# V2
cp apps/v2/.env.example apps/v2/.env.local

# V3
cp apps/v3/.env.example apps/v3/.env.local
```

Then edit each `.env.local` with your local values.

### Production (.env in Vercel)

Set environment variables in Vercel Dashboard:

1. Go to Project Settings
2. Click "Environment Variables"
3. Add variables for Production, Preview, and Development

### Required vs Optional Variables

**Required for MVP:**
- `NEXT_PUBLIC_APP_VERSION`
- `NEXT_PUBLIC_APP_NAME`
- `NEXT_PUBLIC_APP_URL`
- `NEXT_PUBLIC_PHONE`
- `NEXT_PUBLIC_EMAIL`

**Optional (for future features):**
- Analytics: `NEXT_PUBLIC_GA_TRACKING_ID`
- Payments: `STRIPE_*` variables
- Database: `DATABASE_URL`
- Email: `SMTP_*` variables
- Storage: `AWS_*` variables

## Troubleshooting

### Build Failures

**Error: Module not found**
```bash
# Clear node_modules and reinstall
npm run clean
rm -rf node_modules package-lock.json
npm install
```

**Error: Turbo build failed**
```bash
# Clear Turbo cache
rm -rf .turbo
npm run build
```

**Error: Out of memory**
```bash
# Increase Node memory limit
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

### Deployment Failures

**Error: Invalid vercel.json**
- Verify JSON syntax in `apps/*/vercel.json`
- Check build command paths

**Error: Build timeout**
- Check Vercel build logs
- Optimize dependencies
- Remove unused imports

**Error: Environment variable not found**
- Verify variable names match exactly
- Check variable is added to Vercel project
- Ensure `NEXT_PUBLIC_` prefix for client-side vars

### GitHub Actions Failures

**Error: Secrets not found**
- Verify all secrets are added in GitHub repo settings
- Check secret names match exactly (case-sensitive)

**Error: Vercel deployment failed**
- Check Vercel token is valid
- Verify project IDs are correct
- Ensure Vercel CLI version is compatible

**Error: Build failed in CI**
- Check if build passes locally first
- Review GitHub Actions logs for specific error
- Ensure all dependencies are in package.json

### Common Issues

**Issue: Sitemap not accessible**
- Solution: Ensure `app/sitemap.ts` exists
- Verify `@repo/mocks` package is built
- Check sitemap at `/sitemap.xml`

**Issue: Robots.txt not working**
- Solution: Ensure `public/robots.txt` exists
- Check file is being served at `/robots.txt`
- Verify Vercel deployment includes public folder

**Issue: Different versions show same content**
- Solution: Check `NEXT_PUBLIC_APP_VERSION` env var
- Verify correct root directory in Vercel
- Clear browser cache

## SEO Configuration

### Sitemaps

Each version automatically generates a sitemap at `/sitemap.xml`:

- **Static pages**: /, /busca, /sobre, /planos
- **Dynamic pages**: All professional profiles from mock data
- **Update frequency**: Configurable in `app/sitemap.ts`

Test locally:
```bash
npm run dev:v1
# Visit http://localhost:3001/sitemap.xml
```

### Robots.txt

Located at `public/robots.txt` for each version:

- Allows all search engines
- Includes AI crawlers (GPT, Claude, Perplexity)
- Points to sitemap location
- Disallows admin/API routes

Test locally:
```bash
npm run dev:v1
# Visit http://localhost:3001/robots.txt
```

### Metadata

Each page should include:
```typescript
// In page.tsx or layout.tsx
export const metadata = {
  title: 'Page Title | TeleObra24h',
  description: 'Page description',
  openGraph: {
    title: 'Page Title',
    description: 'Page description',
    url: 'https://v1-teleobra24h.vercel.app/page',
    siteName: 'TeleObra24h',
    images: ['/og-image.jpg'],
  },
}
```

## Monitoring & Analytics

### Vercel Analytics

Enable in Vercel Dashboard:
1. Go to Project Settings
2. Click "Analytics"
3. Enable Web Analytics

### Performance Monitoring

Use Vercel Speed Insights:
```bash
npm install @vercel/speed-insights
```

Add to `app/layout.tsx`:
```typescript
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
```

## Best Practices

1. **Always test locally before pushing**
   ```bash
   npm run lint
   npm run build
   ```

2. **Use preview deployments for testing**
   - Push to feature branch
   - Vercel creates preview URL
   - Test before merging to main

3. **Monitor build times**
   - Keep dependencies minimal
   - Use dynamic imports where possible
   - Optimize images

4. **Security**
   - Never commit `.env.local` files
   - Use environment variables for secrets
   - Enable security headers in vercel.json

5. **SEO**
   - Keep sitemaps updated
   - Add meta descriptions to all pages
   - Use semantic HTML
   - Optimize page load times

## Support

For issues or questions:
- Check Vercel Documentation: https://vercel.com/docs
- Check Next.js Documentation: https://nextjs.org/docs
- Check Turborepo Documentation: https://turbo.build/repo/docs
- Review GitHub Actions logs
- Check Vercel deployment logs

## Quick Reference

### Common Commands

```bash
# Development
npm run dev           # All apps
npm run dev:v1       # V1 only
npm run dev:v2       # V2 only
npm run dev:v3       # V3 only

# Building
npm run build        # All apps
npm run build:v1     # V1 only
npm run build:v2     # V2 only
npm run build:v3     # V3 only

# Linting
npm run lint         # All apps

# Deployment
vercel --prod        # Production deployment
vercel               # Preview deployment

# Cleaning
npm run clean        # Clean all builds
```

### Important URLs

- Vercel Dashboard: https://vercel.com/dashboard
- GitHub Actions: https://github.com/<user>/<repo>/actions
- V1 Production: https://v1-teleobra24h.vercel.app
- V2 Production: https://v2-teleobra24h.vercel.app
- V3 Production: https://v3-teleobra24h.vercel.app

### File Locations

```
TeleObra24h/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── apps/
│   ├── v1/
│   │   ├── app/
│   │   │   └── sitemap.ts      # V1 sitemap generator
│   │   ├── public/
│   │   │   └── robots.txt      # V1 robots.txt
│   │   ├── .env.local          # V1 local env (gitignored)
│   │   ├── .env.example        # V1 env template
│   │   └── vercel.json         # V1 Vercel config
│   ├── v2/ (same structure)
│   └── v3/ (same structure)
└── DEPLOYMENT.md               # This file
```

## Changelog

- **2025-10-27**: Initial deployment infrastructure created
  - Added GitHub Actions workflow
  - Added Vercel configurations
  - Added sitemap generators
  - Added robots.txt files
  - Added environment templates
  - Created deployment documentation
