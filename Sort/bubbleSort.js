//Bubble sort algorithms -> space complexity O(1) -> time complexity O(n^2)
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  let indexBigger = 0;
  while (indexBigger !== numbers.length - 1) {
    let index = 0;
    while (index < numbers.length - 1) {
      if (numbers[index] > numbers[index + 1]) {
        let swap;
        swap = numbers[index];
        numbers[index] = numbers[index + 1];
        numbers[index + 1] = swap;
      }
      index++;
    }

    indexBigger++;
  }
  return numbers;
}

bubbleSort(numbers);
console.log(numbers);
