/* Задача 1.
Написати функцію, яка приймає 2 числа (діапазон) і виводить на консоль всі числа з цього діапазону, які діляться на 5. */

let start = Number(prompt("Введіть початок діапазону: "));
let end = Number(prompt("Введіть кінець діапазону: "));

function printNumberDivisibleBy5(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 5 === 0) {
      console.log(i);
    } else {
      console.log("Число " + i + " - не кратне 5");
    }
  }
}

printNumberDivisibleBy5(start, end);
