/* Задача 2.
Написати гру FizzBuzz для 100 чисел =)
Гра FizzBuzz - це завдання, при якому гравець починає з 1, а потім це число поступово інкрементується. Якщо число ділиться на 3, гравець каже "Fizz". Якщо число ділиться на 5, гравець каже "Buzz". Якщо число ділиться і на 3, і на 5, гравець каже "FizzBuzz". Якщо число не ділиться ані на 3, ані на 5, гравець просто називає число 
*/

function fizzBuzzGame(limit) {
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzzGame(Number(prompt("Введіть ліміт у грі:")));
