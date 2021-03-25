var previousOperand = document.querySelector('.previous-operand');
var currentOperand = document.querySelector('.current-operand');
var clearAllBtn = document.querySelector('#clearBtn');
var deleteBtn = document.querySelector('#deieteBtn');
var allNumbers = document.querySelectorAll('[data-number]');
var allOperators = document.querySelectorAll('[data-operators]');
var equalToBtn = document.querySelector('#equalToBtn');

clearAllBtn.addEventListener('click', () => {
    previousOperand.textContent = '';
    currentOperand.textContent = '';
});

deleteBtn.addEventListener('click', () => {
    if (currentOperand.textContent == '') {
        previousOperandInList = previousOperand.textContent.split('');
        previousOperandInList.pop();
        previousOperand.textContent = previousOperandInList.join('');
    } else {
        currentOperandInList = currentOperand.textContent.split('');
        currentOperandInList.pop();
        currentOperand.textContent = currentOperandInList.join('');
    }
});

allNumbers.forEach((number) => {
    number.addEventListener('click', () => {
        currentOperand.textContent += number.textContent
    });
});

allOperators.forEach((Operator) => {
    Operator.addEventListener('click', () => {
        if (currentOperand.textContent != '' && currentOperand.textContent != '0' || previousOperand.textContent != '' && previousOperand.textContent.charAt(previousOperand.textContent.length - 1) == '÷' && '×' && '+' && '-') {
            currentOperand.textContent += Operator.textContent
            previousOperand.textContent += currentOperand.textContent
            currentOperand.textContent = ''
        }
    });
});

equalToBtn.addEventListener('click', () => {
    var toSolve = `${previousOperand.textContent}${currentOperand.textContent}`
    previousOperand.textContent = ''
    if (toSolve.endsWith('÷') || toSolve.endsWith('×') || toSolve.endsWith('+') || toSolve.endsWith('-')) {
        toSolve = toSolve.slice(0, -1);
    }
    toSolve = toSolve.replace('×', '*');
    toSolve = toSolve.replace('÷', '/');
    currentOperand.textContent = eval(toSolve);
});