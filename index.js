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
  return words.join(' ');
}

capitalizeWords("word flower third");

/* Задача 1
Написати функцію checkspam, яка повертає true, якщо переданий рядок містить слова 'xxx' або 'viagra'
Якщо заборонений слів у рядку немає - функція повертає false
*/

str1 = 'buy ViAgRa now';
str2 = 'free xxxxxxxx';
str3 = 'innocent rabbit';

function checkspam (string) {
  if (string.toLowerCase().includes('via') || string.toLowerCase().includes('xxx')) {
    return true;
  } else {
    return false;
  }

}

console.log(checkspam(str1));
console.log(checkspam(str2));
console.log(checkspam(str3));

