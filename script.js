/**
 * Advanced Calculator with History - Working Implementation
 *
 * Features:
 * - Basic and scientific calculator functions
 * - Full keyboard support
 * - Calculation history with persistence
 * - Theme switching (Dark/Light)
 * - Responsive design
 * - Error handling
 *
 * @author Senior Developer
 * @version 3.0.0
 * @license MIT
 */

'use strict';

// ============ CONFIGURATION ============
const CONFIG = {
    STORAGE_KEYS: {
        THEME: 'calcTheme',
        HISTORY: 'calcHistory'
    },
    THEMES: {
        DARK: 'dark',
        LIGHT: 'light'
    },
    MAX_HISTORY_ITEMS: 50,
    DECIMAL_PRECISION: 10
};

// ============ CALCULATOR CLASS ============
class Calculator {
    constructor() {
        this.display = document.getElementById('display');
        this.previousDisplay = document.getElementById('previousDisplay');
        this.historyContainer = document.getElementById('history');
        this.scientificButtons = document.getElementById('scientificButtons');
        this.themeToggle = document.getElementById('themeToggle');
        this.modeToggle = document.getElementById('modeToggle');
        this.clearHistoryBtn = document.getElementById('clearHistory');
        this.helpBtn = document.getElementById('helpBtn');
        this.helpModal = document.getElementById('helpModal');
        this.closeModal = document.getElementById('closeModal');

        this.currentInput = '';
        this.previousResult = '';
        this.isScientificMode = false;
        this.isDarkTheme = true;
        this.history = [];

        this.init();
    }

    init() {
        this.loadTheme();
        this.loadHistory();
        this.setupEventListeners();
        this.setupKeyboardSupport();
        this.updateDisplay();
    }

    // ============ EVENT LISTENERS ============
    setupEventListeners() {
        // Number buttons
        document.querySelectorAll('.btn-number').forEach(btn => {
            btn.addEventListener('click', () => this.handleNumber(btn.dataset.key));
        });

        // Operator buttons
        document.querySelectorAll('.btn-operator').forEach(btn => {
            btn.addEventListener('click', () => this.handleOperator(btn.dataset.key));
        });

        // Action buttons
        document.querySelectorAll('.btn-action').forEach(btn => {
            btn.addEventListener('click', () => this.handleAction(btn.dataset.key));
        });

        // Scientific buttons
        document.querySelectorAll('.btn-scientific').forEach(btn => {
            btn.addEventListener('click', () => this.handleScientific(btn.dataset.key));
        });

        // Equals button
        document.querySelector('.btn-equals').addEventListener('click', () => this.calculate());

        // Theme toggle
        this.themeToggle.addEventListener('click', () => this.toggleTheme());

        // Mode toggle
        this.modeToggle.addEventListener('click', () => this.toggleMode());

        // History clear
        this.clearHistoryBtn.addEventListener('click', () => this.clearHistory());

        // Help modal
        this.helpBtn.addEventListener('click', () => this.showModal());
        this.closeModal.addEventListener('click', () => this.hideModal());
        this.helpModal.addEventListener('click', (e) => {
            if (e.target === this.helpModal) this.hideModal();
        });
    }

    // ============ KEYBOARD SUPPORT ============
    setupKeyboardSupport() {
        document.addEventListener('keydown', (e) => {
            // Prevent keyboard when modal is open
            if (this.helpModal.classList.contains('flex')) {
                if (e.key === 'Escape') this.hideModal();
                return;
            }

            // Handle different key types
            if (e.key >= '0' && e.key <= '9') {
                e.preventDefault();
                this.handleNumber(e.key);
            } else if (['+', '-', '*', '/', '%'].includes(e.key)) {
                e.preventDefault();
                this.handleOperator(e.key);
            } else if (e.key === 'Enter' || e.key === '=') {
                e.preventDefault();
                this.calculate();
            } else if (e.key === 'Backspace') {
                e.preventDefault();
                this.handleAction('backspace');
            } else if (e.key === 'Escape' || e.key.toLowerCase() === 'c') {
                e.preventDefault();
                this.handleAction('clear');
            } else if (e.key === '.') {
                e.preventDefault();
                this.handleNumber('.');
            } else if (e.ctrlKey) {
                if (e.key.toLowerCase() === 't') {
                    e.preventDefault();
                    this.toggleTheme();
                } else if (e.key.toLowerCase() === 'm') {
                    e.preventDefault();
                    this.toggleMode();
                } else if (e.key.toLowerCase() === 'l') {
                    e.preventDefault();
                    this.clearHistory();
                }
            }
        });
    }

