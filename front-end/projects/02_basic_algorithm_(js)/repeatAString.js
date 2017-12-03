/*
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num <= 0) return str = "";
  else {
      return str.repeat(num);
  }
}

/*
function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : '';
}
*/

console.log(repeatStringNumTimes("abc", 3));