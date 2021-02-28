//Queue Using Stack;
class Queue {
  constructor() {
    this.last = null;
    this.first = null;
    this.length = 0;
  }

  peek() {
    return this.last;
  }

  push(value) {
    let newNode = {
      value: value,
      next: null
    };
    if (this.length === 0) {
      this.last = newNode;
      this.first = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      return null;
    }
    if (this.length === 1) {
      const lastValue = this.first.value;
      this.first = null;
      this.last = null;
      this.length--;
      return lastValue;
    }
    const holdingPointer = this.first.value;
    this.first = this.first.next;
    this.length--;
    return holdingPointer;
  }
}

const queue = new Queue();
queue.push('renato');
queue.push('rogerio');
queue.push('victoria');
// console.log(queue);
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue);
