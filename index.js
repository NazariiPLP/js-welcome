/* Задача: 
Написати функцію-конструктор для створення собаки (визначити ім'я, колір, вік).
Створити декілька собак за допомогою фунції-конструктора.
*/

function dog(name, color, age) {
  this.name = name;
  this.colot = color;
  this.age = age;
}

const dog1 = new dog("Jack", "black", 3);
const dog2 = new dog("Whesley", "white", 2);
const dog3 = new dog("Russel", "white - orange", 4);
