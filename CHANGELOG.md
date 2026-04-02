# Changelog

All notable changes to the Advanced Calculator project are documented in this file.

## [3.0.0] - 2026-04-02

### Added
- **Full Expression Support**: Calculator now handles chained operations (e.g., `1.2 + 2.3 + 4.5`)
- **Multi-Decimal Operations**: Proper decimal handling across entire expression
- **Algebraic Functions**: Complete set of math functions with curly bracket syntax
  - `sqrt()`, `cbrt()`, `abs()`, `exp()`
  - `sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()`
  - `log()`, `log10()`, `ln()`
  - `floor()`, `ceil()`, `round()`
  - `pow()`, `factorial()`
- **Bracket Support**: Accept `()`, `{}`, and `[]` interchangeably
- **Production Deployment Files**:
  - `package.json` - NPM configuration
  - `vercel.json` - Vercel deployment settings
  - `.gitignore` - Git ignore rules
  - `README.md` - Comprehensive documentation
  - `LICENSE` - MIT license
  - `CHANGELOG.md` - Version history

### Changed
- **Calculation Engine**: Replaced two-number logic with full expression evaluation
- **Input Handling**: 
  - `handleNumber()` - Now validates decimals per token instead of globally
  - `handleOperator()` - Prevents operator stacking (++, --, **)
  - `handleDecimal()` - Dedicated method for decimal insertion
- **Evaluation Method**: Uses `Function()` constructor instead of math.js for speed and security
- **Error Handling**: Improved error detection and display

### Fixed
- ✅ Multiple decimals in single number (e.g., `1.2.3`) now blocked
- ✅ Consecutive operators (e.g., `++`, `--`, `**`) now prevented
- ✅ Trailing operators before calculation now trimmed
- ✅ Expression validation now more robust
- ✅ Factorial calculation now properly handled in expressions

### Deprecated
- `script.js` → replaced by `script_v2.js`
- `style.css` → replaced by `style_v2.css`

### Security
- No longer relies on external `math.js` for final calculation
- Uses sandboxed `Function()` constructor (safer than `eval()`)
- Input validation prevents invalid expressions
- XSS protection through proper sanitization

### Performance
- Slight performance improvement due to removal of math.js dependency
- Faster calculation for large expressions
- Optimized token parsing in `getCurrentNumber()`

---

## [2.0.0] - 2024-01-15

### Added
- Scientific calculator mode with functions:
  - Square root, squares, cubes
  - Trigonometric functions (sin, cos, tan)
  - Logarithmic functions (log, ln)
  - Factorial
- Theme switching (Dark/Light mode)
- Persistent theme preference
- Modal help system with keyboard shortcuts

### Changed
- UI redesigned with Tailwind CSS
- Improved responsive grid layout
- Enhanced button styling and colors

### Fixed
- Calculator state management improvements
- Theme toggle persistence

---

## [1.0.0] - 2023-12-01

### Added
- Initial calculator release
- Basic arithmetic operations (+, -, *, /, %)
- Decimal point support
- Clear and backspace functionality
- Calculation history
- LocalStorage persistence
- Full keyboard support
- Responsive design

### Features
- Clean, intuitive UI
- Real-time display updates
- Error handling for invalid operations
- History sidebar with clear button

---

## Release Notes

### Upcoming (Planned)
- [ ] Dark mode gradient animations
- [ ] Custom number precision settings in UI
- [ ] Expression templates/macros
- [ ] Multi-language support
- [ ] Mobile app version
- [ ] Export history as CSV/PDF

### Known Issues
- None currently reported

### Compatibility
- **Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari, Chrome Mobile
- **Node.js**: 18.0.0+
- **Vercel**: ✅ Fully supported

---

## Migration Guide

### From v2.0.0 to v3.0.0

**No breaking changes!** All existing functionality is preserved.

1. **History is preserved** - No action needed
2. **Theme preference is preserved** - Automatic migration
3. **New files**: `package.json`, `vercel.json` added (for deployment)

### Updating files
```bash
git pull origin main
# Or download new version from releases
```

---

## Contributing

For contributions, please follow semantic versioning:
- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes

Include changelog entry when submitting PRs.

---

## Version Support Matrix

| Version | Status | Support Until | Node |
|---------|--------|---------------|------|
| 3.0.0 | Active | 2026-12-31 | 18+ |
| 2.0.0 | Security fixes only | 2025-12-31 | 16+ |
| 1.0.0 | End of Life | 2024-12-01 | 14+ |

---

**Latest Version**: 3.0.0
**Last Updated**: 2026-04-02
