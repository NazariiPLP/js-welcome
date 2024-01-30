/*
Symbol - представляє собою унікальний ідентифікаотр.
Кожен створений символ має свій власний унікальний ідентифікатор, який ніде і ніколи не буде повторюватись

Особливість символів  - вони завжди унікальні
Кожен створений символ, матиме унікальний ідентифікатор, який ніде і ніколи не буде повторюватись

Гарантія унікальності - єдине, для чого Symbol існує

*/

const mySymbol = Symbol(); // без new!!

// const symb2 = Symbol('My second symbol'); // label for human

const obj = {
  //  У об'єктах ключами можуть бути рядки або символи
  test: 1,
  [mySymbol]: 123,
};

console.log(obj[mySymbol]); // 123
