#!/bin/bash

# TeleObra24h Deployment Setup Verification Script
# This script checks if all deployment files are properly configured

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Counters
TOTAL_CHECKS=0
PASSED_CHECKS=0
FAILED_CHECKS=0

# Helper functions
print_header() {
    echo ""
    echo -e "${BLUE}========================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}========================================${NC}"
    echo ""
}

print_check() {
    TOTAL_CHECKS=$((TOTAL_CHECKS + 1))
    echo -n "Checking: $1... "
}

print_success() {
    PASSED_CHECKS=$((PASSED_CHECKS + 1))
    echo -e "${GREEN}✓ PASS${NC}"
}

print_failure() {
    FAILED_CHECKS=$((FAILED_CHECKS + 1))
    echo -e "${RED}✗ FAIL${NC}"
    if [ ! -z "$1" ]; then
        echo -e "${RED}  → $1${NC}"
    fi
}

print_warning() {
    echo -e "${YELLOW}⚠ WARNING: $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ INFO: $1${NC}"
}

# Start verification
print_header "TeleObra24h Deployment Setup Verification"

# Check if we're in the project root
if [ ! -f "package.json" ] || [ ! -d "apps" ]; then
    echo -e "${RED}Error: Must run from project root directory${NC}"
    exit 1
fi

# 1. Check project structure
print_header "1. Project Structure"

print_check "apps/v1 directory exists"
if [ -d "apps/v1" ]; then
    print_success
else
    print_failure "apps/v1 directory not found"
fi

print_check "apps/v2 directory exists"
if [ -d "apps/v2" ]; then
    print_success
else
    print_failure "apps/v2 directory not found"
fi

print_check "apps/v3 directory exists"
if [ -d "apps/v3" ]; then
    print_success
else
    print_failure "apps/v3 directory not found"
fi

# 2. Check robots.txt files
print_header "2. SEO - Robots.txt Files"

for version in v1 v2 v3; do
    print_check "apps/${version}/public/robots.txt exists"
    if [ -f "apps/${version}/public/robots.txt" ]; then
        print_success

        # Check content
        if grep -q "Sitemap:" "apps/${version}/public/robots.txt"; then
            print_info "Sitemap URL found in robots.txt"
        else
            print_warning "Sitemap URL not found in robots.txt"
        fi
    else
        print_failure "File not found"
    fi
done

# 3. Check sitemap.ts files
print_header "3. SEO - Sitemap Generators"

for version in v1 v2 v3; do
    print_check "apps/${version}/app/sitemap.ts exists"
    if [ -f "apps/${version}/app/sitemap.ts" ]; then
        print_success

        # Check content
        if grep -q "MetadataRoute" "apps/${version}/app/sitemap.ts"; then
            print_info "Valid Next.js sitemap format detected"
        else
            print_warning "May not be using correct Next.js sitemap format"
        fi
    else
        print_failure "File not found"
    fi
done

# 4. Check vercel.json files
print_header "4. Vercel Configuration"

for version in v1 v2 v3; do
    print_check "apps/${version}/vercel.json exists"
    if [ -f "apps/${version}/vercel.json" ]; then
        print_success

        # Validate JSON
        if python3 -m json.tool "apps/${version}/vercel.json" > /dev/null 2>&1; then
            print_info "Valid JSON syntax"
        else
            print_warning "Invalid JSON syntax"
        fi

        # Check for required fields
        if grep -q "buildCommand" "apps/${version}/vercel.json"; then
            print_info "Build command configured"
        else
            print_warning "Build command not found"
        fi
    else
        print_failure "File not found"
    fi
done

# 5. Check environment files
print_header "5. Environment Configuration"

for version in v1 v2 v3; do
    print_check "apps/${version}/.env.example exists"
    if [ -f "apps/${version}/.env.example" ]; then
        print_success
    else
        print_failure "File not found"
    fi

    print_check "apps/${version}/.env.local exists"
    if [ -f "apps/${version}/.env.local" ]; then
        print_success

        # Check if it's in gitignore
        if grep -q ".env*.local" "apps/${version}/.gitignore" 2>/dev/null || grep -q ".env.local" "apps/${version}/.gitignore" 2>/dev/null; then
            print_info ".env.local is gitignored"
        else
            print_warning ".env.local should be in .gitignore"
        fi
    else
        print_failure "File not found - copy from .env.example"
    fi
done

# 6. Check GitHub Actions workflow
print_header "6. GitHub Actions Workflow"

