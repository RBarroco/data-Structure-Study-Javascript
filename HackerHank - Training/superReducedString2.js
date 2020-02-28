const s = 'baabc';

function superReducedString(s) {
  const arraySplited = s.split('');

  for (let j = 0; j < arraySplited.length; j++) {
    for (let i = 0; i < arraySplited.length; i++) {
      if (arraySplited[i] === arraySplited[i + 1]) {
        arraySplited.splice(i, 2);
        i = 0;
        j = 0;
        break;
      }
    }
  }
  if (arraySplited[0] === undefined) {
    return 'Empty String';
  }

  return arraySplited.join('');
}

console.log(superReducedString(s));
