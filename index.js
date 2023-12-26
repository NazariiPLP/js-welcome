const num1 = Number(prompt("Введіть перше число: "));
const num2 = Number(prompt("Введіть друге число: "));

// Задача: Написати функцію, яка приймає 2 числа і додає їх

function addTWoNumbers(arg1, arg2) {
  return arg1 + arg2;
}

const result = addTWoNumbers(num1, num2);
console.log(result);

// Область вилимості - визначення доступності і видимості змінних та функцій у певних частинах коду

//  У JS існують 2 основні області видимості

// Глобальна область вилимості охоплює весь документ (програму)

const globalVariable = 10;

function globalFunction() {
  // тіло функції
}

console.log(globalVariable);

// 2. Локальлна область видимості - визначається блоками коду (фігурними дужками)

function testFunction() {
  const localVariable = 20; // Локальна зміна

  if (true) {
    const innerVariable = 30; //Локальна зміна testFunction
    console.log(innerVariable); // 30
    console.log(localVariable); // 20 localVariable - знаходиться у глобальній області видимості по відношенню до if
    console.log(globalVariable); // 10 globalVariable - знаходиться у глобальній області видимості по відношенню до if
  }

  console.log(localVariable); // 20
  // console.log(innerVariable); => Помилка: innerVariable недоступна на глобальному рівні
}

testFunction();

// console.log(localVariable); => Помилка: localVariable недоступна на глобальному рівні

// 3. Функціональна область видимості - визначає область видимості, за якої всі зміні доступні всередині функцій незалежно від блоків у якому вони оголошені
// Var (зміна переважно не використовується)

// Summary
/*
Scope (область видимості) - всі змінні, об'єкти і т.д., які доступні

Local Scope (локальна область видимості) - всі змінні, об'єкти і т.д. ВСЕРЕДИНІ фукнції

Global Scope (глобальна область видимості) - всі змінні, об'єкти і т.д.з поточного коду
*/
