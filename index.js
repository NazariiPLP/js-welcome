/* Задача 1
Дано масив [3, 6, 8, 2, 3, 5, 1].
Напишіть функцію, яка приймає масив в якості аргументу і повертає суму всіх елементів масиву
*/

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function arraySum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(arraySum(array1));

/*

*/
