// array.concat - використовується для об'єднанання двох або більше масивів у новий масив
// array.concat(array1, array2, ..., arrayN)

const array1 = [1, 2, 3, 4];
const array2 = array1.concat([222, 888, 333], [555, 777]);
// console.log(array2);


// array.fill - використовується для заповнення всіх елементів масиву певним одним значенням
// array.fill(value, [start, [end]]); // start, end - необов'язкові

const array3 = new Array(5);
array3.fill(1);
// console.log(array3);


// array.includes - використовується для перевірки наявності певного значення у масиві
// array.includes(searchValue, [fromIndex = 0]); fromIndex- необов'язковий

const array4 = [2, 12, 4, 1, 5, 8, 13 ,12];
console.log(array4.includes(5)); //true
console.log(array4.includes('5')); // false


// array.indexOf - використовується для отримання першого входження певного значення у масиві
// array.indexOf(searchElement, [fromIndex = 0]);
console.log(array4.indexOf(12)); // 1
console.log(array4.indexOf(120)); // -1


// array.join - використовується для створення рядка, об'єднуючи всі елементи масиву
// array.join([separator])
const array5 = ['Hello', 'world', 4, 2, 'hi'];
console.log(array5.join(' <<--->> '));


// array.push - використовується для додавання одного або кількох елементів у кінець масиву масиву
// array.push(element1, ..., elementN);
const array6 = [2, 3, 4, 5];
array6.push(6, 7, 8, 9, 10);
console.log(array6);


// array.pop - використовується для видалення останього елементу у масиві
array6.pop();