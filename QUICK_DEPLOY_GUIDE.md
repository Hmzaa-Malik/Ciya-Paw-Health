# Quick GitHub Pages Deployment Guide

## Your Repository
- **Repo Name:** Ciya-Paw-Health
- **GitHub URL:** https://github.com/hmzaa-malik/Ciya-Paw-Health
- **Live Site URL:** https://hmzaa-malik.github.io/Ciya-Paw-Health/

## 5-Minute Deployment Steps

### Step 1: Enable GitHub Pages
1. Go to repository **Settings**
2. Click **Pages** in left sidebar
3. Under **Source**, select **GitHub Actions**
4. Click **Save**

### Step 2: Set Workflow Permissions
1. Go to **Settings** > **Actions** > **General**
2. Scroll to **Workflow permissions**
3. Select **Read and write permissions**
4. Check **Allow GitHub Actions to create and approve pull requests**
5. Click **Save**

### Step 3: Run the Deployment
1. Go to **Actions** tab
2. Click **Deploy to GitHub Pages** (left sidebar)
3. Click **Run workflow** button (green button, top right)
4. Keep branch as **main**
5. Click **Run workflow**

### Step 4: Wait for Completion
- Build job: ~2 minutes
- Deploy job: ~1 minute
- Look for green checkmarks ✓

### Step 5: View Your Live Site
Open: https://hmzaa-malik.github.io/Ciya-Paw-Health/

## Automatic Deployments

After the first manual run, every time you push to the main branch, the site will automatically rebuild and redeploy!

## Troubleshooting

**If README shows instead of app:**
- The workflow hasn't completed yet
- Check Actions tab for status
- Re-run the workflow if it failed

**If you see 404:**
- Verify GitHub Pages source is "GitHub Actions" (not branch)
- Wait 2-3 minutes after workflow completes
- Clear browser cache and reload

## Need Help?
See TROUBLESHOOTING.md for detailed solutions.
