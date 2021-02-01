// (function () {
//   const operator = prompt('Enter operator ( +, -, * or / ): ');

//   if (operator == '+') {
//     let arr = new Array();
//     arr = accept_numbers();
//     alert(add(arr));
//   } else if (operator == '-') {
//     let arr = new Array();
//     arr = accept_numbers();
//     alert(sub(arr));
//   } else if (operator == '*') {
//     let arr = new Array();
//     arr = accept_numbers();
//     alert(mult(arr));
//   } else {
//     const number1 = parseFloat(prompt('Enter first number: '));
//     const number2 = parseFloat(prompt('Enter second number: '));

//     alert(div(number1, number2));
//   }
// })();

// function accept_numbers() {
//   numberOfelems = prompt('Enter numbers separated by comma: ');
//   return numberOfelems.split(',');
// }

// function add(a = []) {
//   let ans = 0;
//   for (i in a) {
//     ans += parseInt(a[i]);
//   }
//   return ans;
// }

// function sub(a = []) {
//   let ans = a[0];
//   if (a.length == 1) {
//     return a[0];
//   }
//   for (let i = 1; i < a.length; i++) {
//     ans -= parseInt(a[i]);
//   }
//   return ans;
// }

// function mult(a = []) {
//   let ans = a[0];
//   if (a.length == 1) {
//     return a[0];
//   }
//   for (let i = 1; i < a.length; i++) {
//     ans *= parseInt(a[i]);
//   }
//   return ans;
// }

// function div(a, b) {
//   if (b == 0) {
//     alert('please use non zero denominator');
//     return;
//   }
//   return a / b;
// }

// calculator Ui
var btnInputs = document.querySelectorAll('.btn-wrapper button');
var textInput = document.querySelector('.text-input div');
var btnEqual = document.querySelector('.equals');
var clearBtn = document.querySelector('.reset');
var resultBtn = document.querySelector('.result');

btnInputs.forEach((btn) => btn.addEventListener('click', getInputs));
btnEqual.addEventListener('click', compute);
clearBtn.addEventListener('click', clearScreen);

function getInputs(e) {
  let operator = e.target.innerHTML;
  switch (operator) {
    case '+':
    case '-':
    case '*':
    case '/':
    case '9':
    case '8':
    case '7':
    case '6':
    case '5':
    case '4':
    case '3':
    case '2':
    case '1':
    case '0':
    case '.':
    case '(':
    case ')':
      textInput.textContent += operator;
      break;
    case 'pow':
      textInput.textContent += '**';
      break;
    default:
      break;
  }
}

function compute(e) {
  resultBtn.textContent = eval(textInput.textContent);
}
function clearScreen(e) {
  textInput.textContent = '';
  resultBtn.textContent = '';
}
