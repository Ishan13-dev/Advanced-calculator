'use strict';

class Calculator {

    constructor() {
        this.display = document.getElementById('display');
        this.canvas = document.getElementById('graphCanvas');
        this.ctx = this.canvas?.getContext('2d');

        this.currentInput = '';

        this.init();
    }

    init() {
        this.setupKeyboard();
        this.updateDisplay();
    }

    // ================= INPUT =================
    handleInput(val) {
        this.currentInput += val;
        this.updateDisplay();
    }

    handleClear() {
        this.currentInput = '';
        this.updateDisplay();
        this.clearGraph();
    }

    updateDisplay() {
        this.display.value = this.currentInput || '0';
    }

    // ================= CALCULATE =================
    calculate() {
        try {
            let exp = this.currentInput
                .replace(/×/g, '*')
                .replace(/÷/g, '/')
                .replace(/\^/g, '**')
                .replace(/\[/g, '(').replace(/\]/g, ')')
                .replace(/\{/g, '(').replace(/\}/g, ')');

            // AI smart detection
            if (exp.includes('x')) {
                this.solveEquation(exp);
                return;
            }

            let result = Function(`return (${exp})`)();
            this.currentInput = result.toString();
            this.updateDisplay();

        } catch {
            this.display.value = "Error";
        }
    }

    // ================= EQUATION SOLVER =================
    solveEquation(exp) {
        try {
            // Supports simple linear: ax + b = 0
            let eq = exp.replace(/\s/g, '').split('=');

            if (eq.length !== 2) {
                this.display.value = "Invalid Eq";
                return;
            }

            let left = eq[0];
            let right = eq[1];

            let expression = `(${left})-(${right})`;

            // Replace x with numeric testing
            let a = this.evaluate(expression.replace(/x/g, '1'));
            let b = this.evaluate(expression.replace(/x/g, '0'));

            let coeff = a - b;
            let constant = b;

            let result = -constant / coeff;

            this.currentInput = "x = " + result;
            this.updateDisplay();

        } catch {
            this.display.value = "Solve Error";
        }
    }

    evaluate(exp) {
        return Function(`return (${exp})`)();
    }

    // ================= GRAPH =================
    plotGraph() {
        if (!this.ctx) return;

        let exp = this.currentInput;

        this.clearGraph();

        this.ctx.beginPath();
        this.ctx.strokeStyle = "cyan";

        for (let x = -10; x <= 10; x += 0.1) {
            try {
                let y = Function(`return ${exp.replace(/x/g, `(${x})`)}`)();

                let canvasX = x * 20 + 200;
                let canvasY = 200 - y * 20;

                if (x === -10) {
                    this.ctx.moveTo(canvasX, canvasY);
                } else {
                    this.ctx.lineTo(canvasX, canvasY);
                }

            } catch {}
        }

        this.ctx.stroke();
    }

    clearGraph() {
        if (!this.ctx) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // ================= KEYBOARD =================
    setupKeyboard() {
        document.addEventListener('keydown', (e) => {

            if (e.key >= '0' && e.key <= '9') this.handleInput(e.key);
            else if (['+', '-', '*', '/', '.', '(', ')'].includes(e.key)) this.handleInput(e.key);
            else if (e.key === 'Enter') this.calculate();
            else if (e.key === 'Backspace') {
                this.currentInput = this.currentInput.slice(0, -1);
                this.updateDisplay();
            }
            else if (e.key === 'Escape') this.handleClear();

        });
    }
}

// INIT
document.addEventListener('DOMContentLoaded', () => {
    window.calc = new Calculator();
});