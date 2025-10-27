# TeleObra24h - Quick Start Guide

## Installation

```bash
# Navigate to project root
cd /root/Claude-Code-Master/active-projects/TeleObra24h

# Install all dependencies (this will install deps for all apps)
npm install
```

## Running Applications

### Run All Apps Simultaneously
```bash
npm run dev
```
This will start:
- V1 on http://localhost:3001
- V2 on http://localhost:3002
- V3 on http://localhost:3003

### Run Individual Apps
```bash
# Run V1 (Professional theme)
npm run dev:v1

# Run V2 (Vibrant theme)
npm run dev:v2

# Run V3 (Premium theme)
npm run dev:v3
```

## Building for Production

### Build All Apps
```bash
npm run build
```

### Build Individual Apps
```bash
npm run build:v1
npm run build:v2
npm run build:v3
```

## Project Structure

```
TeleObra24h/
├── apps/
│   ├── v1/          # Port 3001 - Confiança Profissional
│   ├── v2/          # Port 3002 - Vibrante e Moderno
│   └── v3/          # Port 3003 - Minimalista Premium
├── packages/        # Shared packages (future)
├── APPS_SETUP_SUMMARY.md     # Detailed setup info
├── THEME_COMPARISON.md       # Theme comparison guide
└── package.json     # Root configuration
```

## Environment Configuration

Each app has its own `.env.example` file. To configure:

```bash
# For V1
cd apps/v1
cp .env.example .env.local
# Edit .env.local with your values

# For V2
cd apps/v2
cp .env.example .env.local
# Edit .env.local with your values

# For V3
cd apps/v3
cp .env.example .env.local
# Edit .env.local with your values
```

## Common Commands

```bash
# Lint all apps
npm run lint

# Clean all build artifacts
npm run clean

# Type check
npx turbo run type-check

# Format code (if prettier is configured)
npm run format
```

## Development Tips

1. **Hot Reload**: All apps support hot module replacement
2. **Port Conflicts**: Make sure ports 3001, 3002, 3003 are available
3. **TypeScript**: Strict mode is enabled for all apps
4. **Shared Code**: Place shared components in `packages/` directory
5. **Independent Development**: Each app can be developed independently

## What's Included

Each app includes:
- ✅ Next.js 14 with App Router
- ✅ TypeScript with strict mode
- ✅ Tailwind CSS with custom themes
- ✅ Framer Motion for animations
- ✅ Lucide React for icons
- ✅ OWASP security headers
- ✅ SEO optimization
- ✅ Responsive design
- ✅ ESLint configuration

## Next Steps

1. **Install dependencies**: `npm install`
2. **Start development**: `npm run dev`
3. **Visit each version**:
   - V1: http://localhost:3001
   - V2: http://localhost:3002
   - V3: http://localhost:3003
4. **Choose your theme** or run A/B tests
5. **Start building features**

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3001
npx kill-port 3001

# Or use different ports in package.json
```

### Node Modules Issues
```bash
# Clean install
rm -rf node_modules
rm -rf apps/*/node_modules
npm install
```

### TypeScript Errors
```bash
# Clean TypeScript cache
rm -rf apps/*/.next
rm -rf apps/*/tsconfig.tsbuildinfo
npm run dev
```

## Documentation

- **Setup Summary**: See [APPS_SETUP_SUMMARY.md](./APPS_SETUP_SUMMARY.md)
- **Theme Details**: See [THEME_COMPARISON.md](./THEME_COMPARISON.md)
- **V1 Docs**: See [apps/v1/README.md](./apps/v1/README.md)
- **V2 Docs**: See [apps/v2/README.md](./apps/v2/README.md)
- **V3 Docs**: See [apps/v3/README.md](./apps/v3/README.md)

## Support

For issues or questions:
1. Check the individual app README files
2. Review APPS_SETUP_SUMMARY.md
3. Check Next.js 14 documentation
4. Review Turborepo documentation

---

**Ready to start building!** 🚀
