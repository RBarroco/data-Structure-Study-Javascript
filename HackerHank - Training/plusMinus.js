let arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  const lengthArray = arr.length;
  let counterPositive = 0;
  let counterNegative = 0;
  let counterZero = 0;
  let firstRatio = 0;
  let secondRatio = 0;
  let thirdRatio = 0;

  for (let i = 0; i < lengthArray; i++) {
    if (arr[i] < 0) {
      counterNegative++;
    }
    if (arr[i] > 0) {
      counterPositive++;
    }
    if (arr[i] === 0) {
      counterZero++;
    }
  }
  firstRatio = (counterNegative / lengthArray).toFixed(6);
  secondRatio = (counterPositive / lengthArray).toFixed(6);
  thirdRatio = (counterZero / lengthArray).toFixed(6);

  console.log(firstRatio);
  console.log(secondRatio);
  console.log(thirdRatio);
}

plusMinus(arr);
