// Логічні оператори

// Ці оператори будуть працювати з логічним типом даних (Boolean)

const a = true;
// ! - заперечення
!a; // false
console.log(!a);

// !! - подвійне заперечення
!!a;

console.log(!!a);
console.log(Boolean(0));
console.log(Boolean(1)); // явне приведення до типу Bboolean

// Порівняння чисел

const result1 = 4 > 5; // false
const result2 = 4 < 5; // true

// Порівняння рядків
const result3 = "a" > "A"; // 61 > 41 -> true
const result4 = "b" < "u"; // 62 < 75 -> true
console.log(result3);
console.log(result4);

const result5 = "test" > "word"; // Порівюються за першими літерами // 74 > 77 -> false
const result6 = "test" > "tord"; // Порівюються за другими літерами // 65 > 6F -> false

// Перевірка рівності чисел

// "==" - приводить операнди до одного типу даних і потім порівнює. НЕ РЕКОМЕНДУЄТЬСЯ
const result7 = 5 == 6; // false
const result8 = 6 == 6; // true
const result9 = "9" == 9; // true

// "===" - порівнює операнди і за значенням і за типом даних. РЕКОМЕНДУЄТЬСЯ
const result10 = "9" === 9; // truee
const result11 = 9 === 9; // true

// Більше-або-дорівнює / менше-або-дорівнює
const result12 = 3 >= 3; // true
const result13 = 7 <= 6; // false
