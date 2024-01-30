// ООП

/* Загальні ідеї ООП

1. ООП збудоване навколо об'єктів.
2. Поділ потрібний для того, щоб можна було створювати, осблуговувати та перетворювати якісь частини програми, не впливаючи при цьому на інші.
3. Сенс об'єкта у тому, що він має якісь методи, тобто він вміє щось робити, при цьому, інші об'єкти вони не знають як він це робить
4. Об'єкт має поняття атрибуту і методу.
Атрибут - будь-які дані, які зберігаються всередині об'єкта.
Методи - будь-які дії, які можна здійснювати над об'єктом, атрибутами об'єкта.
Атрибути зазвичай виражаються змінними, а методи - функціями.
5. Об'єкти можна створювати за шаблоном - такі шаблони називають класами.

*/

// Геттери та сеттери - аксессори (від англ. access - доступ)

// Абстракція - коли ми зосереджуємося тільки на суттєвих для завдання деталях (коли описуємо об'єкт) і ігноруємо все інше.
// Чим менше характеристик у об'єкта, тим краще абстракція, але ключові характеристи не можна прибирати!

// Щоб працювати з абстракціями, використовують інтерфейси
// Інтерфейс - спосіб взаємодії з об'єктом, який визначає, які операції можна здійснити з цим об'єктом та які дані можна отримати або змінити

// Інкапсуляція - процесс об'єднання даних та методів в одному об'єкті і приховування деталей реалізації від користувача

// В чому різниця між інкапсуляцією і абстракцією?
// Інкапсуляція зосереджена на організації та приховуванні деталей реалізації об'єкта
// Абстракція спрощує складність системи шляхом виділення ключових аспектів та приховуванні незначних деталей

// Спадкування - здатність до копіювання, можливість описати новий клас на основі вже існуючого.

// Поліморфізм - дозволяє використовувати спільний інтерфейс (методи базового класу) через єкземпляри похідних класів
// Суть поліморфізму полягає у тому, що ми можемо один і той самий код використовувати для об'єктів різних класів

class Figure {
  // абстрактний клас
  constructor(sideQuantity) {
    this.sideQuantity = sideQuantity;
  }

  set sideQuantity(newValue) {
    if (newValue < 0) {
      throw new RangeError("Cannot be less than 0");
    }

    this._sideQuantity = newValue;
  }

  get sideQuantity() {
    return this._sideQuantity;
  }

  getArea() {}
}

class Triangle extends Figure {
  constructor(a, b, angle) {
    super(3);
    this.a = a;
    this.b = b;
    this.angle = angle;
  }

  set a(newValue) {
    if (newValue < 0) {
      throw new RangeError("Side cannot be less than 0");
    }

    this._a = newValue;
  }

  get a() {
    return this._a;
  }

  set b(newValue) {
    if (newValue < 0) {
      throw new RangeError("Side cannot be less than 0");
    }

    this._b = newValue;
  }

  get b() {
    return this._b;
  }

  set angle(newValue) {
    if (newValue < 0) {
      throw new RangeError("Angle cannot be less than 0");
    }

    this._angle = newValue;
  }

  get angle() {
    return this._angle;
  }

  getArea() {
    return this.a * this.b * Math.sin(this.angle);
  }
}

class Square extends Figure {
  constructor(a) {
    super(4);
    this.a = a;
  }

  set a(newValue) {
    if (newValue < 0) {
      throw new RangeError("Side cannot be less than 0");
    }

    this._a = newValue;
  }

  get a() {
    return this._a;
  }

  getArea() {
    return this.a * this.a; // this.a ** 2
  }
}

class Circle extends Figure {
  constructor(radius) {
    super(1);
    this.radius = radius;
  }

  set radius(newValue) {
    if (newValue < 0) {
      throw new RangeError("Radius cannot be less than 0");
    }

    this._radius = newValue;
  }

  get radius() {
    return this._radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

const square = new Square(4);
const triangle = new Triangle(5, 6, 45);
const circle = new Circle(5);

// Задача: напасати ОКРЕМУ ФУНКЦІЮ, яка буде приймати об'єкт певної фігури і буде викликати у цієї фігури метод getArea

function getFigureArea(figure) {
  if (figure instanceof Figure) {
    return figure.getArea();
  } else {
    throw new TypeError("Параметр не є фігурою");
  }
}

/*

Переваги

1. Візуально код стає простішим
2. Менше однакового коду
3. Складні програми пишуться простіше
4. Збільшується швидкість написання (достатньо швидко можемо прийти до мінімально працюючого протототипу)


Недоліки

1. Важко та почати працювати
2. Потребує більше пам'яті
3. Іноді продуктивність коду може бути досить низька
(із сучасними потужностями процесорів недолік №3 нівелюється)

*/
