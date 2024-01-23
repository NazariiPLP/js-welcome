/*
Задача: написати функцію, яка зводить число у певну ступінь і приймає 2 аргументи:
- число, яке потрібно звести у ступінь    -- x
- ступінь, у яку потрібно звести число    -- n
*/

// Ітеративне мислення: цикл for

function pow(x, n) {
  let result = 1; // змінна у якій ми будемо накопичувати добуток

  // множимо result на x , n разів у циклі
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

console.log(pow(2, 3)); // 8

// Рекурсивне мислення: спрощуємо собі завдання і викликаємо функцією саму себе

function powRecursive(x, n) {
  if (n === 1) {
    return x;
  } else {
    return x * powRecursive(x, n - 1);
  }
}

console.log(powRecursive(2, 3)); // 8

/*            if n === 1 -->> x
            /
powRecursive(x,n) = 
            \
              else --->> x * powRecursive(x, n - 1)
*/

// x^n = x * x^(n-1)

/*

1. powRecursive(2, 4) --->>> 2 * powRecursive(2, 3)
2. powRecursive(2, 3) --->>> 2 * powRecursive(2, 2)
3. powRecursive(2, 2) --->>> 2 * powRecursive(2, 1)
4. powRecursive(2, 1) --->>> 2

*/

/*

Особливості роботи:
1. Рекурсія робить виклик функції простішим, потім ще більш простішим і так далі, доки результат не стане очевидним (досягнення бази рекурсії)
2. Рекурсивне рішення, як правило, коротше ніж ітераційне

*/

// Кількість вкладених викликів - глибина рекурсії

// Ми прагнемо до того, що глибина рекурсії не має перевищувати 10000 викликів
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
