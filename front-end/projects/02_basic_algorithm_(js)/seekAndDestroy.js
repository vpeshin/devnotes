/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/

function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments);

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < args.length; j++) {
            if (arr[i] === args[j]) {
                delete arr[i];
            }
        }
    }
    return arr.filter(Boolean);
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

/*
Create an array of arguments using Array.prototype.slice.call() and store it in the variable args. We'll use this to check against arr.

Start a basic for loop to iterate through arr. Nest another for loop inside the first, changing the integer variable j and arr to args. This second loop will iterate through args .

Within the second loop create an if statement, checking strictly === that the current val of arr[i] is equal to args[j].

If the value at the current index is equal in both arrays, use delete to remove it from arr.

Outside of the nested loops: return the modified array using the Boolean object as a filter for any null's created by the delete operator.
*/