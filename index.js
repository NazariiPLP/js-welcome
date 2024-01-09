/* Задача 2
Дано масив [3, 6, 8, 2, 3, 5, 1].
Напишіть функцію, яка знаходить найбільше значення серед елементів масиву.
*/

const array1 = [3, 6, 8, 2, 3, 5, 1];

function biggestNum(array) {
  let maxNum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxNum) {
      maxNum = array[i];
    }
  }
  return maxNum;
}

console.log(biggestNum(array1));
