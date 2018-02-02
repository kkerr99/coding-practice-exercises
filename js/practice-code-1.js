// JavaScript practice examples

/*
Write a JavaScript function to calculate the nth root of a number.

Test Data :
console.log(nthroot(64, 2));
8
console.log(nthroot(64, -2));
0.125
*/
function nthroot (y, n) {
  return Math.pow(y, (1/n));
}
