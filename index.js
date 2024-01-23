// Задача: аписати функцію суми додатніх чисел

/**
 * Функція знаходить суму двох додатніх чисел
 * @param {number} a число 1 
 * @param {number} b число 2
 * @returns {number} сума
 * @throws {RangeError} якщо a або b - не є цілим числом
 * @throws {TypeError} якщо a або b - не є числом
 */
function sumOfPositiveNumber(a, b) {
  if (a < 0 || b < 0) {
    // маємо "викинути" помилку
    const error = new RangeError("Одне з чисел менше 0");
    throw error; // return для помилок
  }

  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError('Параметри a та b мають бути числами')
  }

  return a + b;
}

// throw <об'єкт помилки>
// throw - кинути

try {
  // якийсь код, очікуючи що може виникнути помилка
  sumOfPositiveNumber(1, -2);
} catch(error) {
  console.log(error);
}

console.log('Usual code flow');