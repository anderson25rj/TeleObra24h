#!/bin/bash

# Deploy script for TeleObra24h to Vercel via API

TOKEN="KpJeD2ki04MGMxG3NKoTU8PB"
REPO_URL="https://github.com/anderson25rj/TeleObra24h"
TEAM_ID="team_RIk1CaAYz02OcELSGgMIVamW"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  TeleObra24h - Vercel Deployment${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Function to trigger redeploy for existing project
redeploy_project() {
    local project_id=$1
    local project_name=$2
    
    echo -e "${BLUE}Redeploying ${project_name}...${NC}"
    
    # Create a new deployment by triggering git hook
    response=$(curl -s -X POST \
        "https://api.vercel.com/v13/deployments" \
        -H "Authorization: Bearer ${TOKEN}" \
        -H "Content-Type: application/json" \
        -d '{
            "name": "'${project_name}'",
            "gitSource": {
                "type": "github",
                "repoId": 1065496931,
                "ref": "main"
            },
            "projectSettings": {
                "framework": "nextjs"
            }
        }')
    
    deployment_url=$(echo $response | grep -o '"url":"[^"]*"' | head -1 | cut -d'"' -f4)
    
    if [ -n "$deployment_url" ]; then
        echo -e "${GREEN}✓ Deployment initiated: https://${deployment_url}${NC}"
        echo $response | python3 -m json.tool 2>/dev/null || echo $response
    else
        echo -e "${RED}✗ Failed to deploy${NC}"
        echo $response
    fi
    echo ""
}

# Redeploy V1
echo -e "${BLUE}1/3: Deploying V1 (Confiança Profissional)${NC}"
redeploy_project "prj_R8ZX5pYK36Gy9jnnnUFwhX7JFk5I" "teleobra24h-v1"

echo -e "${BLUE}========================================${NC}"
echo -e "${GREEN}Deployment process completed!${NC}"
echo ""
echo "Check your Vercel dashboard for deployment status:"
echo "https://vercel.com/anderson25-7334s-projects"
