/* Задача 1

Дано масив: [2, 3, 3, 5, 6, 77, 77, 5, 1, 1, 12, 12, 13];
Повернути масив без повторень
*/

const arr = [2, 3, 3, 5, 6, 77, 77, 5, 1, 1, 12, 12, 13];

const arrSet = new Set(arr);

const arrSorted = [...arrSet.values()];

/* Задача 2

Дано два масиви:

const arr1 = [4, 3, 7, 5, -11];
const arr2 = [3, 4, 8, 7, 2, -11]

Повернути з функції масив, що складається з різниці двох масивів (тобто, тих значень, які не повторюються в обох масивах)

// Логіка:
Ви приймаєте 2 масиви
Вам потрібно зробити новий масив, але там не повинно бути дублювань
*/

const arr1 = [4, 3, 7, 5, -11];
const arr2 = [3, 4, 8, 7, 2, -11];

const twoArraysWithoutDoubles = (array1, array2) => {
  // const array3 = array1.concat(array2);
  // const set = new Set(array3);
  return [...new Set([...array1, ...array2]).values()];
};

const arrayWithoutDoubles = twoArraysWithoutDoubles(arr1, arr2);
