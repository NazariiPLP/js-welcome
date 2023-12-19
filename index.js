/*

Зміна
Variable

*/

/* 

Створення зміної

ключове-слово ім'я-змінної;

var - deprecated

let = CD-RW
const = CD-R

*/

let box;

console.log(box)

// "=" - оператор присвоєння

box = 3.99995; // Присвоєння (Assign) 

console.log(box); // 3.99995

// Можна визначати значення зміної при її створенні
let box2 = 'Hello world';

console.log(box2); // 'Hello world'

box2 = 236;

console.log(box2) // 236

let isActive = true;
let isLogged = false;
let isRecording = false;
isRecording = true;

// Присвоєння значення з іншої зміни 

let x = 10;
let y;
y = x; //зміна y отримує значення x; 
console.log(y); // 10

let z = 10;
let u = z;

u=15; // u - 15, z - 10;
console.log(z); // 10
console.log(u); // 15

/*
Правила неймінгу зміних:

1. Використовуйте осмислені та описові імена зміних.
Наприклад:
userName, age, totalAmount

2. Використовуємо camelCase у JS.

3. Уникайте використання однобуквених або непояснюваних скорочень.
Наприклад:
x, y, zxc

4. Уникайте пробілів та спеціальних сивмолів у назвах змінних.

5. Заборонено починати назву зміної з числа.
// let box; // Заборонено!

*/
