//1.Divided into a number of subproblems that are smaller instances of the same problem.
//2. Each instance of the subproblem is identical in nature.
//3. The solutions of each subproblem can be combined to solve the problem at hand.

//Big chances of having stack overflow;
//Recursive function has two paths 1) the Recursion and 2) the base case to stop;

function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let total = 1;
  while (number > 0) {
    total = number * total;
    number--;
  }
  return total;
}

console.log(findFactorialRecursive(4));
console.log(findFactorialIterative(5));
