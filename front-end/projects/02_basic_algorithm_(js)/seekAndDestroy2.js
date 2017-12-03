/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/

function destroyer(arr) {
    var args = Array.from(arguments).slice(1);
    return arr.filter(function (val) {
        return !args.includes(val);
    });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

/*
Declare a variable named args and set it equal to a new Array object from() the arguments passed into the function. On the same or next line, use the slice() method on args starting from the second index, 1. This separates the arguments used for filtering into their own array of args.

Return the filtered array, using includes() in the callback function to check if val is not in args; returning true to keep the value in the original array or false to remove it.
*/