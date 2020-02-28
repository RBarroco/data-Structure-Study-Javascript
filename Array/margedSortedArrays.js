function mergeSortedArrays(arr1, arr2) {
  let a = 0;
  let j = 0;

  while (j < arr2.length) {
    if (arr1[a] < arr2[j]) {
      a++;
    } else if (arr1[a] === arr2[j]) {
      arr1[a] = arr2[j];
      a++;
    } else {
      arr1.length++;
      shiftElements(a, arr1);
      arr1[a] = arr2[j];
      j++;
    }
  }

  function shiftElements(index, arr) {
    for (let i = index; i < arr.length - 1; i++) {
      arr[i + 1] = arr[i];
    }
  }
  return arr1;
}

const result = mergeSortedArrays([0, 3], [1, 2, 3]);
console.log(result);
