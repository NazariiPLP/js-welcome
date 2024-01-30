/*
Фабричний метод - це спосіб створювати об'єети, який дозаоляє не вказувати конкретний клас об'єктаю
Використовуємо спеціальну фабрику для створення об'єктів
Фабрика знає, який саме об'єкт потрібно створити і повертає його намю

new Student(); // НЕ РОБИМО!

Звертаємось до фабрики, фабриці повідомляємо, що нам потрібно, фабрика уже буде робити нам екземпляри потрібного об'єкту
*/

// Абстрактний клас або інтерфейс

class Animal {
  constructor(nickname) {
    this.nickname = nickname;
  }

  makeSound() {
    // абстрактний менод
  }
}

// Конкретний клас для собаки

class Dog extends Animal {
  constructor(nickname) {
    super(nickname);
  }

  makeSound() {
    // віртуальний метод
    console.log("Гав-гав");
  }
}

// Конкретний клас для кота
class Cat extends Animal {
  constructor(nickname) {
    super(nickname);
  }

  makeSound() {
    // віртуальний метод
    console.log("Мяу-мяу");
  }
}

// Фабричний клас, який створює об'єкти

class AnimalFactory {
  static createAnimal(type, nickname) {
    switch (type) {
      case "dog":
        return new Dog(nickname);
      case "cat":
        return new Cat(nickname);
      default:
        throw new Error(`Невідомий тип тварини: ${type}`);
    }
  }
}

// Використання фабрники для ствоерння об'єктів

// Створити об'єкт собаки
const dog = AnimalFactory.createAnimal("dog", "Tuzik");
dog.makeSound(); // Гав-гав

// Створити об'єкт кота
const cat = AnimalFactory.createAnimal('cat', 'Murzik');
cat.makeSound(); // Мяу-мяу