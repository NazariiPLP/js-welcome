// Loops - Цикли

/*
while - цикл з передумовою

while (умова) {
    блок коду, який буде циклічно виконуватись
}

do-while - цикл з після-умовою

do {
    тут буде блок коду, який буде циклічно виконуватись
} while (умова)
*/

const correctPassword = "qwerty1234";
let userPass;

do {
  userPass = prompt("Введіть свій пароль:");
} while (userPass !== correctPassword);
