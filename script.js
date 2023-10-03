let a = ''; // first number
let b = ''; // second number
let sign = ''; // operation type
let finish = false;

const digit = ['0', '00', '1', '2', '3', '4', '5', '6', '7', '8', '9', ','];
const action = ['+', '-', '*', '/'];
const reset = document.querySelector('.calc_btn_reset');
const calc = document.querySelector('.calc'); // calculaor
const result = document.querySelector('#result'); // calc display (out)

function allClear() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    result.textContent = '0';
};

reset.addEventListener('click', allClear);
calc.addEventListener('click', function (event) {
    if (!event.target.classList.contains('calc_btn')) return; // button ressed
    if (event.target.classList.contains('calc_btn_reset'))
        return result.textContent = ''; // AC pressed
    const value = event.target.textContent;
    // result.innerText += value;
    if (digit.includes(value)) {
        if (b === '' && sign === '') {
            a += value;
            console.log(a, b, sign);
            result.textContent = a;
        } else if (a !== '' && b !== '' && finish) {
            b = value;
            finish = false;
            result.textContent = b;
        } else {
            b += value;
            result.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }
    if (action.includes(value)) {
        sign = value;
        result.textContent = sign;
        console.log(a, b, sign);
        return;
    }
    // equal pressed
    if (value === '=') {
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case '*':
                a = a * b;
                break;
            case '/':
                a = a / b;
                break;
        }
        finish = true;
        result.textContent = a;
        console.log(a, b, sign);
    }
});
