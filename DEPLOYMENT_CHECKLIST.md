# TeleObra24h Deployment Checklist

Use this checklist to track your deployment progress. Check off items as you complete them.

## Pre-Deployment

### Environment Setup
- [ ] Node.js 20+ installed (`node --version`)
- [ ] Git installed and configured
- [ ] GitHub account created
- [ ] Vercel account created
- [ ] Vercel CLI installed (`npm i -g vercel`)
- [ ] Logged into Vercel CLI (`vercel login`)

### Project Setup
- [ ] Repository cloned locally
- [ ] Dependencies installed (`npm install`)
- [ ] Project builds successfully (`npm run build`)
- [ ] All linting passes (`npm run lint`)
- [ ] Local development works (`npm run dev`)
- [ ] Verification script passes (`./scripts/verify-deployment-setup.sh`)

## GitHub Configuration

### Repository Settings
- [ ] Repository exists on GitHub
- [ ] Code pushed to main branch
- [ ] GitHub Actions enabled
- [ ] Workflow permissions set to "Read and write"
- [ ] All actions allowed

### GitHub Secrets
- [ ] VERCEL_TOKEN created and added
- [ ] VERCEL_ORG_ID obtained and added
- [ ] VERCEL_PROJECT_V1_ID obtained and added
- [ ] VERCEL_PROJECT_V2_ID obtained and added
- [ ] VERCEL_PROJECT_V3_ID obtained and added
- [ ] All secrets verified (no typos, no spaces)

## Vercel Configuration

### Project V1
- [ ] Project created in Vercel
- [ ] Project name: `teleobra24h-v1`
- [ ] Root directory: `apps/v1`
- [ ] Build command: `cd ../.. && npm run build:v1`
- [ ] Install command: `cd ../.. && npm install`
- [ ] Output directory: `.next`
- [ ] Framework: Next.js
- [ ] Region: Brazil (GRU1)

### Project V2
- [ ] Project created in Vercel
- [ ] Project name: `teleobra24h-v2`
- [ ] Root directory: `apps/v2`
- [ ] Build command: `cd ../.. && npm run build:v2`
- [ ] Install command: `cd ../.. && npm install`
- [ ] Output directory: `.next`
- [ ] Framework: Next.js
- [ ] Region: Brazil (GRU1)

### Project V3
- [ ] Project created in Vercel
- [ ] Project name: `teleobra24h-v3`
- [ ] Root directory: `apps/v3`
- [ ] Build command: `cd ../.. && npm run build:v3`
- [ ] Install command: `cd ../.. && npm install`
- [ ] Output directory: `.next`
- [ ] Framework: Next.js
- [ ] Region: Brazil (GRU1)

### Environment Variables (per project)

**V1 Variables:**
- [ ] NEXT_PUBLIC_APP_VERSION=v1
- [ ] NEXT_PUBLIC_APP_NAME=TeleObra24h V1
- [ ] NEXT_PUBLIC_APP_URL=https://v1-teleobra24h.vercel.app
- [ ] NEXT_PUBLIC_PHONE=(your phone)
- [ ] NEXT_PUBLIC_EMAIL=(your email)

**V2 Variables:**
- [ ] NEXT_PUBLIC_APP_VERSION=v2
- [ ] NEXT_PUBLIC_APP_NAME=TeleObra24h V2
- [ ] NEXT_PUBLIC_APP_URL=https://v2-teleobra24h.vercel.app
- [ ] NEXT_PUBLIC_PHONE=(your phone)
- [ ] NEXT_PUBLIC_EMAIL=(your email)

**V3 Variables:**
- [ ] NEXT_PUBLIC_APP_VERSION=v3
- [ ] NEXT_PUBLIC_APP_NAME=TeleObra24h V3
- [ ] NEXT_PUBLIC_APP_URL=https://v3-teleobra24h.vercel.app
- [ ] NEXT_PUBLIC_PHONE=(your phone)
- [ ] NEXT_PUBLIC_EMAIL=(your email)

## Deployment

### Initial Deployment
- [ ] Code pushed to main branch
- [ ] GitHub Actions workflow triggered
- [ ] Workflow shows in Actions tab
- [ ] lint-and-build job completed successfully
- [ ] deploy-v1 job completed successfully
- [ ] deploy-v2 job completed successfully
- [ ] deploy-v3 job completed successfully
- [ ] notify-completion job completed successfully
- [ ] No errors in workflow logs

### Deployment Verification
- [ ] V1 accessible: https://v1-teleobra24h.vercel.app
- [ ] V2 accessible: https://v2-teleobra24h.vercel.app
- [ ] V3 accessible: https://v3-teleobra24h.vercel.app
- [ ] V1 shows correct content
- [ ] V2 shows correct content
- [ ] V3 shows correct content
- [ ] No console errors in browser

## SEO Configuration

### Robots.txt
- [ ] V1 robots.txt accessible: https://v1-teleobra24h.vercel.app/robots.txt
- [ ] V2 robots.txt accessible: https://v2-teleobra24h.vercel.app/robots.txt
- [ ] V3 robots.txt accessible: https://v3-teleobra24h.vercel.app/robots.txt
- [ ] All robots.txt files contain sitemap URL
- [ ] All robots.txt allow search engines

