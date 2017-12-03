/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
    var newArr = [];
    while (arr.length) {
        newArr.push(arr.splice(0, size));
    }
    return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

/*
Firstly, we create a variable. newArr is an empty array which we will push to.
Our while loop loops until the length of the array in our test is not 0.
Inside our loop, we push to the newArr array using arr.splice(0, size).
For each iteration of while loop, it deletes size number of elements from the front of arr and push them as an array to newArr.
Finally, we return the value of newArr.
*/