array1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
array3 = [2, 3, 4, 5];
array4 = [2, 5, 5, 2, 3, 5, 1, 2, 4];

function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
    console.log(map);
  }
}

console.log(firstRecurringCharacter2(array1));
console.log(firstRecurringCharacter2(array2));
console.log(firstRecurringCharacter2(array3));
console.log(firstRecurringCharacter2(array4));