    // ============ INPUT HANDLING ============
    handleNumber(key) {
        // Prevent multiple decimals in the same number
        if (key === '.' && this.currentInput.includes('.')) return;

        // Replace leading zero
        if (this.currentInput === '0' && key !== '.') {
            this.currentInput = key;
        } else {
            this.currentInput += key;
        }
        this.updateDisplay();
    }

    handleOperator(operator) {
        // Don't allow operator at start or after another operator
        if (this.currentInput === '' || /[\+\-\*\/\%]$/.test(this.currentInput)) return;

        this.currentInput += operator;
        this.updateDisplay();
    }

    handleAction(action) {
        if (action === 'clear') {
            this.currentInput = '';
            this.previousResult = '';
            this.previousDisplay.textContent = '';
            this.updateDisplay();
        } else if (action === 'backspace') {
            this.currentInput = this.currentInput.slice(0, -1);
            this.updateDisplay();
        }
    }

    handleScientific(func) {
        try {
            let result;
            const value = parseFloat(this.currentInput) || 0;

            switch (func) {
                case 'sqrt':
                    result = Math.sqrt(value);
                    break;
                case 'square':
                    result = Math.pow(value, 2);
                    break;
                case 'cube':
                    result = Math.pow(value, 3);
                    break;
                case 'power':
                    this.currentInput += '^';
                    this.updateDisplay();
                    return;
                case 'sin':
                    result = Math.sin(value * Math.PI / 180);
                    break;
                case 'cos':
                    result = Math.cos(value * Math.PI / 180);
                    break;
                case 'tan':
                    result = Math.tan(value * Math.PI / 180);
                    break;
                case 'log':
                    result = Math.log10(value);
                    break;
                case 'ln':
                    result = Math.log(value);
                    break;
                case 'pi':
                    this.currentInput += Math.PI.toString();
                    this.updateDisplay();
                    return;
                case 'e':
                    this.currentInput += Math.E.toString();
                    this.updateDisplay();
                    return;
                case 'factorial':
                    result = this.factorial(value);
                    break;
                default:
                    return;
            }

            if (result !== undefined) {
                this.currentInput = this.formatResult(result);
                this.updateDisplay();
            }
        } catch (error) {
            this.showError();
        }
    }

    // ============ CALCULATION ============
    calculate() {
        if (this.currentInput === '') return;

        try {
            // Replace symbols for math.js
            let expression = this.currentInput
                .replace(/×/g, '*')
                .replace(/÷/g, '/')
                .replace(/−/g, '-');

            // Evaluate using math.js for security
            const result = math.evaluate(expression);
            const formattedResult = this.formatResult(result);

            // Update displays
            this.previousDisplay.textContent = `${this.currentInput} =`;
            this.display.value = formattedResult;

            // Add to history
            this.addToHistory(this.currentInput, formattedResult);

            // Update state
            this.previousResult = formattedResult;
            this.currentInput = formattedResult;

        } catch (error) {
            this.showError();
        }
    }

    formatResult(num) {
        if (!Number.isFinite(num)) return 'Error';

        // Handle very large/small numbers
        if (Math.abs(num) > 1e10 || (Math.abs(num) < 1e-6 && num !== 0)) {
            return num.toExponential(6);
        }

        // Round to prevent floating point errors
        return Math.round(num * Math.pow(10, CONFIG.DECIMAL_PRECISION)) / Math.pow(10, CONFIG.DECIMAL_PRECISION);
    }

