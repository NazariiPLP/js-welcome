/* Способи створення об'єкта

const cat = { // літеральне створення об'єкта

}

const cat2 = Object(); // Функція-конструктор

const cat3 = new Object(); // Функція-конструктор з оператором new
*/

// Конструктор визначає шаблон або "скелет" об'єктів, які будуть створюватись

/* Угоди у функціях конструкторах:

1. Ім'я функції-конструктора має починатись з великої літери
2. Функція-конструктор повинна виконуватись лише за допомогою операора new
*/

// Задача: написати функцію-конструктор для створення кота

function Cat(name, color, breed, age) {
  this.name = name; // this - посилання на новоствореного кота
  this.color = color;
  this.breed = breed;
  this.age = age;
  this.run = function () {
    return this.name + " is running";
  };
}

// Задача: створити декілька (двох) котів за допомогою фунції-конструктора

const cat1 = new Cat("Bublik", "white", "stray", 3);
const cat2 = new Cat("Murzik", "black", "siam", 2);
