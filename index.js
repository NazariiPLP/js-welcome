// Мутація - якась зміна
// Мутабельне - те, що може бути змінено
// Іммутаюельне  - те, що не може бути змінено

const user = { // об'єкти - мутабельні
  name: "John",
  lastName: "Doe",
};

user.isHungry = false;

// примітивні типи (String, Number, Bigint, Boolean, Null, Undefied, Symbol) - іммутабельні

const username = 'John Doe';
username.isHungry = false;
