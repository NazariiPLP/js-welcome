// Задача: зберегти розклад занять, використовуючи дні тижні як ключі, а значеннями будуть списки занять, які відбуваються у відповідний день

const schedule = new Map();

schedule.set("Понеділок", ["Математика", "Фізика"]);
schedule.set("Вівторок", ["Англійська мова", "Всесвітня історія"]);
schedule.set("Середа", ["Хімія", "Географія"]);
schedule.set("Четвер", ["Зарубіжна літерату", "Юіологія"]);
schedule.set("П'ятниця", ["Інформатика", "Фізкультура"]);

// Отримання розкладу занять для певного дня
console.log(schedule.get('Понеділок'));

// Перевірка чи є розклад для певного дня
console.log(schedule.has('Субота'));

// Отримання кількості днів в розкладі
console.log(schedule.size);