print_check ".github/workflows/deploy.yml exists"
if [ -f ".github/workflows/deploy.yml" ]; then
    print_success

    # Check for required jobs
    if grep -q "deploy-v1:" ".github/workflows/deploy.yml"; then
        print_info "V1 deployment job found"
    else
        print_warning "V1 deployment job not found"
    fi

    if grep -q "deploy-v2:" ".github/workflows/deploy.yml"; then
        print_info "V2 deployment job found"
    else
        print_warning "V2 deployment job not found"
    fi

    if grep -q "deploy-v3:" ".github/workflows/deploy.yml"; then
        print_info "V3 deployment job found"
    else
        print_warning "V3 deployment job not found"
    fi

    # Check for required secrets
    if grep -q "VERCEL_TOKEN" ".github/workflows/deploy.yml"; then
        print_info "VERCEL_TOKEN secret referenced"
    fi

    if grep -q "VERCEL_ORG_ID" ".github/workflows/deploy.yml"; then
        print_info "VERCEL_ORG_ID secret referenced"
    fi

    if grep -q "VERCEL_PROJECT_V1_ID" ".github/workflows/deploy.yml"; then
        print_info "VERCEL_PROJECT_V1_ID secret referenced"
    fi
else
    print_failure "File not found"
fi

# 7. Check documentation
print_header "7. Documentation"

print_check "DEPLOYMENT.md exists"
if [ -f "DEPLOYMENT.md" ]; then
    print_success
else
    print_failure "File not found"
fi

print_check ".github/SECRETS_SETUP.md exists"
if [ -f ".github/SECRETS_SETUP.md" ]; then
    print_success
else
    print_failure "File not found"
fi

# 8. Check package.json scripts
print_header "8. NPM Scripts"

print_check "build:v1 script exists"
if grep -q '"build:v1"' "package.json"; then
    print_success
else
    print_failure "Script not found in package.json"
fi

print_check "build:v2 script exists"
if grep -q '"build:v2"' "package.json"; then
    print_success
else
    print_failure "Script not found in package.json"
fi

print_check "build:v3 script exists"
if grep -q '"build:v3"' "package.json"; then
    print_success
else
    print_failure "Script not found in package.json"
fi

# 9. Check dependencies
print_header "9. Dependencies"

print_check "node_modules exists"
if [ -d "node_modules" ]; then
    print_success
else
    print_failure "Run 'npm install' first"
fi

print_check "turbo is installed"
if [ -d "node_modules/turbo" ] || command -v turbo &> /dev/null; then
    print_success
else
    print_failure "Turbo not found - required for monorepo"
fi

# 10. Test builds (optional - can be slow)
print_header "10. Build Tests (Optional)"

read -p "Do you want to test builds? This may take a few minutes. (y/N) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    print_check "Building V1"
    if npm run build:v1 > /dev/null 2>&1; then
        print_success
    else
        print_failure "Build failed - check for errors"
    fi

    print_check "Building V2"
    if npm run build:v2 > /dev/null 2>&1; then
        print_success
    else
        print_failure "Build failed - check for errors"
    fi

    print_check "Building V3"
    if npm run build:v3 > /dev/null 2>&1; then
        print_success
    else
        print_failure "Build failed - check for errors"
    fi
else
    print_info "Skipping build tests"
fi

# Summary
print_header "Verification Summary"

echo -e "Total Checks: ${BLUE}${TOTAL_CHECKS}${NC}"
echo -e "Passed: ${GREEN}${PASSED_CHECKS}${NC}"
echo -e "Failed: ${RED}${FAILED_CHECKS}${NC}"
echo ""

if [ $FAILED_CHECKS -eq 0 ]; then
    echo -e "${GREEN}✓ All checks passed! Deployment setup is complete.${NC}"
    echo ""
    echo -e "${BLUE}Next steps:${NC}"
    echo "1. Set up GitHub secrets (see .github/SECRETS_SETUP.md)"
    echo "2. Create Vercel projects for V1, V2, V3"
    echo "3. Push to main branch to trigger deployment"
    echo "4. Monitor deployment in GitHub Actions"
    echo ""
    exit 0
else
    echo -e "${RED}✗ Some checks failed. Please fix the issues above.${NC}"
    echo ""
    echo -e "${BLUE}Common fixes:${NC}"
    echo "- Run 'npm install' if dependencies are missing"
    echo "- Copy .env.example to .env.local for each app"
    echo "- Check file paths match project structure"
    echo "- Review DEPLOYMENT.md for detailed setup"
    echo ""
    exit 1
fi
