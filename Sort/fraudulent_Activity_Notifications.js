const arrayTest = [2, 3, 4, 2, 3, 6, 8, 4, 5];

function calculateMedian(arrayTest, d) {
  arrayTest.sort((a, b) => a - b);

  if (d % 2 === 0) {
    let median =
      (arrayTest[Math.floor(d / 2)] + arrayTest[Math.ceil(d / 2)]) / 2;
    return median;
  }

  if (d % 2 !== 0) {
    let median = arrayTest[Math.floor(d / 2 + 1)];
    return median;
  }
}

function activityNotifications(arrayTest, d) {
  const arrayLength = arrayTest.length;
  let notifications = 0;

  for (let i = 0; i + d < arrayLength; i++) {
    let temp = i + d;
    let j = i;
    let tempArray = [];
    while (j < temp) {
      tempArray.push(arrayTest[j]);
      j++;
    }

    let resMedian = calculateMedian(tempArray, d);
    if (arrayTest[i + d + 1]) {
      if (resMedian * 2 >= arrayTest[i + d + 1]) {
        notifications++;
      }
    }
  }
  return notifications;
}

console.log(activityNotifications(arrayTest, 5));