### Sitemaps
- [ ] V1 sitemap accessible: https://v1-teleobra24h.vercel.app/sitemap.xml
- [ ] V2 sitemap accessible: https://v2-teleobra24h.vercel.app/sitemap.xml
- [ ] V3 sitemap accessible: https://v3-teleobra24h.vercel.app/sitemap.xml
- [ ] All sitemaps are valid XML
- [ ] Sitemaps include all pages
- [ ] Sitemaps include professional profiles

### Meta Tags
- [ ] V1 homepage has title and description
- [ ] V2 homepage has title and description
- [ ] V3 homepage has title and description
- [ ] All pages have OpenGraph tags
- [ ] Social media preview cards work

## Testing

### Functional Testing
- [ ] Homepage loads correctly (all versions)
- [ ] Search page works (/busca)
- [ ] About page works (/sobre)
- [ ] Plans page works (/planos)
- [ ] Professional profiles work (/perfil/*)
- [ ] Navigation works correctly
- [ ] Forms work (if any)
- [ ] Links work correctly

### Performance Testing
- [ ] Pages load in under 3 seconds
- [ ] Images load properly
- [ ] No JavaScript errors
- [ ] Mobile responsive
- [ ] Lighthouse score > 90

### Browser Testing
- [ ] Works in Chrome
- [ ] Works in Firefox
- [ ] Works in Safari
- [ ] Works in Edge
- [ ] Works on mobile browsers

## Post-Deployment

### Search Engine Submission
- [ ] Google Search Console account created
- [ ] V1 sitemap submitted to Google
- [ ] V2 sitemap submitted to Google
- [ ] V3 sitemap submitted to Google
- [ ] Bing Webmaster Tools account created
- [ ] V1 sitemap submitted to Bing
- [ ] V2 sitemap submitted to Bing
- [ ] V3 sitemap submitted to Bing

### Analytics Setup
- [ ] Vercel Analytics enabled for V1
- [ ] Vercel Analytics enabled for V2
- [ ] Vercel Analytics enabled for V3
- [ ] Google Analytics configured (optional)
- [ ] Conversion tracking set up (optional)

### Monitoring Setup
- [ ] Error tracking configured (e.g., Sentry)
- [ ] Uptime monitoring set up
- [ ] Performance monitoring enabled
- [ ] Alert notifications configured

### Custom Domains (Optional)
- [ ] Domain purchased
- [ ] DNS configured for V1
- [ ] DNS configured for V2
- [ ] DNS configured for V3
- [ ] SSL certificates active
- [ ] HTTPS redirects working

## Documentation Review

### Read and Understand
- [ ] QUICKSTART_DEPLOYMENT.md reviewed
- [ ] DEPLOYMENT.md reviewed
- [ ] DEPLOYMENT_SUMMARY.md reviewed
- [ ] .github/SECRETS_SETUP.md reviewed
- [ ] .github/README.md reviewed

### Team Knowledge
- [ ] Team knows how to deploy
- [ ] Team knows how to check logs
- [ ] Team knows troubleshooting steps
- [ ] Team knows who to contact for help

## Maintenance

### Regular Tasks
- [ ] Monitor deployment success rates
- [ ] Check error logs weekly
- [ ] Review analytics monthly
- [ ] Update dependencies quarterly
- [ ] Rotate Vercel tokens annually

### Backup Plans
- [ ] Know how to rollback deployments
- [ ] Know how to deploy manually
- [ ] Know how to access logs
- [ ] Have emergency contact list
- [ ] Have backup access to accounts

## Security

### Access Control
- [ ] GitHub repository access limited
- [ ] Vercel project access limited
- [ ] Secrets access restricted
- [ ] Token permissions minimal
- [ ] 2FA enabled on all accounts

### Code Security
- [ ] No secrets in code
- [ ] .env.local in .gitignore
- [ ] Security headers configured
- [ ] Dependencies up to date
- [ ] No vulnerable packages

## Completion

### Final Verification
- [ ] All deployments working
- [ ] All tests passing
- [ ] All documentation read
- [ ] Team trained
- [ ] Monitoring active
- [ ] SEO submitted
- [ ] No outstanding issues

### Sign-off

**Deployment completed by:** ___________________

**Date:** ___________________

**Verified by:** ___________________

**Date:** ___________________

**Notes:**
_____________________________________________
_____________________________________________
_____________________________________________
_____________________________________________

---

## Quick Status Check

Count your checkmarks:

- **Pre-Deployment:** ___/12
- **GitHub Configuration:** ___/11
- **Vercel Configuration:** ___/39
- **Deployment:** ___/10
- **SEO Configuration:** ___/13
- **Testing:** ___/17
- **Post-Deployment:** ___/19
- **Documentation Review:** ___/5
- **Maintenance:** ___/10
- **Security:** ___/10
- **Completion:** ___/7

**Total Progress:** ___/153 ✅

### Status Legend

- 0-50 checkmarks: Getting started
- 51-100 checkmarks: Good progress
- 101-140 checkmarks: Almost there
- 141-153 checkmarks: Complete! 🎉

## Need Help?

If stuck on any item:

1. Find the relevant section in DEPLOYMENT.md
2. Check QUICKSTART_DEPLOYMENT.md for quick fixes
3. Review .github/SECRETS_SETUP.md for secrets issues
4. Run `./scripts/verify-deployment-setup.sh`
5. Check GitHub Actions logs
6. Check Vercel deployment logs

## Tips

- Work through sections in order
- Don't skip pre-deployment checks
- Verify each section before moving on
- Keep this checklist for future deployments
- Update checklist with lessons learned

---

**Last Updated:** 2025-10-27
**Version:** 1.0
**Status:** Ready for use
