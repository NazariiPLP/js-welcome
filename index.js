/*Задача 1
Напишіть функцію, яка приймає 2 числа і повертає те, що більше*/

function isLarger(num1, num2) {
  if (num1 > num2) {
    console.log(num1 + " - більше число");
  } else if (num1 < num2) {
    console.log(num2 + " - більше число");
  } else if (num1 = num2) {
    console.log(num1 - " - числа однакові")
  }
}

isLarger(3, 5);

/*Задача 2
Напишіть іншу функцію, яка знаходить середнє арифметичне з двох чисел.
Середнє арифметичне значення = (одне число + друге число) / кількість чисел*/

function averageValue(num1, num2) {
  result = (num1 + num2) / 2;
  console.log(result);
}

averageValue(12, 8);

/*Задача 3
Напишіть функцію, яка приймає одне число і визначає, чи є воно парним (четность)*/

function isEvenNumber(num) {
  if (num % 2 === 0) {
    console.log(num + " - парне число");
  } else if (num % 2 > 0) {
    console.log(num + " - НЕ парне число");
  }
}

isEvenNumber(16);
isEvenNumber(17);
