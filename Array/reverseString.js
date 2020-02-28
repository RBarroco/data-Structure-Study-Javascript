//renato solution
function reverse(str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return;
  }
  let j = str.length - 1;
  let array = [];
  for (let i = 0; i < str.length; i++, j--) {
    array[i] = str[j];
  }
  return array.join('');
}

//javascript solution
function reverse2(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

const reverse3 = str => [...str].reverse().join('');
