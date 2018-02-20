/*
https://projecteuler.net/problem=16

#16--Power digit sum

2**15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2**1000 ?

Strategy:

var num = Math.pow(2, 1000);
convert num to a non-exponential number
Convert num to numString
var sum = 0;
Iterate through numString
  convert each character to number
  Add the number to the sum

*/

var bigInt = require("big-integer");

function powerDigitSum(exponent) {
  var num = bigInt(Math.pow(2, exponent));
  console.log("Number: " + num);
  var sum = bigInt(0);

  var numString = num.toString();
  console.log("numString: " + numString);
  for (var i = 0; i < numString.length; i++) {
    sum += Number(numString[i]);
  }
  return sum;

}

var exp = 1000;
console.log(powerDigitSum(exp));
// 2**5 = 32 --> 3 + 2 = 5
// 2**7 = 128 --> 1 + 2 + 8 = 11
