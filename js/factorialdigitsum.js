/*
https://projecteuler.net/problem=20

#20--Factorial digit sum

n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!

Strategy:

Call a function to calculate n!
Convert the numeric answer to a string
var factorialSum = 0;
Loop through the string
  convert each character to a number
  factorialSum += number
Return factorialSum

*/

var bigInt = require("big-integer");

function nFactorial(n) {
  if (n == 1) {
    return 1;
  }
  else {
    return n * nFactorial(n-1);
  }
}

function factorialDigitSum(n) {
  var nFactorialString = "";
  var factorialSum = bigInt(0);

  var nFactorialNum = bigInt(nFactorial(n));
  nFactorialString = nFactorialNum.toString();
  console.log(nFactorialString);
  for (var i = 0; i < nFactorialString.length; i++) {
    factorialSum += parseInt(nFactorialString[i]);
  }
  return factorialSum;
}

var n = 100;
console.log(factorialDigitSum(n));
// 60
