//Задача 1: за допомогою forEach збільшити вік користувачів на 1

const users = [
  {
    name: "John",
    lastName: "Doe",
    age: 19,
    email: "john.doe@gmail.com",
  },
  {
    name: "Jane",
    lastName: "Doe",
    age: 22,
    email: "jane.doe@gmail.com",
  },
  {
    name: "Jackson",
    lastName: "Doe",
    age: 55,
    email: "jackson.doe@gmail.com",
  },
];

users.forEach((item) => {
  console.log((item.age += 1));
});

/* Задача 2

Дано масив [2, 44, 11, 234, 8, 2, 4, 1]
Зробити новий масив, всі елементи якого = елемент зі старого масиву + 100
*/

const array = [2, 44, 11, 234, 8, 2, 4, 1];
const newArray = array.map((item) => item + 100);
