// Перетворення (приведення) типу даних

// Перетворення типу даних - значення змінює тип даних з одного на інший
// Існує 2 типи перетворення даних: явне і неявне

// Неявне перетворення типів (implicit type convertion)
let num = 6 - '1';
console.log(num);

// Явне перетворення типів (explicit type convertion)
// (приведення типів)

let thisIsNumber = Number('45');

// Boolean автоматично (неявно) приводиться до типу Numer при арифметичних розразунках
// true -> 1
// false -> 0

let booleanNuumber = true + 1; // 1 + 1 = 2
console.log(booleanNuumber);

// String

let thisIsString = String(45); // '45'
console.log(thisIsString);

let testString = null + ''; // невне перетворення типу до string
console.log(testString);

// Явне перетворення типів краще за неявне

let test = 15 - Number('17');
console.log(test);

// Nan - Not-a-Number
let notANumber = 2 * "Hello"; // приведення типів неможливе -> некоректна математична операція -> Nah 
console.log(notANumber);

// () - оператор виклику функції 
// математичні оператори (+, - , *, /)
// оператор конкатенції

// оператор typeof - доволяє отимати тип даних операнда
let box = true;
console.log(typeof box);