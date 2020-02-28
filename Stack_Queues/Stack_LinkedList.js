class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    const newNode = {
      value: value,
      next: null
    };

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
  }

  peek() {
    console.log(this.top);
  }

  pop() {
    if (this.length === 0) {
      return 'stack empty';
    } else {
      if (this.top === this.bottom) {
        this.bottom = null;
      }
      // const holdingPointer = this.top;
      this.top = this.top.next;
      this.length--;
    }
  }
  //isEmpty
}

const stack = new Stack();
// console.log(stack);
stack.push('google');
stack.push('renato');
stack.push('victoria');
// stack.peek();
// console.log(stack);
stack.pop();
stack.pop();
console.log(stack);
