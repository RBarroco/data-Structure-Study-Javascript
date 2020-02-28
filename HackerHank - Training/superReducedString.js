const s =
  'kagoyzkgfjnyvjewazalxngpdcfahneqoqgiyjgpzobhaghmgzmnwcmeykqzgajlmuersanpdtmrzibswswzbjqytgfewi';

function superReducedString(s) {
  const arraySplited = s.split('');
  const arrayLength = arraySplited.length;
  let cacheObject = {};

  for (let i = 0; i < arrayLength; i++) {
    console.log(cacheObject);
    if (cacheObject[arraySplited[i]]) {
      delete cacheObject[arraySplited[i]];
    } else {
      cacheObject[arraySplited[i]] = arraySplited[i];
    }
  }
  const arrayValues = Object.values(cacheObject);

  if (arrayValues[0] === undefined) {
    return 'Empty String';
  }
  return arrayValues.join('');
}

console.log(superReducedString(s));
