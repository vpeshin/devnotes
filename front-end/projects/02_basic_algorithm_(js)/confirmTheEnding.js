/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    return str.substr(-target.length) === target;
}

console.log(confirmEnding("Bastian", "n"));


/*
The substr() method returns the characters in a string beginning at the specified location through the optional specified number of characters. substr operates through the end of the string if the second optional parameter is not specified. substr() calculates the index of first matching character from the string's end if the specified location is negative. Using the - operator in front of target.length makes it negative.

We use the method substr() with the negative value of target's length to extract the ending segment of str of the same size as target, compare it to target, and then return the value of this boolean expression.
*/