// Функціїї (Functions)
// Функція (підпрограма - старі мови програмування) - блок коду, який виконує певні дії при виклику.
// Функція може приймати аргументи - значення, які передаються у фунцію.
// Функція може використовувати аргументи у своїй роботі.
// Фукнція може повертати значення (або не повертати).
// Функція - фрагмент програмного коду, до якого можна звернутись з іншого місця програми.
/* 
Синтаксис функції 

Як оголосити функцію?

function ім'яФункції(аргумент1, аргумент 2) {
  тіло функції
}
*/

// Задача: написати функцію, яка буде приймати ім'я користувача:рядок і буде вітатись з користувачем

function greetingUser(userName) {
  // userName - абстракція, на якій ми зав'язуємо логіку робот функції
  // userName - формальний параметр
  console.log("Hello, " + userName);
}

// Використання функції
// Параметри, які передаються при виклику функції - фактичні параметри
greetingUser("Alex"); // 'Alex' - агумент функції, фактичний параметр
greetingUser("John");
greetingUser("Sam");
greetingUser("Solar");

// Задача: Створіть функцію, яка приймає число, додає до нього 5 і виводить результат у консоль

function addFive(number) {
  let result = Number(number) + 5;
  console.log(result);
  return result;
}

const addFiveResult = addFive(5);
// Задача: Написати фукнцію, яка складає два числа і повертає результат розрахунку

function addTwoNumbers(num1, num2) {
  // console.log("Hi from function");
  const result = num1 + num2;
  return result;
}

const addTwoNumbersResult = addTwoNumbers(2, 5);
console.log(addTwoNumbersResult);

console.log(addTwoNumbersResult + addFiveResult); // 10 + 7 = 17
