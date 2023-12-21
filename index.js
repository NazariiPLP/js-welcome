// Математичні оператори

// Бінарні оператори

let a = 2 + 2; // 4
let b = 2 - 2; // 0
let c = 2 * 2; // 4
let d = 2 / 2; // 1

// Унарні оператори - коли потрібен тільки один операнд

let e = -2;

// % - Залишок від цілочисельного поділу;

/*
Задача 1.

Дано:
Тістечок - 12
Друзів - 3
Розділити порівну - ?

Рішення:
12 / 3 = 4 (тістечка)

Кожному другу дістанеться по 4 тістечка і у нас не залишиться зайвих тістечок (цілочисельне ділянне)
Залишок від цілочисельного поділу - 0

Задача 2.

Дано:
Тістечок - 15
Друзів - 6
Розділити порівну - ?

Рішення:
1) 15 / 6 = 2.5
Ціле: 2
Кожний друг гарантовано отримає по 2 тістечка 
2) (6 * 2 = 12 тістечок)
3) 15 - 12  = 3 (тістечка) - залишок

Число 2 - результат цілечисельного поділу (скільки тістечок отримає кожний лруг без залишку)
Число 3 - залишок від цілочисельного поділу
*/

// Залишок від цілочисельного поділу - число, яке залишається після того, як одне ціле число ділиться на інше ціле число без залишку

// Вирішення задачі 2 з використанням спеціального оператору
let rest = 15 % 6;
console.log(rest); // 3

// Задаяа: визначити парність / непарність числа
// Чи є число 4 парним числом

let pair = 4 % 2; // 0
console.log(pair);
// В залишку 0 при ділені на 2 - число парне

let unPair = 5 % 2; // 1
console.log(unPair);
// В залишку не 0 при діленя на 2 - число непарне


// ** - оператор ступеня

// Задача: піднести 2 у 3 ступінь (2^3)
const x3 = 2 * 2 * 2; // - 1 спосіб 
console.log(x3);

// Задача: піднести 2 у 9 ступінь (2^3)
const x9 = 2 ** 9; // - 2 спосіб  
console.log(x9);



