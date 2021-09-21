let numberButtonAll = document.querySelectorAll('.number');
//let currentNumber = '';
let expression = document.querySelector('#curr_expression');
let screen = document.querySelector('#curr_number');
let clearButton = document.querySelector('#clear');
let percentageButton = document.querySelector('#percentage');
let decimalButton = document.querySelector('#decimal');
let signButton = document.querySelector('#sign');
let hasDecimal = false;

signButton.addEventListener('click', function () {
    if (screen.innerText !== '' || screen.innerText !== '0') {
        if (screen.innerText[0] === '-') {
            screen.innerText = screen.innerText.slice(1);
        }
        else {
            screen.innerText = `-${screen.innerText}`;
        }
    }
})

decimalButton.addEventListener('click', function () {
    if (screen.innerText.indexOf('.') === -1) {
        screen.innerText += '.';
    }
})

percentageButton.addEventListener('click', function () {
    if (screen.innerText !== '') {
        screen.innerText = parseFloat(screen.innerText) / 100;
    }
})

clearButton.addEventListener('click', function () {
    screen.innerText = '';
    expression.innerText = '';
})

for (let button of numberButtonAll) {
    button.addEventListener('click', function () {
        //currentNumber += button.innerText;
        if (button.innerText !== '.') {
            if (screen.innerText === '0' && screen.innerText.length === 1) {
                screen.innerText = '';
            }
            screen.innerText += button.innerText;
        }
    });
}

let operandButtonAll = document.querySelectorAll('.operand');

for (let button of operandButtonAll) {
    button.addEventListener('click', function () {
        if (screen.innerText !== '' && button.innerText !== '=') {
            expression.innerText += ` ${screen.innerText} ${button.innerText}`;
            //currentNumber = '';
            screen.innerText = '';
        }
        else if (button.innerText === '=') {
            expression.innerText += ` ${screen.innerText}`;
            screen.innerText = '';
            let tmp = eval(expression.innerText);
            screen.innerText = tmp;
            console.log(screen.innerText);
            expression.innerText = '';
        }
    })
}

