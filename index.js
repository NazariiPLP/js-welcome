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


/*
Існує 3 види деструктуризації у JS:
+ 1. Деструктиризація об'єктів
2. Деструктиризація вхідних параметрів
+ 3. Деструктиризація масивів
*/
 
const arr = [1, 2, 3, 4, 5, 6];
// const firstElement = arr[0];

const [firstElement, seconfElement, ...restOfArray] = arr;

function getFullName({firstName, lastName, ...restObjects}) { // все інше, окрім firstName, lastName - ігнорується
    console.log(restObjects);
    return`${firstName} ${lastName}`;
}

const user2 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 42,
    geolocation: '42.24345312 56.11214545',
    browser: 'Chrome'
}

console.log(getFullName(user2));