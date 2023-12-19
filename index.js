let box1 = "Hello";

let box2; // undefined

box2 = 15; // 15

// const box3; // undefined

const secretWord = "superSecret!Kyivstar!Cybersecuruti";
console.log(secretWord);

//secretWord = "worddd"; // Перевизначити константу неможливо

console.log(box2); //Не виконається через помилку на рядку 12
// ....

let result1 = 1 + 2; // 3
console.log(result1);
let result2 = 3 - 2; // 1
console.log(result2);
let result3 = 2 * 2; // 4
console.log(result3);
let result4 = 4 / 2; // 2
console.log(result4);

let result5 = 0.1 + 0.2; // 0.3
console.log(result5);

let notAllowed = 10 / 0;
console.log(notAllowed); // Infinity (Нескінченність)

let brrrr = 10 / "hello world";
console.log(brrrr); // NaN
// Nan-Not a number // Операція неприпустима з точки зору математики

// "+"
// Складає числа
// Зклеює рядки (конкатенація)
let newLine = "Hello" + "World";
console.log(newLine);

newLine = 5 + "hello";
console.log(newLine);

newLine = '1' + 1;
console.log(newLine);