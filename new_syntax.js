/*

class MyClass {
    // методи класу
    constructor() {

    }

    method1() {....}
    method2() {....}
    method3() {....}
}

const user = new MyClass()

*/

class User {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.name} ${this.lastName}`;
  }
}

const user1 = new User("Alex", "Dane", 20);
const user2 = new User("Dari", "Dane", 23);

/*

Правила класів

1. constructor() при створені класу - обов'язковий
2. Ми не можемо самостійно звернутися до конструктора
3. Конструктор має бути тільки один 
4. Як і у функіях-конструкторах назва класу записується з великої літери
*/