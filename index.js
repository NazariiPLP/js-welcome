/*
Написати функцію, яка приймає рядок і робить кожну першу літеру кожного слова з великої літери
*/

function capitalizeWords(str) {
  // Розбиваємо рядок на окремі слова
  let words = str.split(" ");

  // Проходимо по кожному слову і робимо першу літеру великою
  for (let i = 0; i < words.length; i++) {
    words[i] = console.log(
      words[i].charAt(0).toUpperCase() + words[i].slice(1)
    );
  }

  // Попертаємо з'єднаний рядок зі словами, розділений пробілами
  return words.join(" ");
}

capitalizeWords("word flower third");

/* Задача 1
Написати функцію checkspam, яка повертає true, якщо переданий рядок містить слова 'xxx' або 'viagra'
Якщо заборонений слів у рядку немає - функція повертає false
*/

str1 = "buy ViAgRa now";
str2 = "free xxxxxxxx";
str3 = "innocent rabbit";

function checkSpam(string) {
  const spamArray = ["xxx", "viagra"];
  for (let i = 0; i < spamArray.length; i++) {
    if (string.toLowerCase().includes(spamArray[i])) {
      return true;
    }
  }
  return false;
}

console.log(checkSpam(str1));
console.log(checkSpam(str2));
console.log(checkSpam(str3));

/* Задача 2
Написати функцію, яка визначає чи є слово паліндромом (слово, яке одноково читається з обох сторін).
*/

str4 = 'Anna';
str5 = 'Namman';
str6 = 'Mama';

function checkPalindrom (str) {
  const originalStr = str.toLowerCase();
  const reversedStr = originalStr.split('').reverse().join('');
  console.log(originalStr === reversedStr);
}

checkPalindrom(str4);
checkPalindrom(str5);
checkPalindrom(str6);
