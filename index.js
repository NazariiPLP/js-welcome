/*
Розробка для креування книжковим магазином

Предметна область: В книжкому магазині є багато книг. Ми їх продаємо

Всі книги модна представити у вигляді об'єкта з однаковою структорою.

-->> Задача: створити конструктор для об'єктів для представлення книг з наступними властивостями:
Назва книги, автор, рік видання, кількість сторінок, ціна.
Спроектувати методи для отримання і встановлення значень цих властивостей.

-->> Задача 2: потрібно зробити для всіх книг метод, який повертає ціну книги, але зі знижкою.
*/

function Book(title, author, year, pages, price) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
  this.price = price;

  this.getTitle = function () {
    return this.title;
  };

  this.getAuthor = function () {
    return this.author;
  };

  this.getYear = function () {
    return this.year;
  };

  this.getPages = function () {
    return this.pages;
  };

  this.getPrice = function () {
    return this.price;
  };

  this.setTitle = function (newTitle) {
    this.title = newTitle;
  };

  this.setAuthor = function (newAuthor) {
    this.author = newAuthor;
  };

  this.setYear = function (newYear) {
    this.year = newYear;
  };

  this.setPages = function (newPages) {
    this.pages = newPages;
  };

  this.setPrice = function (newPrice) {
    this.price + newPrice;
  };

  this.calculateDiscountedPrice = function (discountPercentage) {
    const DiscountedPrice =
      this.price - this.price * (discountPercentage / 100);
    return DiscountedPrice;
  };
}

const book1 = new Book("Чотири вітри", "Крістін Генна", 2020, 600, 450);

// console.log(book1.getTitle());
// console.log(book1.getAuthor());
// console.log(book1.getYear());
// console.log(book1.getPages());
// console.log(book1.getPrice());

// book1.setTitle("New Title");
// book1.setAuthor("New Author");
// book1.setYear(2025);
// book1.setPages(500);
// book1.setPrice(350);

console.log(book1.calculateDiscountedPrice(50));
