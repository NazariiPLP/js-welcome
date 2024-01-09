// Є певний user

const userTelephone1 = "380957382856";
const userTelephone2 = "380678092562";
const userTelephone3 = "380993648236";

const userTelephones = {
  0: "380957382856",
  1: "380678092562",
  2: "380993648236",
};

// Масив (Array)

// Оголошення масиву

// 1 спосіб
const arr = [2, 4, 6, 7, 150, 789, 123];

// 2 спосіб
const arr2 = new Array(2, 4, 6, 7);

// Способи доступу до елементів масиву
arr[0]; // Зчитування значень елементів масиву
arr[0] = 200; // Присвоєння нових значень для елементів масиву

// Задача: вивесит всі значення масиву в консолі

/* варіант1 
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
*/

// варіант2
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Задача: у нас є масив чисел
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20];

for (let i = 0; i < numbersArray.length; i++) {
  if (numbersArray[i] % 2 === 0) {
    console.log(numbersArray[i]);
  }
}
