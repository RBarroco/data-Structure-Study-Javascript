let myTestArray = [1, 2, 3, 4, 5, 6];

const sliceMethod = myTestArray.slice(1, 2);

console.log('Sliced Array: ', sliceMethod);
console.log('Normal Array: ', myTestArray);

let myTestArray2 = [1, 2, 3, 4, 5, 6];

const spliceMethod = myTestArray2.splice(1, 0);

console.log('Spliced Array: ', spliceMethod);
console.log('Normal Array: ', myTestArray2);

let testString = 'Renato';
let splitedString = testString.split('');
console.log(splitedString);
console.log(Number(splitedString[0]));

let myTestArray3 = [1, 2, 3, 4, 5, 6];

const found = myTestArray3.find(element => {
  return element > 4;
});

console.log(found);

let myTestArray4 = [1, 2, 3, 4, 5, 6];

const objectIterator = myTestArray4.keys();

for (x of objectIterator) {
  console.log(x);
}

const stringTest = 'string';

console.log(stringTest.substr(1, 4));
console.log(stringTest);

const stringTest1 = 'string';

console.log(stringTest1.substring(1, 4));
console.log(stringTest1);

const stringTest2 = 'string';

console.log(stringTest2.slice(1, 4));
console.log(stringTest2);
