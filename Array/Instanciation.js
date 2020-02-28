class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`${this.name} hello, ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }

  play() {
    console.log(`Weeee ${this.type}`);
  }
}

const wizard1 = new Wizard('Renato', 'Warrior');
const wizard2 = new Wizard('Victoria', 'Magic');

console.log(wizard2);
console.log(wizard2.introduce());
