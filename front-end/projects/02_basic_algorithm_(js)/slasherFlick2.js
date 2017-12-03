/*
Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.
*/

function slasher(arr, howMany) {

  // Return string after the amount chopped off.
  return arr.slice(howMany);

}

console.log(slasher([1, 2, 3], 2));

/*
This solution uses the slice() function.
The argument howMany is the number of elements to be removed starting with arr[0].
Modify the array with slice() and return it.
*/