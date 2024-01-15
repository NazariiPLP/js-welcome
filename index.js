// array.reduce - використовуєьтся для обчислення якогось одного значення на основі елементів масиву
// reduce - зводить всі елементи масиву до якогось одного результуючого значення
// array.reduce(callback, initial value)

const numbersArray = [2, 3, 1, 2, 34, 21];

// Задача: знайти суму numbersArray

function reducer (accumulator, item) {
// те, що повертає reducer - оновлений акумулятором
return accumulator + item;
}

const sum = numbersArray.reduce(reducer, 0); // 0 - початкове значення, з якого починається підрахунок суми