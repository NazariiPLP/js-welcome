"use strict";
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

const MIN_ZP = 7100;
const WORK_DAYS = 21;
const MIN_RATE = MIN_ZP / WORK_DAYS;

class Worker {
  constructor(name, lastName, rate = MIN_RATE, daysWorked = WORK_DAYS) {
    this.name = name;
    this.lastName = lastName;
    this.rate = Number(rate.toFixed(2));
    this.daysWorked = daysWorked;
  }

  getSalary() {
    return this.rate * this.daysWorked;
  }
}

const worker1 = new Worker("Alex", "Fisherman", 3000, 20);
const worker2 = new Worker("Savanah", "Loe");

console.log(worker1.getSalary());

/* Параметри за замовченням */

function sum(a = 10, b = 5) {
  return a + b;
}

console.log(sum()); // 15
console.log(sum(3)); // 8
console.log(sum(3, 7)); // 10

/*
Клас авто
Клас паливо

Задача: порахувати загальну вагу автомобіля (вага авто + вага палива)
                                                         V*густина

*/

class Fuel {
  constructor(volume, density) {
    this.volume = volume;
    this.density = density;
  }

  getWeight() {
    return this.volume * this.density;
  }
}

const benzin = new Fuel(50, 0.9);

class Auto {
  constructor(name, ownWeight, fuel) {
    this.name = name;
    this.ownWeight = ownWeight;
    this.fuel = fuel;
  }

  // метод, який обчислює повну вагу авто: його власна вага ownWeight + вага палива
  getFullWeight() {
    return this.ownWeight + this.fuel.getWeight();
  }
}

const bmw = new Auto('BMW', 4000, benzin); 


