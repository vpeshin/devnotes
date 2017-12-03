/**
 * Return the factorial of the provided integer.
 * If the integer is represented with the letter n, a factorial is the product of
 * all positive integers less than or equal to n.
 * For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
 */

function factorialize(num) {
    var result = 1;
    for (var i = 1; i <= num; i++) {
        result *= i;

    }
    return result;
}

console.log(factorialize(5));
