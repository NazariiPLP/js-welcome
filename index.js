/* Спроби створення об'єктів

const cat = {
  // літеральне створення об'єктів
};

const cat2 = Object(); // Функція-конструктор

const cat3 = new Object(); // Функція-конструктор з оператором new

*/

const cat = {
  name: "Murzik",
  color: "Orange",
  breed: "Stray",
  age: 2,
  eat: function () {
    return "I'm eating";
  },
  sleep: function () {
    return "I'm sleeping";
  },
};

console.log(cat.age); // 2

cat.age = cat.age + 1;

console.log(cat.age); // 3

cat.sleep = undefined; // Bad practice

delete cat.sleep; // Good practice

// Adding properties

// Задача: додати ім'я друга Мурзика до об'єкту Мурзика

cat.friend = "Tuzik";

cat["favorite food"] = "fish";

cat.meow = function() {
  return 'Meow'
}
