const arrayXTest = [2, 3, 4, 2, 3, 6, 8, 4, 5];

function calculateMedian(arrayTest, d) {
  arrayTest.sort((a, b) => a - b);

  if (d % 2 === 0) {
    let median =
      (arrayTest[Math.floor(d / 2)] + arrayTest[Math.floor(d / 2 + 1)]) / 2;
    return median;
  }

  if (d % 2 !== 0) {
    let median = arrayTest[Math.floor(d / 2 + 1)];
    return median;
  }
}

const value = calculateMedian(arrayXTest, 9);

console.log(value);
