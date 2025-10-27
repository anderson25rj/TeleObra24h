# GitHub Configuration

This directory contains GitHub-specific configurations for the TeleObra24h project.

## Contents

### workflows/deploy.yml

Automated CI/CD pipeline that:
- Runs on every push to `main` branch
- Performs linting and build checks
- Deploys all three versions (V1, V2, V3) to Vercel
- Runs deployments in parallel for faster delivery
- Provides deployment status notifications

**Triggers:**
- Push to `main`: Full deployment to production
- Pull Request: Lint and build checks only (no deployment)

**Required Secrets:**
- `VERCEL_TOKEN`: Vercel authentication token
- `VERCEL_ORG_ID`: Your Vercel organization/team ID
- `VERCEL_PROJECT_V1_ID`: Project ID for V1
- `VERCEL_PROJECT_V2_ID`: Project ID for V2
- `VERCEL_PROJECT_V3_ID`: Project ID for V3

See [SECRETS_SETUP.md](./SECRETS_SETUP.md) for detailed setup instructions.

### SECRETS_SETUP.md

Complete guide for configuring GitHub secrets required for automated deployments.

**Includes:**
- Step-by-step instructions for each secret
- How to obtain Vercel credentials
- Verification checklist
- Troubleshooting tips
- Security best practices

## Quick Start

1. **Setup GitHub Secrets:**
   ```bash
   # Follow the guide in SECRETS_SETUP.md
   ```

2. **Enable GitHub Actions:**
   - Go to repository Settings > Actions > General
   - Enable "Allow all actions and reusable workflows"
   - Enable "Read and write permissions"

3. **Test Deployment:**
   ```bash
   git add .
   git commit -m "test: trigger deployment"
   git push origin main
   ```

4. **Monitor Deployment:**
   - Go to Actions tab in GitHub
   - Watch "Deploy All Versions to Vercel" workflow
   - Check deployment status for each version

## Workflow Structure

```yaml
Deploy All Versions to Vercel
├── lint-and-build (runs first)
│   ├── Install dependencies
│   ├── Run linting
│   └── Build all apps
├── deploy-v1 (parallel, after lint)
│   ├── Build V1
│   └── Deploy to Vercel
├── deploy-v2 (parallel, after lint)
│   ├── Build V2
│   └── Deploy to Vercel
├── deploy-v3 (parallel, after lint)
│   ├── Build V3
│   └── Deploy to Vercel
└── notify-completion (after all deploys)
    └── Report status
```

## Environment Protection

The workflow uses GitHub Environments for each version:

- `production-v1`: https://v1-teleobra24h.vercel.app
- `production-v2`: https://v2-teleobra24h.vercel.app
- `production-v3`: https://v3-teleobra24h.vercel.app

**Benefits:**
- Deployment history per version
- Environment-specific secrets
- Deployment protection rules (optional)
- Deployment logs and status

## Customization

### Adding Pre-deployment Checks

Edit `.github/workflows/deploy.yml`:

```yaml
- name: Run tests
  run: npm run test

- name: Check TypeScript
  run: npm run type-check

- name: Security audit
  run: npm audit --production
```

### Adding Post-deployment Actions

```yaml
- name: Notify Slack
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}

- name: Update status page
  run: |
    curl -X POST https://status.teleobra24h.com/api/update \
      -H "Authorization: Bearer ${{ secrets.STATUS_TOKEN }}"
```

### Deployment Conditions

Only deploy specific versions:

```yaml
deploy-v1:
  if: github.event_name == 'push' && contains(github.event.head_commit.message, '[v1]')
```

## Troubleshooting

### Workflow Not Running

**Check:**
- GitHub Actions is enabled in repository settings
- Workflow file is in `.github/workflows/` directory
- YAML syntax is valid (use a YAML validator)
- Branch name matches trigger (`main`)

### Deployment Failing

**Check:**
- All required secrets are configured
- Secret values are correct (no spaces)
- Vercel token has deployment permissions
- Project IDs match Vercel dashboard
- Build passes locally (`npm run build`)

### Secrets Not Found

**Check:**
- Secret names match exactly (case-sensitive)
- Secrets are available to workflows
- Organization/repository settings allow secret access

## Security

### Best Practices

1. **Use minimal permissions:**
   - Tokens should only have deployment scope
   - Avoid personal tokens with full access

2. **Rotate credentials regularly:**
   - Update tokens every 6-12 months
   - Revoke old tokens after rotation

3. **Monitor activity:**
   - Review workflow logs regularly
   - Check Vercel audit logs
   - Watch for unauthorized deployments

4. **Protect secrets:**
   - Never log secret values
   - Never expose in PR comments
   - Use masked values in logs

### Token Permissions

Required Vercel token scopes:
- Deployments: Read & Write
- Projects: Read
- Environment Variables: Read

## Support

For issues or questions:

1. Check [DEPLOYMENT.md](../DEPLOYMENT.md) for general deployment help
2. Review workflow logs in Actions tab
3. Check Vercel deployment logs
4. Consult GitHub Actions documentation: https://docs.github.com/en/actions
5. Consult Vercel documentation: https://vercel.com/docs

## Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [Vercel GitHub Integration](https://vercel.com/docs/git/vercel-for-github)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Turborepo CI/CD](https://turbo.build/repo/docs/ci)
