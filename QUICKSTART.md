# Quick Start Guide

Get the Advanced Calculator running in minutes!

---

## ⚡ 5-Minute Setup

### Option A: Local Development with NPM

```bash
# 1. Clone or download the repository
git clone https://github.com/yourusername/calculator-history.git
cd calculator-history

# 2. Install dependencies
npm install

# 3. Start local server
npm start

# 4. Open browser
# Visit http://localhost:3000
```

### Option B: Local Development with Docker

```bash
# 1. Clone repository
git clone https://github.com/yourusername/calculator-history.git
cd calculator-history

# 2. Start with Docker Compose
docker-compose up

# 3. Open browser
# Visit http://localhost:3000
```

### Option C: Just Open the File

```bash
# Simply open index.html in your browser
# Works offline (no internet required after load)
```

---

## 🎯 First Test

Once running, try these:

1. **Basic Math**: Enter `5 + 3` → Press `=` → Should show `8`
2. **Decimals**: Enter `1.5 + 2.5` → Press `=` → Should show `4`
3. **Scientific**: Enter `sqrt{16}` → Press `=` → Should show `4`
4. **Keyboard**: Press `5`, then `+`, then `3`, then `Enter`
5. **History**: Check the History panel on the right

---

## 📂 Project Files

| File | Purpose |
|------|---------|
| `index.html` | Main HTML page |
| `script_v2.js` | Calculator logic |
| `style_v2.css` | Styling (Tailwind) |
| `package.json` | NPM configuration |
| `vercel.json` | Vercel deployment |
| `Dockerfile` | Docker container |
| `docker-compose.yml` | Local Docker setup |

---

## 🚀 Deploy to Vercel (1 Click)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Select repository
4. Click "Deploy"
5. **Done!** Your calculator is live

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

---

## 🔑 Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `0-9` | Numbers |
| `+`, `-`, `*`, `/` | Operators |
| `.` | Decimal |
| `Enter` | Calculate |
| `Backspace` | Delete |
| `C` or `Escape` | Clear |
| `Ctrl+T` | Toggle theme |
| `Ctrl+M` | Scientific mode |

---

## 🧮 Expression Examples

```
1.2 + 2.3 + 4.5              → 8.0
10.5 * 2.2 - 3.1             → 19.1
sqrt{16} + abs{-5}           → 9
[1.2 + (2.3 * {3})]          → 8.2
log{100} + ln{e}             → 3
sin{90} + cos{0}             → 2
5!                           → 120
pow{2,3}                     → 8
```

---

## 🐛 Troubleshooting

### "Cannot find module serve"
```bash
npm install
npm start
```

### "Port 3000 already in use"
```bash
# Kill process on port 3000 (macOS/Linux)
lsof -ti:3000 | xargs kill -9

# Or use different port
npx serve . --listen 4000
```

### "Styling looks broken"
- Clear browser cache: `Ctrl+Shift+Delete`
- Try different browser
- Check internet connection (Tailwind CDN)

### "Calculator not responding"
- Open Dev Tools: `F12`
- Check Console for errors
- Reload page: `Ctrl+R`

---

## 📚 Full Documentation

- **[README.md](README.md)** - Complete features & usage guide
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deploy to production
- **[CHANGELOG.md](CHANGELOG.md)** - Version history
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Contributing guidelines

---

## 💡 Next Steps

1. ✅ Get it running locally
2. 📖 Read [README.md](README.md)
3. 🚀 Deploy to Vercel
4. 🤝 Contribute improvements
5. ⭐ Star on GitHub

---

## 🆘 Need Help?

- Check [DEPLOYMENT.md](DEPLOYMENT.md) for platform-specific help
- Open an [Issue](../../issues) if stuck
- Check [Discussions](../../discussions) for community Q&A

---

**Enjoy your calculator!** 🎉

---

*Last Updated: 2026-04-02*
