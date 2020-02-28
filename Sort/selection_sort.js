const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]; //O(n^2)

function selectionSort(array) {
  let indexBigger = 0;
  while (indexBigger < array.length) {
    let min = indexBigger;
    let temp = array[indexBigger];
    let index = indexBigger + 1;
    while (index < array.length) {
      if (array[index] < array[min]) {
        min = index;
      }
      index++;
    }
    array[indexBigger] = array[min];
    array[min] = temp;
    indexBigger++;
  }
  return array;
}
console.log(selectionSort(numbers));
