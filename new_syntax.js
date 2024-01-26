/*
Напишіть клас RangeValidator.

У класі має бути 2 властивості: from, to
from, to - числа, за типом даних.

Завдання: реалізувати сеттери та геттери для обох властивостей
Реалізувати такі обмеження: from не може бути більше ніж to

Реалізувати звичайний метод getRange, який має повертати масив цілих чисел з цього діапазону

const object1 = new RangeValidator(2, 5);
object1.getRange(); // [2, 3, 4, 5]
*/

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  set from(newValue) {
    if (newValue >= this.to) {
      throw new RangeError("From must be less than to");
    }
    this._from = newValue;
  }

  get from() {
    return this._from;
  }

  set to(newValue) {
    if (newValue <= this.from) {
      throw new RangeError("To must be greater than from");
    }
    this._to = newValue;
  }

  get to() {
    return this._to;
  }

  getRange() {
    const arr = [this.from, this.to];
    arr.shift();
    for (let i = this.to - 1; i >= this.from; i--) {
      arr.unshift(i);
    }
    return arr;
  }
}

const object1 = new RangeValidator(2, 5);
console.log(object1.getRange());

const object2 = new RangeValidator(35, 42);
console.log(object2.getRange());

const object3 = new RangeValidator(105, 115);
console.log(object3.getRange());
