# Deployment Guide

Complete step-by-step instructions for deploying the Advanced Calculator to various platforms.

---

## 🚀 Quick Start

### Option 1: Vercel (Recommended - Fastest)

**Prerequisites**: GitHub account, Vercel account

**Steps**:
1. Push code to GitHub
   ```bash
   git add .
   git commit -m "feat: v3.0 release"
   git push origin main
   ```

2. Go to [Vercel Dashboard](https://vercel.com/dashboard)

3. Click "Add New Project"

4. Select your GitHub repository

5. **Framework Preset**: Select "Other" (for static)

6. Click "Deploy"

**That's it!** Your calculator is now live. Vercel will auto-redeploy on every push.

---

### Option 2: Netlify

**Prerequisites**: GitHub account, Netlify account

**Steps**:
1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click "New site from Git"
3. Select GitHub repository
4. **Build directory**: leave empty (default)
5. **Build command**: leave empty (default)
6. Click "Deploy site"

**Deploy Settings** (auto-detected):
- Framework: Static
- Publish directory: root

---

### Option 3: GitHub Pages

**Steps**:
1. Ensure repository is public
2. Go to **Settings** → **Pages**
3. Under "Source", select **main branch**
4. Click Save
5. Wait 2-3 minutes for deployment

**Your site**: `https://yourusername.github.io/calculator-history`

---

### Option 4: Traditional Hosting (cPanel, Plesk, etc.)

**Steps**:
1. Download all files as ZIP
2. Extract to your hosting account's public folder
3. Ensure `index.html` is in the root directory
4. Set proper file permissions (644 for files, 755 for directories)
5. Access via your domain

---

## 🔧 Pre-Deployment Checklist

- [ ] All files present in root directory:
  - `index.html`
  - `script_v2.js`
  - `style_v2.css`
  - `package.json`
  - `vercel.json`
  
- [ ] `script_v2.js` is referenced in `index.html`
- [ ] `style_v2.css` is referenced in `index.html`
- [ ] No console errors in Dev Tools (F12)
- [ ] Calculator works locally: `npm start`
- [ ] All keyboard shortcuts tested
- [ ] History functionality working
- [ ] Theme toggle working

---

## 📋 Deployment Verification

After deploying, verify:

### 1. Page Loads
- [ ] No 404 errors
- [ ] No missing file errors in console

### 2. Functionality
- [ ] Basic math: `1 + 1 = 2`
- [ ] Decimals: `1.2 + 2.3 = 3.5`
- [ ] Scientific: `sqrt{16} = 4`
- [ ] Brackets: `[(1+2)*3] = 9`
- [ ] Keyboard: Numbers and operators work
- [ ] Clear button works
- [ ] Theme toggles

### 3. Performance
- [ ] Page loads in <500ms
- [ ] Calculations execute instantly
- [ ] No memory leaks in console

### 4. Storage
- [ ] History persists after page reload
- [ ] Theme preference persists
- [ ] LocalStorage works properly

---

## 🐛 Troubleshooting

### "Cannot find script_v2.js"
- **Cause**: File not uploaded or named incorrectly
- **Fix**: Ensure `script_v2.js` is in root directory

### "Styling looks broken"
- **Cause**: Tailwind CDN or style_v2.css not loading
- **Fix**: Check internet connection, verify Tailwind CDN in `<head>`

### "Calculator shows Error on every calculation"
- **Cause**: JavaScript error in browser
- **Fix**: 
  1. Open Dev Tools (F12)
  2. Check Console tab
  3. Look for red error messages
  4. Report the error message

### "History not saving"
- **Cause**: LocalStorage disabled or private browsing
- **Fix**: 
  1. Disable private/incognito mode
  2. Check browser privacy settings
  3. Verify LocalStorage is enabled

### "Blank page on Vercel"
- **Cause**: Configuration issue
- **Fix**:
  1. Verify `vercel.json` exists in root
  2. Check `index.html` links to correct script
  3. Vercel dashboard → Deployment logs for details

---

## 🔐 Security in Production

### Headers (via vercel.json)
✅ Configured:
- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- Cache-Control with proper expiration

### CSP (Content Security Policy)
Current approach is safe:
- No inline scripts (only external)
- No dangerous `eval()` (uses `Function()`)
- No external API calls

### HTTPS
✅ Automatic on Vercel, Netlify, GitHub Pages

---

## 📦 Environment Variables

This is a static site, so no sensitive environment variables needed.

If you add backend features later, use `.env` file:

```bash
# .env (do not commit)
VITE_API_URL=https://api.example.com
VITE_API_KEY=your-key-here
```

---

## 🔄 CI/CD Support

### With GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Vercel
        run: npx vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
```

---

## 📊 Monitoring & Analytics

### Add Analytics (Optional)

Add to `index.html` before `</head>`:

```html
<!-- Google Analytics (optional) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🚢 Production Rollback

If issues occur post-deployment:

### Vercel
1. Dashboard → Deployments
2. Find previous working deployment
3. Click three dots → "Promote to Production"

### GitHub Pages
1. Go to repository settings
2. Pages section → Choose earlier commit
3. Wait for redeployment

---

## 📈 Performance Optimization (Optional)

### CDN Configuration (Vercel auto-handles)
- JS/CSS served from global CDN
- Automatic compression
- Cache optimization

### Additional Optimizations
- Currently ~15 KB total JavaScript
- CSS is lightweight (Tailwind)
- No dependencies to load

---

## 🎯 Custom Domain Setup

### Vercel
1. Dashboard → Project → Settings → Domains
2. Enter your domain
3. Update DNS records (instructions provided)
4. Automatic SSL certificate

### GitHub Pages
1. Settings → Pages → Custom domain
2. Enter domain name
3. Update DNS A records to GitHub IP
4. Auto-generated SSL (wait 5-10 min)

---

## 📞 Support During Deployment

- **Vercel Support**: vercel.com/support
- **Netlify Support**: netlify.com/support
- **GitHub Pages Issues**: GitHub community forums

---

## ✅ Final Verification Checklist

- [ ] Site is live and accessible
- [ ] Mobile responsive works
- [ ] All operations function correctly
- [ ] History persists
- [ ] Theme saves preference
- [ ] Performance is acceptable
- [ ] No console errors
- [ ] Keyboard shortcuts work
- [ ] Analytics showing traffic (if enabled)

---

**Deployment Complete! 🎉**

Your Advanced Calculator is now live and ready to use!