    factorial(n) {
        if (!Number.isInteger(n) || n < 0 || n > 170) return NaN;
        if (n === 0 || n === 1) return 1;

        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    // ============ DISPLAY MANAGEMENT ============
    updateDisplay() {
        this.display.value = this.currentInput || '0';
    }

    showError() {
        this.display.value = 'Error';
        this.currentInput = '';
        setTimeout(() => {
            this.updateDisplay();
        }, 1500);
    }

    // ============ THEME MANAGEMENT ============
    loadTheme() {
        const savedTheme = localStorage.getItem(CONFIG.STORAGE_KEYS.THEME);
        this.isDarkTheme = savedTheme === null || savedTheme === CONFIG.THEMES.DARK;
        this.applyTheme();
    }

    toggleTheme() {
        this.isDarkTheme = !this.isDarkTheme;
        this.applyTheme();
        localStorage.setItem(CONFIG.STORAGE_KEYS.THEME, this.isDarkTheme ? CONFIG.THEMES.DARK : CONFIG.THEMES.LIGHT);
    }

    applyTheme() {
        const html = document.documentElement;
        const body = document.body;

        if (this.isDarkTheme) {
            html.classList.add(CONFIG.THEMES.DARK);
            body.style.background = 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)';
            this.themeToggle.textContent = '🌙';
        } else {
            html.classList.remove(CONFIG.THEMES.DARK);
            body.style.background = 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f8fafc 100%)';
            this.themeToggle.textContent = '☀️';
        }
    }

    // ============ MODE MANAGEMENT ============
    toggleMode() {
        this.isScientificMode = !this.isScientificMode;
        this.scientificButtons.classList.toggle('hidden');
        this.modeToggle.textContent = this.isScientificMode ? 'Scientific' : 'Basic';
        this.modeToggle.classList.toggle('bg-green-600');
        this.modeToggle.classList.toggle('bg-blue-600');
    }

    // ============ HISTORY MANAGEMENT ============
    loadHistory() {
        const savedHistory = localStorage.getItem(CONFIG.STORAGE_KEYS.HISTORY);
        if (savedHistory) {
            this.history = JSON.parse(savedHistory);
            this.renderHistory();
        }
    }

    addToHistory(expression, result) {
        const historyItem = {
            id: Date.now(),
            expression: expression,
            result: result,
            timestamp: new Date().toLocaleTimeString()
        };

        this.history.unshift(historyItem);

        // Limit history size
        if (this.history.length > CONFIG.MAX_HISTORY_ITEMS) {
            this.history = this.history.slice(0, CONFIG.MAX_HISTORY_ITEMS);
        }

        this.saveHistory();
        this.renderHistory();
    }

    renderHistory() {
        if (this.history.length === 0) {
            this.historyContainer.innerHTML = '<p class="text-blue-300 text-center py-4">No calculations yet</p>';
            return;
        }

        this.historyContainer.innerHTML = '';

        this.history.forEach(item => {
            const historyElement = document.createElement('div');
            historyElement.className = 'bg-slate-600 hover:bg-slate-500 p-3 rounded-lg transition-colors cursor-pointer group flex justify-between items-center';
            historyElement.innerHTML = `
                <div class="flex-1">
                    <div class="font-mono text-sm font-semibold text-cyan-300">${item.expression} = ${item.result}</div>
                    <div class="text-xs text-gray-400 mt-1">${item.timestamp}</div>
                </div>
                <button class="delete-btn opacity-0 group-hover:opacity-100 transition-opacity text-red-400 hover:text-red-300 text-lg px-2" data-id="${item.id}">
                    ✕
                </button>
            `;

            // Click to restore calculation
            historyElement.addEventListener('click', (e) => {
                if (!e.target.classList.contains('delete-btn')) {
                    this.currentInput = item.expression;
                    this.updateDisplay();
                }
            });

            // Delete button
            const deleteBtn = historyElement.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', () => {
                this.deleteHistoryItem(item.id);
            });

            this.historyContainer.appendChild(historyElement);
        });
    }

    deleteHistoryItem(id) {
        this.history = this.history.filter(item => item.id !== id);
        this.saveHistory();
        this.renderHistory();
    }

    clearHistory() {
        if (confirm('Are you sure you want to clear all calculation history?')) {
            this.history = [];
            this.saveHistory();
            this.renderHistory();
        }
    }

    saveHistory() {
        localStorage.setItem(CONFIG.STORAGE_KEYS.HISTORY, JSON.stringify(this.history));
    }

    // ============ MODAL MANAGEMENT ============
    showModal() {
        this.helpModal.classList.remove('hidden');
        this.helpModal.classList.add('flex');
    }

    hideModal() {
        this.helpModal.classList.add('hidden');
        this.helpModal.classList.remove('flex');
    }
}

// ============ INITIALIZATION ============
document.addEventListener('DOMContentLoaded', () => {
    new Calculator();
});