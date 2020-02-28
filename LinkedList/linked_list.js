// add a method reverse() to the linked list that reverses the entire list of nodes

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
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
  insert(index, value) {
    //Check for proper parameters;
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null
    };
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    // Check Parameters
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
  reverse() {
    let count = 0;
    let currentNode = this.head;
    let headNode = this.head;
    while (currentNode !== this.tail) {
      currentNode = currentNode.next;
      count++;
    }
    this.head = currentNode;
    while (count) {
      let prevNode = headNode;
      for (let i = 1; i < count; i++) {
        prevNode = prevNode.next;
      }

      currentNode.next = prevNode;
      currentNode = prevNode;
      count--;
    }
    this.tail = currentNode;
    currentNode.next = null;

    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
console.log(myLinkedList.printList());
// myLinkedList.remove(2);
myLinkedList.reverse();
console.log(myLinkedList.printList());
