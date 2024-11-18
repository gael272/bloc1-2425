const calculator = document.getElementById('calculator');
const display = document.getElementById('display');
const buttons = [
    ['7', '8', '9', '×'],
    ['4', '5', '6', '−'],
    ['1', '2', '3', '+'],
    ['±', '0', ',', '=']
];

let currentOperation = '';
let currentValue = '';
let previousValue = '';
let operator = '';

function generateCalculatorInterface() {
    buttons.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'row';
        row.forEach(buttonText => {
            const button = document.createElement('button');
            button.className = 'button';
            button.textContent = buttonText;
            button.addEventListener('click', () => handleButtonClick(buttonText));
            rowDiv.appendChild(button);
        });
        calculator.appendChild(rowDiv);
    });
}

function handleButtonClick(buttonText) {
    if (/\d/.test(buttonText)) {
        handleNumber(buttonText);
    } else if (['+', '−', '×', '÷'].includes(buttonText)) {
        handleOperator(buttonText);
    } else if (buttonText === '=') {
        handleEqual();
    } else if (buttonText === '±') {
        handleToggleSign();
    } else if (buttonText === ',') {
        handleComma();
    }
}

function handleNumber(number) {
    currentValue += number;
    updateDisplay(currentValue);
}

function handleOperator(op) {
    if (currentValue === '') return;
    previousValue = currentValue;
    currentValue = '';
    operator = op;
    currentOperation = `${previousValue} ${operator}`;
    updateDisplay(currentOperation);
}

function handleEqual() {
    let result = 0;
    const num1 = parseFloat(previousValue);
    const num2 = parseFloat(currentValue);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '−':
            result = num1 - num2;
            break;
        case '×':
            result = num1 * num2;
            break;
        case '÷':
            result = num1 / num2;
            break;
        default:
            return;
    }

    updateDisplay(result);
    currentValue = result.toString();
    currentOperation = `${previousValue} ${operator} ${currentValue}`;
    operator = '';
}

function handleToggleSign() {
    currentValue = currentValue.startsWith('-') ? currentValue.slice(1) : '-' + currentValue;
    updateDisplay(currentValue);
}

function handleComma() {
    if (!currentValue.includes('.')) {
        currentValue += '.';
        updateDisplay(currentValue);
    }
}

function updateDisplay(value) {
    display.textContent = value;
}

generateCalculatorInterface();