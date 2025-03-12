# GitHub Actions CI/CD Setup

## Overview:
This project automates testing and deployment using GitHub Actions and Render.

## Features:
- Automated Cypress testing
- Deployment triggered by merging into `main`
- Uses `develop`, `staging`, and `main` branches

## Directory Structure:
.github/workflows/   - GitHub Actions configuration
Develop/             - Application source code
  ├── client/        - Frontend app
  ├── server/        - Backend API

## Setup Instructions:
### 1. Clone the repository:
   git clone https://github.com/validai/GitHub-Actions-CI-CD-Setup.git
   cd GitHub-Actions-CI-CD-Setup

### 2. Install dependencies:
   cd Develop
   npm install

### 3. Running tests:
   npm run test
   npm run test-component

### 4. Branching workflow:
   - Develop features on `develop`
   - Merge into `staging` for testing
   - Merge `staging` into `main` to trigger deployment

### 5. Deployment:
   - Merge into `main` triggers automatic deployment
   - Manually deploy with:
     curl -X POST "https://api.render.com/v1/services/$RENDER_SERVICE_ID/deploys" \
          -H "Authorization: Bearer $RENDER_API_KEY" \
          -H "Content-Type: application/json" \
          -d '{}'


## Environment Variables:
- `RENDER_SERVICE_ID` - Found in Render settings
- `RENDER_API_KEY` - Found in Render API settings

