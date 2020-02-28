const s = 'saveChangesInTheEditor';

function camelcase(s) {
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
      counter++;
    }
  }
  return counter + 1;
}

console.log(camelcase(s));
