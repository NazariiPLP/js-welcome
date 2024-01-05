// Задача:
/*
Всередині alert виконати автоматичний розрахунок: 2+2=4
*/

alert("2+2=" + (2 + 2));

// Подвійні лапки: "Привіт"
// Одинарні лапки: 'Привіт'

// Зворотні лапки: `Привіт` -->> шаблоний рядок
// Dbhfpb erkflf.nmcz ${...вираз...}

// Рядки, які знаходяться у зворотніх лапках називаються шаблонними рядками

const nickname = "Вася";

// Задача: створити alert і привітатись з Васею
// alert("Привіт, " + nickname + "!");
alert(`Привіт, ${nickname}!`); // ``-->> шаблоний рядок

alert(`результат: ${1 + 2}`);

// Задач: запитати у користувача два числа і вивести відповідь alert

const first = Number(prompt("Enter first number"));
const second = Number(prompt("Enter first number"));

// alert(String(first) + "+" + String(second) + "=" + String(first + second));
// 5+10=15

alert(`${first} + ${second} = ${first + second}`);
