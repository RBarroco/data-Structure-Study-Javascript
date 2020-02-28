class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
  }

  pop() {
    this.array.pop();
  }
}
