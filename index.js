// Замикання довзоляє функціям зберігати доступ до змінних, навіть коли функції завершили своє виконання
// Замикання - здатність функції запам'ятовувати локальну область видимості

let value = 10; // глобальна область видимості


function wrapper() {
    let value = 20; // локальна область видимості
    
    console.log("WRAPPER function", value);
    
    return function log() {
      console.log("LOG function", value);
    }
}

//////

// function counter() {
//     let i = 0;
//     i++;
//     return i;
// }

//////

function makeCounter() {
    let i = 0;
    return function() {
        return i++; // i - змінна у замиканні
    }
}

const fn = makeCounter();
console.log(fn()); // 0
console.log(fn()); // 1
console.log(fn()); // 2
console.log(fn()); // 3


//////

function makeCounterVersion2() {
    let counter = 0;

    return {
        increment() {
            return ++counter;
        },
        decrement() {
            return --counter;
        }
    }
}

const fnObj = makeCounterVersion2();