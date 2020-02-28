class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    console.log(this.data[index]);
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  deleteAtIndex(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push('2');
newArray.push('3');
newArray.push('4');
newArray.pop();
newArray.deleteAtIndex(1);

console.log(newArray);
newArray.get(0);
