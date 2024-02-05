const user1 = {
  firstName: "Alex",
  lastName: "Doe",
  id: 1,
};

const user2 = {
  firstName: "John",
  lastName: "Doe",
  id2: 2,
};

const alexMessages = ["hi!", "I`m fine"];
const johnMessages = ["hello", "How are you?"];

/*
Задача: 
за допомогою Map зв'язати користувача з його повідомленнями, щоб по ID користувача, можна було знайти його повідомлення
*/

const messages = new Map();
messages.set(user1.id, [alexMessages]);
messages.set(user2.id, [johnMessages]);
