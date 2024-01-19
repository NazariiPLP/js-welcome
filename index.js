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
