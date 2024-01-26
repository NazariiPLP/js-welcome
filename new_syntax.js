class Test {
  constructor(value1, value2) {
    this.key1 = value1;
    this.key2 = value2;
  }

  method() {
    // тіло методу
  }

  // Варіант 2 для оголошення статичного методу - більш розповсюджений
  static myStaticMethod(parameter) {
    // тіло функції - щось робимо
    console.log(parameter);
  }
}
  
// Статичні методи - методи, якими можна скористатися не відбудовуючи екземпляр класу
// Всередині статичних методів this не використову ється

// Варіант 1 для оголошення статичного методу 
// Test.myStaticMethod = function (parameter) {
 // тіло функції - щось ми робимо
//   console.log(parameter);
// }


Test.myStaticMethod('123');

const obj1 = new Test('test1', 'test2'); // створення нового екземпляру класу Test
obj1.method();
