# GitHub Pages Deployment Troubleshooting Guide

## Current Issue: README showing instead of app

This means the GitHub Actions workflow needs to be triggered or completed successfully.

## Step-by-Step Fix:

### 1. Check GitHub Actions Status
1. Go to your repository: `https://github.com/hmzaa-malik/Ciya-Paw-Health`
2. Click on the **Actions** tab
3. Look for the "Deploy to GitHub Pages" workflow
4. Check if it has run and completed successfully (green checkmark)

### 2. Enable GitHub Pages (if not already done)
1. Go to **Settings** > **Pages**
2. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
3. Save the settings

### 3. Manually Trigger the Workflow
1. Go to **Actions** tab
2. Click on **Deploy to GitHub Pages** workflow (left sidebar)
3. Click **Run workflow** button (top right)
4. Select **main** branch
5. Click **Run workflow**

### 4. Wait for Deployment
- The workflow takes 2-5 minutes to complete
- You'll see a build job and a deploy job
- Both must complete successfully (green checkmarks)

### 5. Access Your Site
Once the workflow completes, your site will be live at:
```
https://hmzaa-malik.github.io/Ciya-Paw-Health/
```

## Common Issues and Solutions

### Issue: Build Fails with "npm ci" error
**Solution:** 
- The workflow will automatically install all dependencies
- If it fails, check that package.json is committed to the repository

### Issue: "404 - Page not found"
**Solution:**
- Make sure GitHub Pages source is set to "GitHub Actions"
- Verify the basePath in next.config.mjs matches your repository name
- Current basePath: `/Ciya-Paw-Health` ✓

### Issue: Workflow doesn't appear
**Solution:**
- Ensure `.github/workflows/deploy.yml` exists in your repository
- The file must be in the main branch
- Push the workflow file if missing

### Issue: Permission Denied
**Solution:**
1. Go to **Settings** > **Actions** > **General**
2. Scroll to **Workflow permissions**
3. Select **Read and write permissions**
4. Check **Allow GitHub Actions to create and approve pull requests**
5. Click **Save**

## Verification Checklist

- [ ] next.config.mjs has `output: 'export'`
- [ ] next.config.mjs has `basePath: '/Ciya-Paw-Health'`
- [ ] GitHub Pages source is set to "GitHub Actions"
- [ ] Workflow file exists at `.github/workflows/deploy.yml`
- [ ] GitHub Actions has write permissions
- [ ] Workflow has been triggered and completed successfully

## Quick Test

After the workflow completes, test these URLs:
- Main app: `https://hmzaa-malik.github.io/Ciya-Paw-Health/`
- Should show the Paw Health app with splash screen and animations

## Need More Help?

If the issue persists:
1. Check the Actions tab for error messages
2. Look at the build logs in the failed workflow
3. Ensure all files are committed and pushed to main branch
4. Try pushing a small change to trigger the workflow automatically

## Alternative: Deploy to Vercel (Recommended for Beginners)

If GitHub Pages is too complex, use Vercel instead:
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Import your `Ciya-Paw-Health` repository
4. Click Deploy
5. Done! Your site will be live in 2 minutes

Vercel URL will be: `https://ciya-paw-health.vercel.app`
