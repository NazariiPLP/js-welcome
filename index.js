function MyArray() {
  this.length = 0;
}

function MyArrayPrototype()  {
 this.push = function () {
    // значення додати у КІНЕЦЬ масиву
    argsArray = Array.from(arguments);
    for (let i = 0; i < argsArray.length; i++) {
      this[this.length] = argsArray[i];
      this.length++;
    }
    return this.length;
  },

 this.pop = function() {
    if(this.length > 0) {
      // 1. Зберегти останній елемент
      const lastItem = this[this.length - 1];
      // 2. Видалити останній елемент з масиву
      delete this[this.length - 1];
      // 3. Зменшити довжину масиву на 1
      this.length--;
      // 4. Повернути останній елемент
      return lastItem;
    } else {
      return undefined;
    }
  },

  this.forEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }
}

MyArray.prototype = new MyArrayPrototype; // прототипне посилання

const arr = new MyArray();
arr.push(1, 2, 3, 4, 5);

// Відконсольлогувати кваlрати кожного числа в масиві arr

arr.forEach((item) => {
console.log(item * item);
})

// Яка різниця між __proto__ та .protoype?

// __proto__ працює тільки тоді, коли ми літерально створили об'єкт
{
  //
}

// .prototype - коли 