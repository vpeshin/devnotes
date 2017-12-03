/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
*/

// (declarative approach)

function largestOfFour(arr) {
  return arr.map(function(group){
    return group.reduce(function(prev, current) {
      return (current > prev) ? current : prev;
    }, 0);
  });
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

/*
- we map all items within the main array to a new array using Array.prototype.map() and return this array as the final result
- within each inner array, we reduce its contents down to a single value using Array.prototype.reduce()
- the callback function passed to the reduce method takes the previous value (or 0) and the current value and compares the two values
- if the current value is higher than the previous value we set it as the new previous value for comparison with the next item within the array or returns it to the map method callback if it's the last item
*/