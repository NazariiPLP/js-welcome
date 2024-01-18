'use strict';

// rest operator 
// rest - залишок (з англ.)
// .., .., .., .., -->> []

const arrowSum = (...restArrayOfNumbers) => {
  let sum = 0;

  for(let i = 0; i < restArrayOfNumbers.length; i++) {
    sum += restArrayOfNumbers[i];
  }

  return sum;
}

// spread operator 
// spread - розпакувати (з англ.)
// [] -->> .., .., .., ..,

const numbers = [1, 2, 3, 4, 5];

function sum (a, b, ...restArray) {
  console.log(restArray);
  return a + b; // 1, 2, 3, 4, 5undefied
}

console.log(sum(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4])); // 3
console.log(sum(...numbers)); // 3
// розпакували всі значення масиву numbers у виклик функції sum

// Як розрізняти rest і spread оператор?

// Якщо оператор стоїть у аргументах функції, то це rest - він бере і збирає всі залишки параматрів
// Якщо використовується оператор на масиві, то це spread - він бере і розбирає масив на багато дрібних елементів




// Приклад використання spread оператора № 1

const numbersMath = [2, 3, 1, 5, 4];

Math.min(...numbersMath); // 1

// Приклад використання spread оператора № 2

// Задача: зробити масив з назвою copyArray в який будуть входити всі елементи з масиву numbersMath

const copyArray = [...numbersMath];