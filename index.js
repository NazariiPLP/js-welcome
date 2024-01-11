// array.concat - використовується для об'єднанання двох або більше масивів у новий масив
// array.fill - використовується для заповнення всіх елементів масиву певним одним значенням
// array.includes - використовується для перевірки наявності певного значення у масиві
// array.indexOf - використовується для отримання першого входження певного значення у масиві
// array.join - використовується для створення рядка, об'єднуючи всі елементи масиву
// array.push - використовується для додавання одного або кількох елементів у кінець масиву 
// array.pop - використовується для видалення останього елементу у масиві

// array.shift - використовується для видалення першого елементу з посатку масиву
const arr1 = [5, 12, 11, 24, 85];
// console.log(arr1.shift());

// array.unshift - використовується для додавання одного або декількох елементів на початок масиву
// array.unshift(element1, element2, element3, ..., elementN)
const arr2 = [1, 2, 3, 4];
// console.log(arr2.unshift(-1, 0));

// array.reverse - використовується для зміни порядку елментів порядку у масиві на протилежний
const arr3 = [1, 2, 3, 4, 5, 6];
// console.log(arr3.reverse());

// Методи, які змінюють вихідний масив - мутуючі методи
// Методи, які НЕ змінюють вихідний масив - немутуючі методи (більшість методів масиву)

/* Задачі:
1. Дано два масиви: [1, 2, 3] і [4, 5, 6]. Об'єднайте їх у масив: [1, 2, 3, 4, 5, 6].
2. Дано масив [1, 2, 3]. Зробити з нього масив [3, 2, 1].
3. Дано масив [3, 4, 5]. Додайте йому в кінець елементи 4, 8. 10.
4. Дано масив ['aaa', 'bbb', 'ccc']. Виведіть в консоль останній елемент та видаліть його з масива.
5. Дано масив ['3', 7, 10]. Додайте йому на початок елементи 2, 8.
6. Дано масив ['3', 7, 10]. Отримайте з нього рядок.
*/

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [3, 4, 5];
const array4 = ['aaa', 'bbb', 'ccc'];
const array5 = ['3', 7, 10];

console.log(array1.concat(array2));
console.log(array1.reverse());
console.log(array3.push(4, 8, 10));
console.log(array4.pop());
console.log(array5.join(', '));
console.log(array5.unshift(2, 8));