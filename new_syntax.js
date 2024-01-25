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

    this.rate = Number(rate.toFixed(2)); // приватне поле

    if (daysWorked < 0 || daysWorked > 31) {
      throw new RangeError("Days must be in 0 to 31");
    }

    this.daysWorked = daysWorked;
    this.coefficient = coefficient;
  }

  /*
    Сеттер - метод для встановлення значення
    Геттер - метод для отримання значення
  */

  set rate(newValue) {
    // назва сеттеру - назва приватного поля БЕЗ знаку нижнього підкреслення
    if (newValue < 0) {
      throw new RangeError("Rate must be a positive number");
    }
    if (typeof newValue !== "number") {
      throw new TypeError("Rate must be a number");
    }

    // АЛЕ всередині сеттеру ми працюємо з приватним полем
    this._rate = newValue;
  }

  get rate() {
    // // назва геттеру - назва приватного поля БЕЗ знаку нижнього підкреслення
    // АЛЕ всередині геттеру ми працюємо з приватним полем
    return this._rate;
  }

  set name(newValue) {
    if (typeof newValue !== "string") {
      throw new TypeError("Name be a string");
    }
    if (typeof newValue === "") {
      throw new TypeError("Name must be a valid");
    }


    this._name = newValue;
  }

  get name() {
    return this._name;
  }

  set lastName(newValue) {
    if (typeof newValue !== "string") {
      throw new TypeError("Lastname be a string");
    }
    if (typeof newValue === "") {
      throw new TypeError("Lastname must be a valid");
    }

    this._lastName = newValue;
  }

  get lastNname() {
    return this._lastNname;
  }

  getSalary() {
    if (this.coefficient) {
      return this.rate * this.daysWorked * this.coefficient;
    } else {
      return this.rate * this.daysWorked;
    }
  }
}

const worker1 = new Worker("Alex", "Fisherman", 300, 20);
const worker2 = new Worker("Savanah", "Loe");

console.log(worker1.rate); // getter
worker1.rate = 500;

/*
В середині класу геттери/сеттери працюють з приватними полями.
А при зверненні до класу зовні 
*/

/*
Розробити геттери та сеттери для полів days та coefficient
Передбачте перевірки в сеттерах
*/