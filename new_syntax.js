/*

class MyClass {
    // методи класу
    constructor() {

    }

    method1() {....}
    method2() {....}
    method3() {....}
}

const user = new MyClass()

*/

class User {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.name} ${this.lastName}`;
  }
}

const user1 = new User("Alex", "Dane", 20);
const user2 = new User("Dari", "Dane", 23);

/*
Правила класів

1. constructor() при створені класу - обов'язковий
2. Ми не можемо самостійно звернутися до конструктора
3. Конструктор має бути тільки один 
4. Як і у функіях-конструкторах назва класу записується з великої літери
*/

/* Задача
Написати клас Worker.
У працівника є ім'я, прізвище, ставка за робочий день і кількість відпрацьованих днів у цьому місяці
Метод, який повертає зарплатню цього робітника за поточний місяць
*/

class Worker {
    constructor (name, lastName, rate, daysWorked) {
        this.name = name;
        this.lastName = lastName;
        this.rate = rate;
        this.daysWorked = daysWorked;
    }

    getSalary() {
        return this.rate * this.daysWorked;
    }
}

const worker1 = new Worker ('Alex', 'Fisherman', 200, 20);

console.log(worker1.getSalary());