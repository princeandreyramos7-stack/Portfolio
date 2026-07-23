# Vercel Deployment Fix Guide

## 🔴 Current Issue

Vercel is trying to deploy from the `gh-pages` branch instead of `main` branch. The `gh-pages` branch only contains built files, not source code.

**Error:** `react-scripts: command not found`
**Cause:** No source code or package.json in gh-pages branch

## ✅ Solution

### Option 1: Fix Vercel Configuration (Recommended)

#### Step 1: Update Vercel Settings

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Find your "Portfolio" project
3. Click on **Settings**
4. Go to **Git** section
5. Under **Production Branch**, change from `gh-pages` to `main`
6. Click **Save**

#### Step 2: Redeploy

1. Go to **Deployments** tab
2. Click the **•••** menu on the latest deployment
3. Click **Redeploy**
4. Or push a new commit to trigger auto-deployment

### Option 2: Deploy from Scratch

If the above doesn't work, redeploy your project:

1. **Delete the current Vercel project:**
   - Go to Vercel Dashboard
   - Select your Portfolio project
   - Settings → Advanced → Delete Project

2. **Reconnect and deploy:**
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Select your GitHub repository
   - Vercel will auto-detect it's a Create React App
   - Click **Deploy**

## 📋 Vercel Configuration Checklist

Make sure these settings are correct in Vercel:

### Framework Preset
- ✅ Framework: **Create React App**
- ✅ Build Command: `npm run build` (or auto-detect)
- ✅ Output Directory: `build`
- ✅ Install Command: `npm install`

### Git Settings
- ✅ Production Branch: `main` (NOT gh-pages)
- ✅ Repository: `princeandreyramos7-stack/Portfolio`

### Root Directory
- ✅ Root Directory: `./` (leave empty or set to root)

## 🚀 Deployment Methods

### Method 1: Auto-Deploy (Recommended)

Every time you push to main, Vercel auto-deploys:

```bash
# Make changes
git add .
git commit -m "Update portfolio"
git push origin main

# Vercel automatically builds and deploys!
```

### Method 2: Vercel CLI Deploy

Install Vercel CLI and deploy manually:

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Method 3: GitHub Pages (Alternative)

If you prefer GitHub Pages instead of Vercel:

```bash
# Deploy to GitHub Pages
npm run deploy

# Your site will be at:
# https://princeandreyramos7-stack.github.io/Portfolio
```

## 🔧 Vercel.json Configuration

I've created a `vercel.json` file for you with proper configuration:

```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "framework": "create-react-app",
  "routes": [
    {
      "src": "/static/(.*)",
      "dest": "/static/$1"
    },
    {
      "src": "/.*",
      "dest": "/index.html"
    }
  ]
}
```

This ensures:
- ✅ Correct build command
- ✅ Correct output directory
- ✅ SPA routing works (no 404 on refresh)
- ✅ Static assets load properly

## 🐛 Common Vercel Issues & Solutions

### Issue 1: "react-scripts: command not found"

**Cause:** Building from wrong branch (gh-pages) or missing dependencies

**Solution:**
1. Change Production Branch to `main` in Vercel settings
2. Ensure `package.json` includes `react-scripts` in dependencies
3. Redeploy

### Issue 2: 404 on page refresh

**Cause:** SPA routing not configured

**Solution:** The `vercel.json` file I created fixes this by routing all requests to `index.html`

### Issue 3: Images not loading

**Cause:** Incorrect image paths

**Solution:** Use `process.env.PUBLIC_URL`:
```javascript
// Good ✅
`${process.env.PUBLIC_URL}/images/pic.jpg`

// Also works ✅
`/images/pic.jpg` (if in public folder)
```

### Issue 4: Environment variables not working

**Solution:**
1. Go to Vercel Project Settings
2. Navigate to **Environment Variables**
3. Add your variables (prefix with `REACT_APP_`)
4. Redeploy

### Issue 5: Build fails with memory error

**Solution:**
1. Go to Project Settings
2. Navigate to **General**
3. Increase Node.js version (use 18.x or 20.x)
4. Redeploy

## 📊 After Deployment

### Your Live URLs

**Vercel (Primary):**
- Production: `https://your-project.vercel.app`
- Custom domain: Configure in Vercel settings

**GitHub Pages (Alternative):**
- https://princeandreyramos7-stack.github.io/Portfolio

### Verify Deployment

1. ✅ Visit your Vercel URL
2. ✅ Test all pages
3. ✅ Check mobile responsiveness
4. ✅ Verify images load
5. ✅ Test dark mode toggle
6. ✅ Check navigation

## 🎯 Quick Fix Steps (TL;DR)

```bash
# 1. In Vercel Dashboard:
#    Settings → Git → Production Branch: main (not gh-pages)

# 2. In Vercel Dashboard:
#    Deployments → Redeploy

# 3. Or push a new commit:
git add .
git commit -m "Fix deployment"
git push origin main

# Done! ✅
```

## 🔄 Which Deployment Should You Use?

### Use Vercel if you want:
- ✅ Automatic deployments on git push
- ✅ Preview deployments for branches
- ✅ Better performance (global CDN)
- ✅ Custom domains easily
- ✅ Analytics built-in
- ✅ Serverless functions (future)

### Use GitHub Pages if you want:
- ✅ Simpler setup
- ✅ No account needed (just GitHub)
- ✅ Manual deployments
- ✅ Free forever guarantee

**My Recommendation:** Use Vercel for better features and performance.

## 📝 Deployment Comparison

| Feature | Vercel | GitHub Pages |
|---------|--------|--------------|
| Auto-deploy on push | ✅ Yes | ❌ No (manual) |
| Custom domain | ✅ Easy | ⚠️ Requires DNS setup |
| SSL Certificate | ✅ Auto | ✅ Auto |
| Build time | ⚡ Fast | ⚡ Fast |
| Preview deployments | ✅ Yes | ❌ No |
| Analytics | ✅ Built-in | ❌ Need Google Analytics |
| Deploy command | Auto | `npm run deploy` |

## 🆘 Still Having Issues?

### Check Build Logs
1. Go to Vercel Dashboard
2. Click on the failed deployment
3. Read the build logs
4. Look for specific error messages

### Common Error Messages

**"Module not found"**
```bash
# Solution: Install missing dependency
npm install <package-name>
git add .
git commit -m "Add missing dependency"
git push origin main
```

**"Failed to compile"**
```bash
# Solution: Check for syntax errors locally
npm start
# Fix errors, then deploy
```

**"ENOENT: no such file or directory"**
```bash
# Solution: Check file paths are correct
# Ensure all referenced files exist
```

## 📞 Support

- **Vercel Documentation:** https://vercel.com/docs
- **Vercel Support:** https://vercel.com/support
- **Community:** https://github.com/vercel/vercel/discussions

## ✨ Next Steps

1. ✅ Fix Vercel branch setting (main, not gh-pages)
2. ✅ Redeploy
3. ✅ Test your live site
4. ✅ Share your portfolio link!

---

**Quick Action:** Go to Vercel Settings → Git → Change "Production Branch" from `gh-pages` to `main` → Redeploy 🚀
