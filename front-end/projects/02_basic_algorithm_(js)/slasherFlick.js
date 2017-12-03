/*
Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.
*/

function slasher(arr, howMany) {
    // remove the head
    arr.splice(0, howMany);
    // return the remaining or the tail
    return arr;
}

console.log(slasher([1, 2, 3], 2));

/*
This solution uses the splice() function.
First argument, arr is the array to be modified.
Second argument, howMany is the number of elements to be removed starting with arr[0].
Modify the array with splice() and return it.
*/