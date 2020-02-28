class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    };
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    //check params
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
      prev: null
    };
    let currentNode = this.head;
    this.traverseToIndex(index);
    newNode.next = currentNode.next;
    newNode.prev = currentNode;
    currentNode.next.prev = newNode;
    currentNode.next = newNode;

    this.length++;
  }

  remove(index) {
    if (index >= this.length) {
      return (index = this.length);
    }
    const currentNode = this.head;
    this.traverseToIndex(index - 1);
    const data = currentNode.next.value;
    currentNode.next = currentNode.next.next;
    return console.log(data);
  }

  traverseToIndex(index) {
    if (index => this.length) {
      return (index = this.length);
    }
    for (let i = 1; i < index; i++) {
      currentNode = currentNode.next;
    }
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const myLinkedList = new DoublyLinkedList(10);
// console.log(myLinkedList.printList());
myLinkedList.prepend(8);
// console.log(myLinkedList.printList());
myLinkedList.append(5);
// console.log(myLinkedList.printList());
myLinkedList.append(16);
myLinkedList.insert(1, 4);
// console.log(myLinkedList.printList());
console.log(myLinkedList);
console.log(myLinkedList.printList());
// myLinkedList.remove(2);
// console.log(myLinkedList.printList());
// myLinkedList.append(30);
// console.log(myLinkedList.printList());
