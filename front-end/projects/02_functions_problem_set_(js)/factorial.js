function factorial(x) {
  var result = 1;
  for (var i = 2; i <= x; i++) {
    result *= i;
  }
  return result;
}