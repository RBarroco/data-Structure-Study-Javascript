function fibonacciIterative(n) {
  if (n <= 0) {
    return 0;
  }

  if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else if (n === 3) {
    return 2;
  }
  arr = [0, 1];
  let index = 2;
  while (index < n) {
    arr[index] = arr[index - 1] + arr[index - 2];
    index++;
  }
  return arr[n - 1] + arr[n - 2];
}
console.log(fibonacciIterative(8));

function fibonacciIterativeRecursive(n) {
  if (n === 2) {
    return 1;
  } else if (n === 3) {
    return 2;
  }
  return (
    fibonacciIterativeRecursive(n - 1) + fibonacciIterativeRecursive(n - 2)
  );
}
console.log(fibonacciIterativeRecursive(7));
