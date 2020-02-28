const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const hello = numbers.unshift(numbers.splice(2, 1)[0]);
console.log(hello);
console.log(numbers);
