//Implement a function that reverses a string using iteration...and then recursion!

function reverseString(str) {
  if (str === '') {
    return '';
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
    //cut onwards and print backwards;
  }
}

console.log(reverseString('yoyo mastery'));
//should return: 'yretsam oyoy'
