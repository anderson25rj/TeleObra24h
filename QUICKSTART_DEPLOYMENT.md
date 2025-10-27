# Quick Start: Deploy TeleObra24h to Vercel

Fast-track guide to get all three versions deployed in under 30 minutes.

## Prerequisites Checklist

Before starting, ensure you have:

- [ ] GitHub account with repository access
- [ ] Vercel account (sign up at https://vercel.com)
- [ ] Node.js 20+ installed (`node --version`)
- [ ] Git configured locally
- [ ] 30 minutes of time

## Step 1: Verify Setup (2 minutes)

```bash
# Navigate to project
cd /root/Claude-Code-Master/active-projects/TeleObra24h

# Run verification
./scripts/verify-deployment-setup.sh

# Expected: ✅ All 26 checks passed
```

## Step 2: Get Vercel Credentials (5 minutes)

### A. Install Vercel CLI

```bash
npm i -g vercel
```

### B. Login to Vercel

```bash
vercel login
# Follow the email verification link
```

### C. Get Organization ID

```bash
vercel whoami
# Copy the "ID" value (starts with "team_" or "user_")
# Example: team_abc123xyz456
```

**Save this:** VERCEL_ORG_ID = `________________`

### D. Create Vercel Token

1. Go to: https://vercel.com/account/tokens
2. Click "Create Token"
3. Name: "GitHub Actions TeleObra24h"
4. Scope: Select your team/account
5. Click "Create"
6. Copy the token immediately

**Save this:** VERCEL_TOKEN = `________________`

## Step 3: Create Vercel Projects (10 minutes)

### Option A: Via Dashboard (Recommended)

**For V1:**

1. Go to: https://vercel.com/new
2. Import Git Repository (connect GitHub if needed)
3. Select your TeleObra24h repository
4. Configure:
   - Project Name: `teleobra24h-v1`
   - Framework Preset: `Next.js`
   - Root Directory: `apps/v1`
   - Build Command: `cd ../.. && npm run build:v1`
   - Output Directory: `.next`
   - Install Command: `cd ../.. && npm install`
5. Add Environment Variables:
   ```
   NEXT_PUBLIC_APP_VERSION=v1
   NEXT_PUBLIC_APP_NAME=TeleObra24h V1
   NEXT_PUBLIC_APP_URL=https://v1-teleobra24h.vercel.app
   NEXT_PUBLIC_PHONE=+55-22-XXXXX-XXXX
   NEXT_PUBLIC_EMAIL=contato@teleobra24h.com.br
   ```
6. Click "Deploy"
7. After deployment, go to Settings > General
8. Copy "Project ID"

**Save this:** VERCEL_PROJECT_V1_ID = `________________`

**Repeat for V2 and V3** with their respective settings.

### Option B: Via CLI (Faster)

```bash
# Link V1
cd apps/v1
vercel link --yes
vercel env add NEXT_PUBLIC_APP_VERSION production
# Enter: v1
vercel env add NEXT_PUBLIC_APP_NAME production
# Enter: TeleObra24h V1
# ... add other env vars

# Link V2
cd ../v2
vercel link --yes
# ... repeat env setup

# Link V3
cd ../v3
vercel link --yes
# ... repeat env setup

# Get project IDs
cd ../v1
vercel project ls  # Copy V1 project ID
cd ../v2
vercel project ls  # Copy V2 project ID
cd ../v3
vercel project ls  # Copy V3 project ID
```

**Save these:**
- VERCEL_PROJECT_V1_ID = `________________`
- VERCEL_PROJECT_V2_ID = `________________`
- VERCEL_PROJECT_V3_ID = `________________`

## Step 4: Configure GitHub Secrets (5 minutes)

1. Go to your GitHub repository
2. Click: Settings > Secrets and variables > Actions
3. Click: "New repository secret"
4. Add these 5 secrets:

| Secret Name | Value (from Step 2 & 3) |
|-------------|-------------------------|
| VERCEL_TOKEN | Your token from Step 2 |
| VERCEL_ORG_ID | Your org ID from Step 2 |
| VERCEL_PROJECT_V1_ID | V1 project ID from Step 3 |
| VERCEL_PROJECT_V2_ID | V2 project ID from Step 3 |
| VERCEL_PROJECT_V3_ID | V3 project ID from Step 3 |

## Step 5: Enable GitHub Actions (2 minutes)

1. Go to: Repository Settings > Actions > General
2. Under "Actions permissions":
   - Select "Allow all actions and reusable workflows"
3. Under "Workflow permissions":
   - Select "Read and write permissions"
   - Check "Allow GitHub Actions to create and approve pull requests"
4. Click "Save"

## Step 6: Deploy! (5 minutes)

### Test Deployment

```bash
# Make sure you're on main branch
git checkout main

# Create a test commit
git add .
git commit -m "feat: initial deployment setup"
git push origin main
```

### Monitor Deployment

1. Go to: GitHub Repository > Actions tab
2. You should see "Deploy All Versions to Vercel" running
3. Wait for all jobs to complete (about 3-5 minutes)
4. All should show green checkmarks ✅

### Verify Deployments

Visit these URLs:
- V1: https://v1-teleobra24h.vercel.app
- V2: https://v2-teleobra24h.vercel.app
- V3: https://v3-teleobra24h.vercel.app

Check SEO files:
- V1 Robots: https://v1-teleobra24h.vercel.app/robots.txt
- V1 Sitemap: https://v1-teleobra24h.vercel.app/sitemap.xml
- (Repeat for V2 and V3)

## Step 7: Post-Deployment (Optional, 5 minutes)

### A. Custom Domains (if you have them)

For each Vercel project:
1. Go to Project Settings > Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### B. Analytics

Enable Vercel Analytics:
1. Go to Project Settings > Analytics
2. Toggle "Enable Analytics"
3. Choose plan (free tier available)

### C. Search Engine Submission

Submit sitemaps to:
- Google Search Console: https://search.google.com/search-console
- Bing Webmaster Tools: https://www.bing.com/webmasters

## Troubleshooting

### Build Failed in GitHub Actions

**Check:**
```bash
# Test build locally first
npm run build

# If it fails, clean and retry
npm run clean
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Vercel Deployment Failed

**Check:**
1. Verify all environment variables are set in Vercel
2. Check build logs in Vercel dashboard
3. Ensure root directory is correct (`apps/v1`, `apps/v2`, `apps/v3`)
4. Verify build command includes `cd ../..`

### GitHub Secrets Not Working

**Check:**
1. Secret names match exactly (case-sensitive)
2. No extra spaces in secret values
3. All 5 secrets are added
4. Workflow file exists in `.github/workflows/deploy.yml`

### Sitemap/Robots.txt Not Found

**Check:**
1. Files exist in correct locations:
   - `apps/v1/public/robots.txt`
   - `apps/v1/app/sitemap.ts`
2. Deployment completed successfully
3. Try accessing with `/sitemap.xml` (not `.ts`)
4. Clear browser cache

## Quick Reference

### URLs

**Production:**
- V1: https://v1-teleobra24h.vercel.app
- V2: https://v2-teleobra24h.vercel.app
- V3: https://v3-teleobra24h.vercel.app

**Dashboards:**
- Vercel: https://vercel.com/dashboard
- GitHub Actions: https://github.com/<user>/<repo>/actions

### Commands

```bash
# Local development
npm run dev:v1        # http://localhost:3001
npm run dev:v2        # http://localhost:3002
npm run dev:v3        # http://localhost:3003

# Building
npm run build         # All versions
npm run build:v1      # V1 only

# Manual deployment
cd apps/v1 && vercel --prod
cd apps/v2 && vercel --prod
cd apps/v3 && vercel --prod

# Verification
./scripts/verify-deployment-setup.sh
```

### Important Files

- Deployment Guide: `DEPLOYMENT.md`
- Secrets Setup: `.github/SECRETS_SETUP.md`
- This Guide: `QUICKSTART_DEPLOYMENT.md`
- Summary: `DEPLOYMENT_SUMMARY.md`

## Success Checklist

After completing all steps, verify:

- [ ] All 5 GitHub secrets configured
- [ ] Three Vercel projects created
- [ ] Environment variables set in Vercel
- [ ] GitHub Actions workflow runs successfully
- [ ] All three versions deployed and accessible
- [ ] Robots.txt accessible on all versions
- [ ] Sitemap.xml accessible on all versions
- [ ] No build or deployment errors

## What's Next?

After successful deployment:

1. **SEO Optimization**
   - Submit sitemaps to search engines
   - Set up Google Analytics
   - Configure social media meta tags

2. **Monitoring**
   - Enable Vercel Analytics
   - Set up error tracking
   - Configure uptime monitoring

3. **Custom Domains**
   - Purchase domains if needed
   - Configure DNS
   - Enable SSL/HTTPS

4. **Feature Development**
   - Continue building features
   - Each push to main auto-deploys
   - Use preview deployments for testing

## Need Help?

- **Quick issues**: Check DEPLOYMENT.md troubleshooting
- **Secrets setup**: See .github/SECRETS_SETUP.md
- **Detailed guide**: Read DEPLOYMENT.md
- **Project overview**: See DEPLOYMENT_SUMMARY.md

## Time Estimate

Total time breakdown:
- Step 1 (Verify): 2 min
- Step 2 (Credentials): 5 min
- Step 3 (Projects): 10 min
- Step 4 (Secrets): 5 min
- Step 5 (Actions): 2 min
- Step 6 (Deploy): 5 min
- Step 7 (Optional): 5 min

**Total: 29-34 minutes**

## Support

If you get stuck:
1. Run verification script: `./scripts/verify-deployment-setup.sh`
2. Check GitHub Actions logs
3. Check Vercel deployment logs
4. Review DEPLOYMENT.md for detailed help

---

**Ready to deploy?** Start with Step 1! 🚀
