/*
Створити новий масив, кожен елемент якого = едемент зі старого масиву помножений * 2
*/

const oldArray = [1, 2, 3, 4, 5, 1, 2,] // old array

const newArray = oldArray.map((item) => {
  return item * 2;
}).reverse().join(', '); // chaining (map -> reverse -> join)

// Потрібно змінити порядок слідування елементів в масиві newArray на протилежний

