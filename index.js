/* Задача 3
Дано масив [3, 6, 8, 2, 3, 5, 1].
Напишіть функцію, яка знаходить середнє арефметичне елементів масиву.
*/

const array1 = [3, 6, 8, 2, 3, 5, 1];

function arrayAverage(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return  sum / array.length;
}

console.log(arrayAverage(array1)); // 4
