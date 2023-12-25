/*
Оголошена функція - Function Declaretion

function ім'яФункції(argument1, argument2) {
  тіло функції
}

ім'яФункції(argument1, argument2)

hoisting - оголошення функції піднімається (hoisted) до верхньої частини коду
*/

greetingUser("James");

function greetingUser(userName) {
  console.log("Hello, " + userName);
}

greetingUser("Alex");

/*
Function expression - Функціональний вираз

const ім'яФункції = function(arg1, arg2) {
  тіло функції
}

ім'яФункції(аргумент1, аргумент2);
*/
// greet("Test"); Призведе до помилки

const greet = function (userName) {
  console.log("Hello, " + userName);
};

greet("Kevin");

/*
Arrow Function - Стрілкова функція

const ім'яФункції = (arg1, arg2) => {
   тіло функції
}

ім'яФункції(аргумент1, аргумент2);

hoisting не відбувається
*/
// greetArrow("Test"); Призведе до помилки

const greetArrow = (userName) => {
  console.log("Hello, " + userName);
};

greetArrow("Stepan");
