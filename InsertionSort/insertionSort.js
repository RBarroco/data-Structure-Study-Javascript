function comparator(a, b) {
  return a - b;
}

function insertionBinarySort(array, cmp) {
  cmp = cmp || comparator;
  var current;
  var middle;
  var left;
  var right;
  for (var i = 1; i < array.length; i += 1) {
    current = array[i];
    left = 0;
    right = i;
    middle = Math.floor((left + right) / 2);
    while (left <= right) {
      if (cmp(array[middle], current) <= 0) {
        left = middle + 1;
      } else if (cmp(array[middle], current) > 0) {
        right = middle - 1;
      }
      middle = Math.floor((right + left) / 2);
    }
    for (var j = i; j > left; j -= 1) {
      array[j] = array[j - 1];
    }
    array[j] = current;
  }
  return array;
}
