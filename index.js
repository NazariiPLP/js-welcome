const date = new Date(); // за замовченням буде створена поточна системна дата та час
const date1 = new Date("12-31-2023"); // 31.12.2023

console.log(date1.getDate()); // 31; getDate - використовується для отримання дня місяця з дати
console.log(date1.getDay()); // 0; getDay - використовується для отримання дня тижня з дати (0 - неділя, 6 - субота)
console.log(date1.getFullYear()); // 2023; getFullYear - використовується для отримання року з дати
console.log(date.getHours()); // getHours - викорстовується для отримання години з дати (0-23)
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getTime()); // getTime - використовується для отримання кількості мілісекунд, яка пройшла з 1 січня 1970 року 00:00:00

// Задача: знрайти суму епршого 1000000 чисел

let sum = 0; // 1. Створення змінної

const time1 = new Date(); // Відрізок часу до початку операції 2

for (let i = 0; i <= 1000000; i++) { // 2. Накопичуємо суму
  sum += i;
}

const time2 = new Date(); // Відрізок часу після початку операції 2

console.log(sum);
console.log(time2.getTime() - time1.getTime()); // кількість витрачених мілісекунд на операцію 2

// Приклад з консоль.таймами

console.time('operation');

let sum2 = 0;
for (let i = 0; i <=1000000; i++) {
sum2 += i;
}

// ......

console.timeEnd('operation');
