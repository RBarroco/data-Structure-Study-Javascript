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
    //  let i = 1;
    //  let currentNode = this.first;
    //  while (i !== this.length - 1) {
    //    currentNode = currentNode.next;
    //    i++;
    //  }
    const holdingPointer = this.first.value;
    this.first = this.first.next;
    //  const holdingPointer = currentNode.next;
    //  currentNode.next = null;
    //  this.last = currentNode;
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
