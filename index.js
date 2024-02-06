const monitor = {
  sizes: {
    height: {
      value: 30,
      scale: "cm // 1",
    },
    width: {
      value: 50,
      scale: "cm // 2",
    },
  },
  brightness: 750,
  refresh: {
    value: 144,
    scale: "Ggrc",
  },
  color: "black",
  resolution: "4k",
};


// Є об'єкт юзера

const user = {
    name: 'John',
    age: 30,
    address: {
        city: 'Kyiv',
        country: 'Ukraine'
    },
    contacts: {
        email: 'johndoe@gmail.com',
        phone: '+380994875717'
    }
}

// Задача: з використанням деструктиризації отримати значення
// name, city, email та phone

const {name: userName, address: {city: userCity}, contacts: {email: userEmail, phone: userPhone}} = user

console.log(userName);
console.log(userCity);
console.log(userEmail);
console.log(userPhone);
