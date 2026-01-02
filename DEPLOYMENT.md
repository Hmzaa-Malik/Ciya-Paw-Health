# Deployment Guide for Paw Health App

This guide covers multiple deployment options for the Paw Health application.

## Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel is the recommended platform as it's made by the creators of Next.js.

### Steps:

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Paw Health App"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/paw-health.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Your app will be live in 2-3 minutes!

3. **Custom Domain (Optional):**
   - Go to your project settings in Vercel
   - Click "Domains"
   - Add your custom domain

**That's it! Your app is now live with automatic deployments on every push.**

---

## Option 2: Deploy to GitHub Pages

GitHub Pages is free but requires static export configuration.

### Steps:

1. **Update `next.config.mjs`:**
   Uncomment these lines in your `next.config.mjs`:
   ```javascript
   output: 'export',
   basePath: '/paw-health', // Replace with your repo name
   ```

2. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/paw-health.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages"
   - Source: "GitHub Actions"
   - The workflow in `.github/workflows/deploy.yml` will automatically deploy

4. **Access your site:**
   - Visit: `https://YOUR_USERNAME.github.io/paw-health/`

---

## Option 3: Deploy to Netlify

### Steps:

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy"

3. **Your site will be live!**

---

## Quick Deployment from v0

The easiest way to deploy:

1. **Click "Publish" button** in the top right of v0
2. This will:
   - Create a GitHub repository automatically
   - Deploy to Vercel instantly
   - Set up automatic deployments

---

## Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All 5 tabs are working (Home, Pet Health, Services, Wallet, Profile)
- [ ] Images are displaying
- [ ] Animations are smooth
- [ ] Mobile responsive design works
- [ ] Navigation between tabs is seamless

---

## Troubleshooting

### Images not loading on GitHub Pages:
- Make sure `images: { unoptimized: true }` is in next.config.mjs
- Check that `basePath` matches your repository name

### Build fails:
- Run `npm run build` locally first to catch errors
- Check Node.js version (should be 18+)

### Styles not applying:
- Clear browser cache
- Check that globals.css is imported in layout.tsx

---

## Support

For deployment issues:
- Vercel: [vercel.com/support](https://vercel.com/support)
- GitHub Pages: [GitHub Docs](https://docs.github.com/pages)
- Netlify: [netlify.com/support](https://netlify.com/support)

For code issues, open an issue in the GitHub repository.
