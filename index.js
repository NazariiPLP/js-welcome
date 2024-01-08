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

/*
Задача: написати функцію, яка приймає об'єкт і виводить всі значення всіх властивостей, оформлені *...*
А ключі - "..."
// "key1": *value1*
*/

const obj = {
  key1: "value 1",
  key2: "value 2",
  key3: "value 3",
};

function objValue(x) {
  for (let key in x) {
    console.log(`"${key}":*${obj[key]}*`);
  }
}

objValue(obj);
