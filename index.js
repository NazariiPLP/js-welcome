// array.filter - використовується для створення нового масиву, які задовільняють певні умови
// array.filter(callback)
// Колбек буде викликатись для кожного елементу масиву ->
// -> ця колбек-функція всередині filter повинна повертати true/false для кожного елементу масиву

const numbersArray = [5, 3, -9, 21, 1, -2, 4];

// Відфільтрувати масив NumbersArray, щоб залишились тільки додатні числа (> 0)

function filterFunction(item) {
//   if(item > 0) {
//     return true
//   } else {// item < 0
//     return false
//   }

return item > 0
}


const filteresNumbersArray = numbersArray.filter(filterFunction);