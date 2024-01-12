function saySomething(howToSay, whatToSay) {
  howToSay(whatToSay);
}

// saySomething(alert, 'Hello user');
// saySomething(console.log, "Hi!");

// Як називаються функції, які приймають функції у якості агрумента?
// HOF - High Order Function

// Як називаються функція, яку ми передали як аргумент?
// Сallback - функція зворотнього виклику

// array.forEach - використовується для перебору (ітерації) кожного елемента масиву і виконання певної дії для кожного елемента
// array.forEach(callback)

// Задача: є масив чисел
// Кожне значення цього масиву возвести в квадрат

const array = [1, 2, 3, 4, 5];

function square(a) {
  console.log(a * a);
}

array.forEach(square);

// еквівалент
// for (let i = 0; i < array.length; i++) {
//   square(array(i));
// }

array.forEach((item) => {
  console.log(item * item);
});

// array.map - працює як forEach, проте map повертає новий масив

const newArray = array.map((item) => {
  return item * item;
});

// При використані map, в такому випадку, значення, яке повертається (return) з callback - воно і буде входити у результуючий масив
