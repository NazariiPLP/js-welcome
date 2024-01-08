/* Задача: // У нас є функція
function greetingUser(user) {
    // ? <<<--- шаблонний рядок
  }
  
  
  та у нас є об'єкт
  const user = {
    name: 'John',
    surname: 'Doe',
    age: 19
  }
  
  Написати функцію greetingUser таким чином, щоб вона вітала користувача та вказала, скільки йому років має виповнитись у наступному році
  
  Приклад виклику функції:
  greetingUser(user); // Hey, John Doe! You will be 20 next year! */

const user = {
  name: "John",
  surname: "Doe",
  age: "19",
};

function greetingUser(user) {
  return `Hey, ${user.name} ${
    user.surname
  }! You will be ${user.age++} next year!`;
}

greetingUser(user);
