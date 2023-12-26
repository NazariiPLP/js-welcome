// Задача: Написати пограму, яка перевіряє число, чи ділиться воно на 5, 3, 2

// const number = Number(prompt("Введіть число: "));

// if (number % 5 === 0) {
//   console.log(number + " - ділиться на 5");
// } else if (number % 3 === 0) {
//   console.log(number + " - ділиться на 3");
// } else if (number % 2 === 0) {
//   console.log(number + " - ділиться на 2");
// } else {
//   console.log(number + " - націло не ділиться ні на 5, ні на 3, ні на 2");
// }

// switch - спосіб реалізації вибору з декількох можливих варіантів в залежності від значення виразу
// Конструкція switch використовується у випадках, коли перевіряється одна зміна на різні значення

/* Синтаксис

switch(вираз - якась зміна) {
  case значення_виразу: робимо щось одне;
  case значення2_виразу: робимо щось інше;
  case значення3_виразу: робимо ще щось інше;
  default: робимо щось, якщо інші значення не підійшли
}

*/

// Задча: є номер місяця. За номером місяця потрібно визначити пору року

const monthNumber = 12;

switch (monthNumber) {
  case 1:
  case 2:
  case 12: {
    console.log("зима");
    break;
  }
  case 3:
  case 4:
  case 5: {
    console.log("весна");
    break;
  }
  case 6:
  case 7:
  case 8: {
    console.log("літо");
    break;
  }
  case 9:
  case 10:
  case 11: {
    console.log("осінь");
    break;
  }
  default: {
    console.log("Введіть число від 1 до 12");
    break;
  }
}
