class Calculator {
    constructor() {
        this.currentInput = '0';
        this.displayElement = document.getElementById('display');
    }

    updateDisplay() {
        this.displayElement.innerText = this.currentInput;
    }

    clear() {
        this.currentInput = '0';
        this.updateDisplay();
    }

    appendSymbol(symbol) {
        if (this.currentInput === '0' && symbol !== '.') {
            this.currentInput = symbol;
        } else {
            this.currentInput += symbol;
        }
        this.updateDisplay();
    }

    calculateResult() {
        try {
            this.currentInput = eval(this.currentInput).toString();
            this.updateDisplay();
        } catch (error) {
            this.currentInput = 'Error';
            this.updateDisplay();
        }
    }
}

const calculator = new Calculator();
