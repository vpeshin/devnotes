/*
* Return true if the given string is a palindrome. Otherwise, return false.
* A palindrome is a word or sentence that's spelled the same way both
* forward and backward, ignoring punctuation, case, and spacing.
*
* You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) 
* and turn everything lower case in order to check for palindromes.
*/

function palindrome(str) {
  // remove all non-alphanumeric characters
  str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  var str2 = str;

  var array = [];
  array = str2.split('');
  array.reverse();
  str2 = array.join('');

  if (str == str2) return true;
  else return false;
}

palindrome("eye");

palindrome("_eye"); // true
palindrome("race car") // true
palindrome("not a palindrome") // false