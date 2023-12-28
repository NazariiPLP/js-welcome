function sum(a, b) {
  return a + b;
}

let superFunction = sum; // насправді sum - це посилання на комірку в RAM

console.log(sum(2, 4)); // 0Х000045 (умовно)

console.log(superFunction(5, 5)); // 0Х000045 (умовно)
