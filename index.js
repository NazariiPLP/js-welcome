const user = {
  name: "John",
  lastName: "Doe",
  age: 20,
  "favorite color": "red",
  movie: "Blue moon",
  avatar: "http://",
};

// for..in - використовується для перпебору (ітерації) ключів в об'єкті
/*
for (variable in object) {
  Код, що виконується для кожної властивості
}


variable - змінна, яка буде приймати значення ключів властивостей
object - об'єкт властивості (ключі) якого потрібно перпебрати

*/

// Задача: у об'єкті user вивести назви всіх ключів і властивості

for (let key in user) {
  console.log(`${key} : ${user[key]}`); // key ---> value
}
