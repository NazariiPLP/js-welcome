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
  constructor(
    name,
    lastName,
    rate = MIN_RATE,
    daysWorked = WORK_DAYS,
    coefficient
  ) {
    if (name === "" || lastName === "") {
      throw new Error("Name and lastName must be valid");
    }

    this.name = name;
    this.lastName = lastName;

    if (typeof rate !== "number" || typeof daysWorked !== "number") {
      throw new TypeError("Rate and days must be a number");
    }

    if (rate < 0) {
      throw new RangeError("Rate must be a positive number");
    }

    this._rate = Number(rate.toFixed(2));

    if (daysWorked < 0 || daysWorked > 31) {
      throw new RangeError("Days must be in 0 to 31");
    }

    this.daysWorked = daysWorked;
    this.coefficient = coefficient;
  }

  setRate(value) {
    if (typeof value !== "number" || typeof daysWorked !== "number") {
      throw new TypeError("Rate must be a number");
    }

    if (value < 0) {
      throw new RangeError("Rate must be a positive number");
    }

    this._rate = value;
  }

  getRate() {
    return this._rate;
  }

  getSalary() {
    if (this.coefficient) {
      return this.rate * this.daysWorked * this.coefficient;
    } else {
      return this.rate * this.daysWorked;
    }
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

const bmw = new Auto("BMW", 4000, benzin);
