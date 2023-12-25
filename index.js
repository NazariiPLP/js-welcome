// console.log();
// alert('Hello!');

let firstOperand = Number(prompt('Введіть перше число: ')); // '5' --> Number('5')
let secondOperand = Number(prompt('Введіть друге число: ')); // '10' --> Number('5')
let result = firstOperand + secondOperand;

if(Number.isNaN(result)) { // Number.isNaN(result) === true
  console.log('Введіть число');
} else {
  console.log(result);
}