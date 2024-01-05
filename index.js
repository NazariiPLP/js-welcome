/*
Задача1
Зробити функцію-конструктор Country, яка приймає в якості аргументів:
- назва країни
- популяція (population)
- площа (area)
Спроектувати метод густоти населення
P.S. Густота наеселення = популяція цієї країни / площу цієї ж країни
*/

function Country(name, population, area) {
  this.name = name;
  this.population = population;
  this.area = area;
  this.density = function () {
    const populationDensity = this.population / this.area;
    return populationDensity + " people/square km";
  };
}

const country1 = new Country("Ukraine", 45000000, 603628);
console.log(country1.density());

const country2 = new Country("Italy", 59110000, 302073);
console.log(country2.density());

/*
Задача 2
Зробити функцію-конструктор Авто, яке має:
- назву
- максимальну швидкість
- поточну швидкість
Спроектувати методи:
- метод прискорення (accelearte) - приймає в якості аргумента певне прискорення
Зауважте, що при прискоренні, поточна швидкісь не може бути більшою за максимальну швидкість
- метод сповільнення (deaccelerate) - приймає в якості аргумента певне сповільнення
Зауважте, що при сповільненні, поточна швидкість не може бути менше за 0
- метод зупинки (stop)
*/

function Automobile(name, maxSpeed, cruiseSpeed) {
  this.name = name;
  this.maxSpeed = maxSpeed;
  this.cruiseSpeed = cruiseSpeed;

  this.accelerate = function (acceleration) {
    this.cruiseSpeed = this.cruiseSpeed + acceleration;
    if (this.cruiseSpeed > maxSpeed) {
      this.cruiseSpeed = maxSpeed;
      return this.cruiseSpeed + " km/h";
    } else if (this.cruiseSpeed <= maxSpeed) {
      return this.cruiseSpeed + " km/h";
    }
  };

  this.deaccelerate = function (slowdown) {
    this.cruiseSpeed = this.cruiseSpeed - slowdown;
    if (this.cruiseSpeed < 0) {
      this.cruiseSpeed = 0;
      return this.cruiseSpeed + " km/h";
    } else if (this.cruiseSpeed >= 0) {
      return this.cruiseSpeed + " km/h";
    }
  };

  this.stop = function () {
    this.cruiseSpeed = 0;
    return this.cruiseSpeed + " km/h";
  };
}

const automobile1 = new Automobile("Porsche", 340, 0);

console.log(automobile1.accelerate(150));
console.log(automobile1.deaccelerate(30));
console.log(automobile1.stop);
