/* Задача 1

Знайти факторіал числа за допомогою рекурсії

*/
number4 = 4;
number5 = 5;

function factorial(n) {
  let result = 1;
  for (i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(number4));
console.log(factorial(number5));

function factorialRecursive(n) {
  if (n === 1) {
    return n;
  } else {
    return n * factorialRecursive(n - 1);
  }
}

console.log(factorialRecursive(number4));
console.log(factorialRecursive(number5));

/* Задача 2

Описати знаходження послідовності чисел Фібоначчі:
F(n) = F(n-1) * F(n-2)

Іншими словами, наступне число є сумою двох попередніх
*/

function findFibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return findFibonacci(n - 1) + findFibonacci(n - 2);
}

console.log(findFibonacci(number4));
console.log(findFibonacci(number5));