/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

// Solution with Regular expression and Array of ASCII character codes
function rot13(str) {
    var rotCharArray = [];
    var regEx = /[A-Z]/;
    str = str.split("");
    for (var x in str) {
        if (regEx.test(str[x])) {
            // A more general approach
            // possible because of modular arithmetic
            // and cyclic nature of rot13 transform
            rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65);
        } else {
            rotCharArray.push(str[x].charCodeAt());
        }
    }
    str = String.fromCharCode.apply(String, rotCharArray);
    return str;
}

console.log(rot13("SERR PBQR PNZC"));

/*
An empty array is created in a variable called rotCharArray to store the character codes.
The regEx variable stores a regular expression for all uppercase letters from A to Z.
We split str into a character array and then use a for loop to loop through each character in the array.
Using an if statement, we test to see if the string only contains uppercase letters from A to Z.
If it returns true, we use the charCodeAt() function and rot13 transformation to return the correct value, otherwise we return the initial value.
We then return the string with the character codes from the rotCharArray variable.
*/