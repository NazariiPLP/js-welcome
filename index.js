/*

Клас людина та похідний клас Студент

1. Створіть базовий клас Людина з такими властивостями:
- ПІБ
- Дата народження
- Стать

2. Створити похідний клас Студент, який наслідує властивості класу Людина.
Додайте до класу Студент такі додаткові властивості:
- Рік вступу
- Номер залікової книжки
- Середній бал

3. Реалізуйте настпні методи.

В класі Людини:
- greeting() - цей метод повертає привітання для людини в залежності від її статі (Mr. або Mrs.)
 
В класі Студента:
- isExcellentStudent() - цей метод перевіряє чи є студент відмінником на основі середнього балу.
Якщо середній бал студента вищий або рівний 90, то метод поверне true, в іншому випадлку - false

*/

class Person {
  constructor(fullName, birthYear, gender) {
    this.fullName = fullName;
    this.birthYear = birthYear;
    this.gender = gender;
  }

  // Setters

  set fullName(value) {
    if (typeof value !== "string") {
      throw new TypeError("Fullname must be a string");
    }

    this._fullName = value;
  }

  set birthYear(value) {
    // тут по хорошому рахунку потрібно валідувати дату
    this._birthYear = value;
  }

  set gender(value) {
    if (typeof value !== "string") {
      throw new TypeError("Gender must be a string");
    }
    this._gender = value;
  }

  //   Getters

  get fullName() {
    return this._fullName;
  }

  get birthYear() {
    return this._birthYear;
  }

  get gender() {
    return this._gender;
  }

  //   Methods

  greeting() {
    let prefix; // У цій зміній буде "Mr." або "Mrs." в залежності від статті

    if (this.gender === "male") {
      prefix = "Mr.";
    } else if (this.gender === "female") {
      prefix = "Mrs.";
    } else {
      prefix = prompt("How should we address you");
    }

    return `Hello ${prefix} ${this.fullName}`;
  }
}

class Student extends Person {
  constructor(
    fullName,
    birthYear,
    gender,
    admissionYear,
    studentId,
    avarageGrade
  ) {
    super(fullName, birthYear, gender);
    this.admissionYear = admissionYear;
    this.studentId = studentId;
    this.avarageGrade = avarageGrade;
  }

  //   Setters

  set admissionYear(value) {
    // тут по хорошому рахунку потрібно валідувати дату
    this._admissionYear = value;
  }

  set studentId(value) {
    this._studentId = value;
  }

  set avarageGrade(value) {
    if (typeof value !== "number") {
      throw new TypeError("Avarage grade must be a number");
    }
    if (value > 100 || value < 0) {
      throw new RangeError("Avarage grade must [0; 100]");
    }
    this._avarageGrade = value;
  }

  //   Getters

  get admissionYear() {
    return this._admissionYear;
  }

  get studentId() {
    return this._studentId;
  }

  get avarageGrade() {
    return this._avarageGrade;
  }

  //   Methods

  isExcellentStudent() {
    // варіант 1
    // if(this.avarageGrade >= 90) {
    //     return true;
    // } else {
    //     return false;
    // }
    
    // варіант 2
    // умова? умова true : умова false
    // const result = this.avarageGrade >= 90 ? true : false;
    // return result;

    // варіант 3
    return this.avarageGrade >= 90;
  }
}

/*
1. Створюємо сеттер для поля
2. Використовуємо 
*/

const ivanov = new Person('Іванов Іван Іванович', 1985, 'male');
const petrov = new Person('Петров Петро Петрович', 1985, 'non-binary');

console.log(ivanov.greeting());

const student1 = new Student('Сидоров Сидр Сидорович', 1999, 'male', 2021, 'A12345', 95);
const student2 = new Student('John Doe', 1999, 'male', 2021, 'A12346', 85);
const student3 = new Student('Jane Doe', 2000, 'female', 2022, 'A13456', 70);
const student4 = new Student('Josh Doe', 2000, 'male', 2021, 'A12456', 77);

const students = [student1, student2, student3, student4];

/* Завдання:

Реалізувати статичний метод в класі Students

Цей метод приймає масив екземпляру класу Students, обчислює та повертає як результат роботи середній бал усіх студентів

*/