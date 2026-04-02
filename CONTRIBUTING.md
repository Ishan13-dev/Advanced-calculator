# Contributing Guide

Thank you for your interest in contributing to the Advanced Calculator! We welcome contributions from the community.

---

## 🤝 Ways to Contribute

- **Report Bugs** - Find and report issues
- **Feature Requests** - Suggest new features
- **Code Improvements** - Submit PRs with enhancements
- **Documentation** - Improve README, guides, examples
- **Testing** - Help test on different devices/browsers
- **Translations** - Contribute language support

---

## 🐛 Reporting Bugs

### Before Reporting
1. Check [existing issues](../../issues) to avoid duplicates
2. Test with latest version
3. Collect error messages from console (F12)

### Creating a Bug Report
1. Go to [Issues](../../issues) → New Issue
2. Title: Clear, descriptive summary
3. Description: Include:
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Browser/OS info
   - Screenshots if applicable
   - Console error messages

**Example**:
```
Title: Decimal calculation fails with multiple operations

Reproduction:
1. Enter: 1.2 + 2.3 + 4.5
2. Press =
3. Expected: 8.0, Got: NaN

Browser: Chrome 120, macOS
Console Error: [specific error message]
```

---

## 💡 Feature Requests

1. Check existing [Issues](../../issues) and [Discussions](../../discussions)
2. Describe the feature clearly
3. Explain use case and benefits
4. Provide mockup or example if applicable

---

## 💻 Code Contributions

### Prerequisites
- Node.js 18+
- Git installed
- Fork of repository

### Setup Development Environment

```bash
# Clone forked repository
git clone https://github.com/YOUR_USERNAME/calculator-history.git
cd calculator-history

# Create feature branch
git checkout -b feature/your-feature-name

# Install dependencies
npm install

# Start development server
npm start

# Open http://localhost:3000
```

### Making Changes

1. **Code Style**
   - Follow existing code patterns
   - Use meaningful variable names
   - Add comments for complex logic
   - Max line length: 100 characters

2. **Commit Messages** (Semantic)
   ```
   feat: add logarithm function
   fix: correct decimal validation bug
   docs: update deployment guide
   style: format calculator UI
   test: add unit tests for factorial
   ```

3. **File Organization**
   - Changes to `script_v2.js` for logic
   - Changes to `style_v2.css` for styling
   - Changes to `index.html` for structure only

### Testing Before Submitting

```bash
# Test locally
npm start

# Check console for errors (F12)

# Test cases:
# - Basic math: 1 + 1 = 2
# - Decimals: 1.2 + 2.3 = 3.5
# - Functions: sqrt{16} = 4
# - Brackets: [{(1+2)}] = 3
# - Edge cases: 0 division, negative numbers
# - All keyboard shortcuts
# - Theme toggle persistence
# - History save/clear
```

### Submitting a Pull Request

1. **Before PR**: Ensure all tests pass locally
2. **Push** to your fork
3. Go to original repo → **Pull Requests** → **New PR**
4. Fill in PR template:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] Feature addition
- [ ] Documentation update
- [ ] Performance improvement

## Related Issues
Closes #123

## Testing Done
- [ ] Manual testing completed
- [ ] All browsers tested
- [ ] Mobile responsive verified

## Checklist
- [ ] Code follows style guide
- [ ] Comments added for clarity
- [ ] Documentation updated
- [ ] No console errors
```

---

## 📝 Documentation Contributions

### Updating README.md
1. Clear, concise explanations
2. Examples for each feature
3. Update table of contents if adding sections
4. Check markdown syntax

### Adding Examples
1. Put in examples directory (if created)
2. Well-commented code
3. Document expected output

---

## ✅ PR Review Process

1. Maintainer reviews code
2. Requests changes if needed
3. Approves and merges
4. Closes related issues

**Average review time**: 2-3 days

---

## 📚 Development Guidelines

### JavaScript Best Practices
```javascript
// ✅ DO
const getCurrentNumber = () => { /* ... */ }
if (condition) { /* ... */ }
const MAX_ITEMS = 50;

// ❌ DON'T
var getCurrentNumber = function() { /* ... */ }
if(condition){/*...*/}
MAX_ITEMS = 50;
```

### CSS Guidelines
```css
/* ✅ DO */
.btn-calculator {
  padding: 0.5rem;
  background-color: var(--color-primary);
}

/* ❌ DON'T */
.btn{padding:0.5rem;background-color:#1e40af;}
.calculator-btn, .btn-calc { /* duplicates */ }
```

### HTML Structure
```html
<!-- ✅ DO -->
<button class="btn btn-operator" data-key="+" id="plus-btn">+</button>

<!-- ❌ DON'T -->
<button onclick="handleOperator('+')" style="color: blue;">+</button>
```

---

## 🔄 Version Numbering (Semantic Versioning)

Format: `MAJOR.MINOR.PATCH`

- **MAJOR**: Breaking changes (e.g., 2.0.0 → 3.0.0)
- **MINOR**: New features (e.g., 3.0.0 → 3.1.0)
- **PATCH**: Bug fixes (e.g., 3.1.0 → 3.1.1)

---

## 📂 File Structure

```
calculator-history/
├── index.html                # Main page
├── script_v2.js              # Calculator logic
├── style_v2.css              # Styling
├── package.json              # Dependencies
├── vercel.json               # Deployment config
├── Dockerfile                # Container config
├── docker-compose.yml        # Local dev setup
├── .gitignore                # Git ignore
├── .dockerignore              # Docker ignore
├── .env.example              # Environment template
├── README.md                 # Documentation
├── CHANGELOG.md              # Version history
├── DEPLOYMENT.md             # Deploy guide
├── CONTRIBUTING.md           # This file
├── LICENSE                   # MIT license
└── .git/                     # Version control
```

---

## 🎯 Good First Issues

New contributors should look for issues labeled:
- `good-first-issue`
- `help-wanted`
- `documentation`
- `beginner-friendly`

---

## 💬 Questions or Need Help?

- **Discussions**: Use GitHub Discussions
- **Issues**: Ask in related issue
- **Email**: your-email@example.com

---

## 📜 Code of Conduct

### Our Pledge
We are committed to providing a welcoming and inclusive environment.

### Expected Behavior
- Use respectful language
- Be constructive in criticism
- Focus on what is best for community
- Show empathy

### Unacceptable Behavior
- Harassment or discrimination
- Offensive language
- Unwelcome sexual attention
- Doxxing or sharing private info

---

## ⚖️ License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

## 🙏 Thank You!

Your contributions make Advanced Calculator better! 

⭐ If you find this project helpful, please star it on GitHub!

---

**Happy Contributing!** 🚀
