// || ("або")
// Бінарний оператор, повертає Boolean
// Повертає true (істину) тільки тоді, якщо хочаб один з операндів є істинним

// Задача: яко вихідні або свято - то це чудовий день для відпочинку
// Зробити висновок.

const isWeekend = true;
const isHoliday = false;

if(isWeekend || isHoliday) { // isWeekend === true || isHoliday === true
    console.log('Чудовий день для відпочинку');
} else {
    console.log('Треба працювати');
}