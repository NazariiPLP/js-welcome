/* Map (Карта, Мапа, Словник) 

Зберігає пари "ключ: значення"
Має розмір (size)

Відмінності від звичайного об'єкта:
1.Запам'ятовує елементи в тому ж порядку, в якому ми їх додаємо
2.Ключем може бути будь-який тип даних
(Об'єкти (в тому числі функції) - передаються за посиланням)

Ключ в Map має бути унікальним
*/

const map = new Map();

map.set(1, {});
map.set("1", "value");

map.get(1); // {}
map.get("1"); // value

map.has(1); // true
map.has(20); // false

const vocabulary = new Map();

vocabulary.set('cat', 'кіт');
vocabulary.set('dog','собака');
vocabulary.set('eat', 'їсти');

// Написати функцію, яка приймає рядок англійською мовою та перекладає цей рядок україською, використовуючи словник

function translater(str, vocabulary) {
  const arrayWords = str.toLowerCase().trim().split(' ');

  // у нас є словник vocabulary
  // перебрати arrayWords і переклад для кожного ангійського слова у масиві дістати з нашого словника 
  translatedArray = arrayWords.map((word) => {
    return vocabulary.get(word);
  })
  console.log(translatedArray.join(' '));
}

translater('    Cat eat dog    ', vocabulary);