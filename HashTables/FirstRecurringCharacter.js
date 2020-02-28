//Google Question
//Given an array1 = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array2 = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array3 = [2,3,4,5]:
//It should return undefined

array1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
array3 = [2, 3, 4, 5];
array4 = [2, 5, 5, 2, 3, 5, 1, 2, 4];

function firstRecurringCharacter(input) {
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    arr.push(0);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[input[i]] === 0) {
      arr[input[i]] = 1;
    } else if (arr[input[i]] === 1) {
      return input[i];
    }
  }
  return undefined;
}

console.log(firstRecurringCharacter(array1));
console.log(firstRecurringCharacter(array2));
console.log(firstRecurringCharacter(array3));
console.log(firstRecurringCharacter(array4));

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
