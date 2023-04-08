class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items = this.items.sort((a, b) => a - b);
  }

  get(pos) {
    let respuesta = this.items[pos];
    if (!respuesta) {
      throw new Error('OutOfBounds');
    }
    return respuesta;
  }

  //->max() {
  // if (this.items < 1) {
  //   throw new Error('EmptySortedList');
  // }

  //-> let response = 0;
  //->this.items.array.forEach(item => {
  //->if (response < item) {
  //>response = item;
  //-->}
  //->});
  //->return response;
  //->}

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }

    let response = this.items[0];
    this.items.forEach(item => {
      if (response < item) {
        response = item;
      }
    });

    return response;
  }


  // min() { }
  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }

    let response = 0;
    this.items.forEach(item => {
      if (response > item) {
        response = item;
      }
    });

    return response;
  }

  sum() {
    let response = 0;
    for (let contador = 0; contador < this.items.length; contador++) {

      response = this.items[contador] + response;
    }
    return response;
  }

  avg() {

    let sum = this.sum();
    if (this.items.length === 0) {

      throw new Error('EmptySortedList');
    }
    return sum / this.items.length;



  }
}

module.exports = SortedList;
