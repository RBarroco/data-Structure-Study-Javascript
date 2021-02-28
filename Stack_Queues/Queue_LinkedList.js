//Queue linkedList;
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = {
      value: value,
      next: null
    };
    if (this.length === 0) {
      this.last = newNode;
      this.first = this.last;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (this.length === 0) {
      return 'Queue empty';
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
  }
}

const queue = new Queue();
queue.enqueue('Renato');
queue.enqueue('Victoria');
queue.enqueue('Rogerio');
queue.dequeue();
console.log(queue);
