(function () {
  const operator = prompt('Enter operator ( +, -, * or / ): ');

  if (operator == '+') {
    let arr = new Array();
    arr = accept_numbers();
    alert(add(arr));
  } else if (operator == '-') {
    let arr = new Array();
    arr = accept_numbers();
    alert(sub(arr));
  } else if (operator == '*') {
    let arr = new Array();
    arr = accept_numbers();
    alert(mult(arr));
  } else {
    const number1 = parseFloat(prompt('Enter first number: '));
    const number2 = parseFloat(prompt('Enter second number: '));

    alert(div(number1, number2));
  }
})();

function accept_numbers() {
  numberOfelems = prompt('Enter numbers separated by comma: ');
  return numberOfelems.split(',');
}

function add(a = []) {
  let ans = 0;
  for (i in a) {
    ans += parseInt(a[i]);
  }
  return ans;
}

function sub(a = []) {
  let ans = a[0];
  if (a.length == 1) {
    return a[0];
  }
  for (let i = 1; i < a.length; i++) {
    ans -= parseInt(a[i]);
  }
  return ans;
}

function mult(a = []) {
  let ans = a[0];
  if (a.length == 1) {
    return a[0];
  }
  for (let i = 1; i < a.length; i++) {
    ans *= parseInt(a[i]);
  }
  return ans;
}

function div(a, b) {
  if (b == 0) {
    alert('please use non zero denominator');
    return;
  }
  return a / b;
}
