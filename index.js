function MyArray() {
  this.length = 0;

  this.push = function (value) {
    // значення додати у КІНЕЦЬ масиву
    argsArray = Array.from(arguments);
    for (let i = 0; i < argsArray.length; i++) {
      this[this.length] = argsArray[i];
      this.length++;
    }
    return this.length;
  }

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
  }

  this.forEach = function() {

  }
}

const arr = new MyArray();
arr.push(1, 2, 3, 4, 5, 6);

