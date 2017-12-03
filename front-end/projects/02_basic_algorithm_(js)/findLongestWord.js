/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/


function findLongestWord(str) {
    var arr = str.split(' ');
    var longest = 0;
    var count = 0;

    while(count < arr.length) {
        if(arr[count].length > longest) {
            longest = arr[count].length;
        }
        count++;
    }

    return longest;
}

var longestWord = findLongestWord("The quick brown fox jumped over the lazy dog");

console.log(longestWord);
