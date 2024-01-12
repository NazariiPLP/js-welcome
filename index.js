// console.log(t);
// console.dir(t);

// Будь-яка JS функція - об'єкт

// Задача: написати функцію, яка повертає суму БУДЬ-ЯКОЇ кількості аргументів

function sum(a, b) {
  const arrayArgs = Array.from(arguments);
  let sum = 0;
  for (let i = 0; i < arrayArgs.length; i++) {
    sum += arrayArgs[i];
  }
  return sum;
}

console.log(sum(2, 6, 3, 4, 5, 6, 7));
