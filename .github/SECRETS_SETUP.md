# GitHub Secrets Setup Guide

Quick reference for setting up GitHub secrets for automated deployments.

## Required GitHub Secrets

Go to: `Repository Settings > Secrets and variables > Actions > New repository secret`

### 1. VERCEL_TOKEN

**How to get it:**
1. Go to https://vercel.com/account/tokens
2. Click "Create Token"
3. Name it "GitHub Actions TeleObra24h"
4. Set scope to your team/account
5. Click "Create"
6. Copy the token immediately (you won't see it again)

**Add to GitHub:**
- Name: `VERCEL_TOKEN`
- Value: `<paste-your-token-here>`

---

### 2. VERCEL_ORG_ID

**How to get it:**

**Method 1 - Via CLI:**
```bash
vercel whoami
# Copy the "ID" value (starts with "team_" or "user_")
```

**Method 2 - Via Dashboard:**
1. Go to https://vercel.com/account
2. Click on your team/account name
3. Go to Settings
4. Find "Team ID" or "User ID"

**Add to GitHub:**
- Name: `VERCEL_ORG_ID`
- Value: `team_xxxxxxxxxxxxx` or `user_xxxxxxxxxxxxx`

---

### 3. VERCEL_PROJECT_V1_ID

**How to get it:**

**Method 1 - Via CLI:**
```bash
cd apps/v1
vercel link  # If not already linked
vercel project ls
# Find your project and copy its ID
```

**Method 2 - Via Dashboard:**
1. Go to https://vercel.com/dashboard
2. Click on "teleobra24h-v1" project
3. Go to Settings > General
4. Find "Project ID"

**Add to GitHub:**
- Name: `VERCEL_PROJECT_V1_ID`
- Value: `prj_xxxxxxxxxxxxx`

---

### 4. VERCEL_PROJECT_V2_ID

**Same process as V1, but for V2 project:**

```bash
cd apps/v2
vercel project ls
```

Or via dashboard: `teleobra24h-v2 > Settings > General > Project ID`

**Add to GitHub:**
- Name: `VERCEL_PROJECT_V2_ID`
- Value: `prj_xxxxxxxxxxxxx`

---

### 5. VERCEL_PROJECT_V3_ID

**Same process as V1, but for V3 project:**

```bash
cd apps/v3
vercel project ls
```

Or via dashboard: `teleobra24h-v3 > Settings > General > Project ID`

**Add to GitHub:**
- Name: `VERCEL_PROJECT_V3_ID`
- Value: `prj_xxxxxxxxxxxxx`

---

## Optional Secrets (for Turborepo Remote Caching)

### TURBO_TOKEN

**How to get it:**
1. Go to https://vercel.com/account/tokens
2. Create a token for Turborepo
3. Or use the same token as VERCEL_TOKEN

**Add to GitHub:**
- Name: `TURBO_TOKEN`
- Value: `<your-turbo-token>`

### TURBO_TEAM

**How to get it:**
1. Same as VERCEL_ORG_ID
2. Or run: `vercel whoami`

**Add to GitHub:**
- Name: `TURBO_TEAM`
- Value: `team_xxxxxxxxxxxxx`

---

## Verification Checklist

After adding all secrets, verify:

- [ ] All 5 required secrets are added
- [ ] Secret names match exactly (case-sensitive)
- [ ] No extra spaces in secret values
- [ ] VERCEL_TOKEN has proper permissions
- [ ] Project IDs match the correct versions
- [ ] Secrets are available to "main" branch

## Testing the Setup

1. **Verify secrets are added:**
   - Go to: `Settings > Secrets and variables > Actions`
   - You should see all 5 (or 7) secrets listed

2. **Test with a commit:**
   ```bash
   git add .
   git commit -m "test: verify deployment setup"
   git push origin main
   ```

3. **Check GitHub Actions:**
   - Go to: `Actions` tab in your repository
   - Watch the "Deploy All Versions to Vercel" workflow
   - Should show green checkmarks for all steps

4. **Verify deployments:**
   - Check V1: https://v1-teleobra24h.vercel.app
   - Check V2: https://v2-teleobra24h.vercel.app
   - Check V3: https://v3-teleobra24h.vercel.app

## Troubleshooting

### "Secret not found" error
- Verify secret name matches exactly
- Check secret is available to workflows
- Ensure secret value has no leading/trailing spaces

### "Invalid token" error
- Generate new Vercel token
- Update VERCEL_TOKEN secret
- Ensure token has proper scope

### "Project not found" error
- Verify project IDs are correct
- Check projects exist in Vercel dashboard
- Ensure ORG_ID matches project owner

### "Permission denied" error
- Check token has deployment permissions
- Verify organization/team access
- Ensure GitHub Actions is enabled

## Security Best Practices

1. **Never commit secrets to repository**
   - Check `.gitignore` includes `.env.local`
   - Never log secret values

2. **Rotate tokens regularly**
   - Create new tokens every 6-12 months
   - Update GitHub secrets when rotating

3. **Use minimal permissions**
   - Tokens should only have deployment permissions
   - Don't use personal access tokens with full access

4. **Monitor usage**
   - Check Vercel audit logs regularly
   - Review GitHub Actions logs
   - Watch for unauthorized deployments

## Quick Command Reference

```bash
# Get Vercel credentials
vercel whoami                    # Get ORG_ID
vercel project ls                # Get PROJECT_ID
vercel token create             # Create new token (via web)

# Test deployment locally
vercel --prod                    # Deploy to production
vercel                          # Deploy preview

# Verify setup
gh secret list                   # List all secrets (requires gh CLI)
```

## Support

If you need help:
1. Check Vercel documentation: https://vercel.com/docs
2. Check GitHub Actions documentation: https://docs.github.com/en/actions
3. Review workflow file: `.github/workflows/deploy.yml`
4. Check deployment guide: `DEPLOYMENT.md`
