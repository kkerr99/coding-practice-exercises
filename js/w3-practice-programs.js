// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

/*
4. Write a JavaScript program to find the area of a triangle where lengths of
the three of its sides are 5, 6, 7.
*/
function triangleArea() {
  var a = 5;
  var b = 6;
  var c = 7;
  var s = (a + b + c) / 2;
  var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log("The area is: " + area);
}

triangleArea();

//https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
/*
1. Write a JavaScript function that reverse a number.
Example x = 32243;
Expected Output : 34223
*/
function reverseNum1() {
  var forwardNumber = 32243;
  var forwardString = forwardNumber.toString();
  var reverseString = "";
  for (i = forwardString.length - 1; i >= 0; i--)
  {
    reverseString += forwardString[i];
  }
  var reverseNumber = Number(reverseString);
  console.log("Number: " + forwardNumber);
  console.log("Reversed number: " + reverseNumber);
}

reverseNum1();

/*
1. Rewrite reverseNum1 by reversing loop
Example x = 32243;
Expected Output : 34223
*/
function reverseNum2() {
  var forwardNumber = 32243;
  var forwardString = forwardNumber.toString();
  var reverseString = "";
  for (i = 0; i < forwardString.length; i++)
  {
    reverseString = forwardString[i] + reverseString;
  }
  var reverseNumber = Number(reverseString);
  console.log("Number: " + forwardNumber);
  console.log("Reversed number: " + reverseNumber);
}

reverseNum2();

/*
1. Rewrite reverseNum1 by using more elegant loop
Example x = 32243;
Expected Output : 34223
*/
function reverseNum3() {
  var forwardNumber = 32243;
  var forwardString = forwardNumber.toString();
  var reverseString = "";
  for (i = 0; i < forwardString.length; i++)
  {
    reverseString = forwardString[i] + reverseString;
  }
  var reverseNumber = Number(reverseString);
  console.log("Number: " + forwardNumber);
  console.log("Reversed number: " + reverseNumber);
}

reverseNum3();

/*
8. Write a JavaScript function that accepts a number as a parameter and check
whether the number is prime or not.
Note : A prime number (or a prime) is a natural number greater than 1 that
has no positive divisors other than 1 and itself.

Test Suite

isPrime(1);   false
isPrime(-0.5);  false
isPrime(-3);  false
isPrime(3.4); false
isPrime(2);   true
isPrime(3);   true
isPrime(9);   false
isPrime(11);  true
isPrime(14);  false
isPrime(15);  false
isPrime(17);  true
*/
function isPrime(num) {
  // If num is not an integer or if num <= 1, it is not prime
  if ( (Math.round(num) != num) || (num <= 1) ) {
    return false;
  }
  // Else check if num has any positive divisors besides 1 and itself
  var positiveDivisor = true;
  for (i = 2; i < num; i++) {
    if ((num % i) == 0) {
      positiveDivisor = false;
      break;
    }
  }
  return positiveDivisor;
}

/*
24. Write a JavaScript function to apply Bubble Sort algorithm.
Note : According to wikipedia "Bubble sort, sometimes referred to as sinking
sort, is a simple sorting algorithm that works by repeatedly stepping
through the list to be sorted, comparing each pair of adjacent items and
swapping them if they are in the wrong order".

Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
*/
function bubbleSort(array) {
  var length = array.length;
  // Print unsorted array
  console.log("Unsorted: " + array);
  // Passes through array
  for (var i = 0; i < length-1; i++) {
    var x = 0;
    var y = 0;
    // Do adjacent pair swaps
    for (var j = 0; j < length - 1; j++)
    {
      x = array[j];
      y = array[j+1];
      // If x > y, swap array pair
      if (x > y) {
        arr[j] = y;
        arr[j+1] = x;
      }
    }
  }
  // Print array
  console.log("Sorted: " + array);
}

var arr = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
bubbleSort(arr);

/*
2.2 FizzBuzz
Use console.log to print all the numbers from 1 to 100, with two exceptions.
1) For numbers divisible by 3, print "Fizz" instead of the number.
2) For numbers divisible by 5 (and not 3), print "Buzz" instead.
After you have that working, modify program to print "FizzBuzz" for numbers that
are divisible by both 3 and 5.

Test Suite

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
Fizz
*/

function fizzBuzz() {
  // Print all numbers from 1 to 100, with exceptions
  var MAX = 100;
  for (var i = 1; i <= MAX; i++) {
    // For numbers divisible by 3, print "Fizz" instead of the number
    if (i % 3 == 0) {
      console.log("Fizz");
    }
    // For numbers divisible by 5 (and not 3), print "Buzz" instead.
    else if (i % 5 == 0) {
      console.log("Buzz");
    }
    // Else, print the number
    else {
      console.log(i);
    }
  }
}

fizzBuzz();

/*
2.2a FizzBuzz
After you have FizzBuzz working, modify program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5.

Test Suite

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
*/

function fizzBuzz() {
  // Print all numbers from 1 to 100, with exceptions
  var MAX = 100;
  for (var i = 1; i <= MAX; i++) {
    // For numbers divisible by both 3 and 5, print "FizzBuzz"
    if ( (i % 3 == 0) && (i % 5 == 0)) {
      console.log("FizzBuzz");
    }
    // For numbers divisible only by 3, print "Fizz"
    else if (i % 3 == 0) {
      console.log("Fizz");
    }
    // For numbers divisible only by 5, print "Buzz"
    else if (i % 5 == 0) {
      console.log("Buzz");
    }
    // Else, print the number
    else {
      console.log(i);
    }
  }
}

fizzBuzz();

/*
2.1 Looping a Triangle
Write a loop that makes seven calls to console.log() to output the following
triangle:
#
##
###
####
#####
######
#######
*/
function loopTriangle(size, char) {
  // A traingle has n rows and columns
  // For an nth row, there are n columns
  // Loop through the rows
  for (var x = 1; x <= size; x++) {
    var row = "";
    // Build the row
    for (var y = 1; y <= x; y++) {
      row += char;
    }
    // Print the row
    console.log(row);
  }
}

var SIZE = 30;
var CHAR = "%";

loopTriangle(SIZE, CHAR);

/*
2.3 Chess Board
Write a program that creates a string that represents an 8x8 grid, using
newline chars to separate lines.
At each position of the grid there is either a space or a "#" character.
The chars should form a chess board.

Output:

# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
*/

function printChessBoard() {
  var GRIDSIZE = 8;
  var CHAR = "#";
  var SOLID = CHAR;
  var SPACE = " ";
  // There are GRIDSIZE rows and columns
  // Loop through the rows
  var grid = "";
  for (var x = 0; x < GRIDSIZE; x++) {
    // Loop through the columns
    for (var y = 0; y < GRIDSIZE; y++) {
      var square = "";
      // Build the row

      // For even rows
      if (x % 2 == 0) {
        // For even columns
        if (y % 2 == 0) {
          square = SOLID;
        }
        // For odd columns
        else {
          square = SPACE;
        }
      }

      // For odd rows
      else {
        // For even columns
        if (y % 2 == 0) {
          square = SPACE;
        }
        // For odd columns
        else {
          square = SOLID;
        }
      }
      grid += square;
    }
    // Finish each row
    grid += "\n";
  }
  // Print the grid
  console.log(grid);
}

printChessBoard();

/*
https://projecteuler.net/problem=1

Multiples of 3 and 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get
3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

/*
Return the sum of an array

Tests

var testArray = [4, 5, 6];
console.log(sumArray(testArray));
  15
*/
function sumArray(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

/*
Return all the natural numbers below limit that are multiples of multi1 or multi2.

Tests

var multi1 = 3;
var multi2 = 5;
var limit = 10;
var multipleArray = findMultiples(multi1, multi2, limit)
console.log("Multiples of " + multi1 + " and " + multi2 +": " + multipleArray);
console.log("Sum of multiples: " + sumArray(multipleArray));

var multi1 = 3;
var multi2 = 5;
var limit = 1000;
var multipleArray = findMultiples(multi1, multi2, limit)
console.log("Multiples of " + multi1 + " and " + multi2 +": " + multipleArray);
console.log("Sum of multiples: " + sumArray(multipleArray));

*/
function findMultiples(multi1, multi2, limit) {
  // Loop through set of natural numbers
  var array = [];
  for (var i = 1; i < limit; i++) {
    // If i is a multiple of multi1 or multi2, add to the array
    if ( (i % multi1 == 0) || (i % multi2 == 0) ) {
      array.push(i);
    }
  }
  return array;
}

var multi1 = 3;
var multi2 = 5;
var limit = 1000;
var multipleArray = findMultiples(multi1, multi2, limit);
console.log("Multiples of " + multi1 + " and " + multi2 +": " + multipleArray);
console.log("Sum of multiples: " + sumArray(multipleArray));


/*
https://projecteuler.net/problem=1

Multiples of 3 and 5 (REWRITTEN TO USE ANY NUMBER OF MULTIPLES)

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get
3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

/*
Return the sum of an array

Tests

var testArray = [4, 5, 6];
console.log(sumArray(testArray));
  15
*/
function sumArray(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

/*
Return all the natural numbers below limit that are multiples of multi1 or multi2.

Tests

var multi1 = 3;
var multi2 = 5;
var limit = 10;
findMultiples(multi1, multi2, limit)
console.log("Multiples of " + multi1 + " and " + multi2 +": " + multipleArray);
console.log("Sum of multiples: " + sumArray(multipleArray));

var multi1 = 3;
var multi2 = 5;
var limit = 10;
findMultiples(multi1, multi2, limit)
console.log("Multiples of " + multi1 + " and " + multi2 +": " + multipleArray);
console.log("Sum of multiples: " + sumArray(multipleArray));

var multi1 = 3;
var multi2 = 5;
var limit = 1000;
var multipleArray = findMultiples(multi1, multi2, limit)
console.log("Multiples of " + multi1 + " and " + multi2 +": " + multipleArray);
console.log("Sum of multiples: " + sumArray(multipleArray));

*/
function findMultiples(multi1, multi2, limit) {
  // Loop through set of natural numbers
  var multipleArray = [];
  for (var i = 1; i < arguments[arguments.length - 1]; i++) {
    // For every number in the list, test against all the multiple test numbers
    var isMultiple = false;
    for (var j = 0; j < arguments.length - 1; j++) {
      if (i % arguments[j] == 0) {
        isMultiple = true;
      }
    }
    // If the number is a multiple of any of the multiple test numbers, add it
    // to the array
    if (isMultiple == true) {
      multipleArray.push(i);
    }
  }
  // Print the output
  console.log(">1 and <" + arguments[arguments.length - 1] + ", the multiples of:");
  for (var k = 0; k < arguments.length - 1; k++) {
    console.log(arguments[k]);
  }
  console.log("are:");
  for (var l = 0; l < multipleArray.length; l++) {
    console.log(multipleArray[l]);
  }
  console.log("The sum of the multiples is: " + sumArray(multipleArray));
}


var multi1 = 3;
var multi2 = 5;
var multi3 = 11;
var limit = 1000;
findMultiples(multi1, multi2, multi3, limit);

/*
https://projecteuler.net/problem=2
Even Fibonacci numbers

Each new term in the Fibonacci sequence is generated by adding the previous two terms.
By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four
million, find the sum of the even-valued terms.

Test Suite

For values that do not exceed 90, the even-valued terms are:
2 8 34
The sume of these even-valued terms are:
44


var fibArray = [];
var maxTermValue = 90;
fibArray = fibonacciGenerator(maxTermValue);
console.log(sumEvenValueTerms(fibArray));
--> 44

var fibArray = [];
var maxTermValue = 4000000;
fibArray = fibonacciGenerator(maxTermValue);
console.log(sumEvenValueTerms(fibArray));
*/

// Generate a Fibonacci sequence with values that do not exceed maxTermValue
function fibonacciGenerator(maxTermValue) {
  var fibSeq = [1, 2];
  // Generate a sequence until a term exceeds maxTermValue
  var i = 0;
  var newTerm = 3;
  while (newTerm <= maxTermValue) {
    fibSeq[i + 2] = newTerm;
    i++;
    newTerm = fibSeq[i] + fibSeq[i + 1];
  }
  return fibSeq;
}

function sumEvenValueTerms(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      sum += array[i];
    }
  }
  return sum;
}

var fibArray = [];
var fibArray = [];
var maxTermValue = 4000000;
fibArray = fibonacciGenerator(maxTermValue);
console.log(sumEvenValueTerms(fibArray));

/*
https://projecteuler.net/problem=3

Largest prime factor

The prime factors of 13195 are 5, 7, 13 and 29.
LPF = 29

What is the largest prime factor of the number 600851475143 ?
*/

function isPrime(x) {
  for (var i = 2; i < x; i++) {
    if (x % i == 0) {
      return false;
    }
  }
  return true;
}

function factor(x) {
  var factors = [];
  for (var i = 2; i < x; i++) {
    if (x % i == 0) {
      factors[0] = i;
      factors[1] = x / i;
      return factors;
    }
  }
}

function findPrimeFactors(x) {
  var primeFactors = [];
  function findFactors(x) {
    if (isPrime(x)) {
      return primeFactors.push(x);
    }
    else {
      var factors = factor(x);
      return findFactors(factors[0]) && findFactors(factors[1]);
    }
  }
  findFactors(x);
  return primeFactors;
}


var x = 600851475143;
var pFactors = [];
pFactors = findPrimeFactors(x);
console.log(x);
console.log("Prime Factors: " + pFactors);
// Sort the array into descending order
pFactors.sort(function(a,b){return b-a});
console.log("Largest Prime Factor: " + pFactors[0]);

/*
https://projecteuler.net/problem=4

Largest palindrome product

A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is
9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

function isPalindrome(x) {
  var forwardString = x.toString();
  var reverseString = "";
  for (var i = forwardString.length - 1; i >= 0; i--) {
    reverseString += forwardString[i];
  }
  if (forwardString === reverseString) return true;
  else return false;
}

function findLargestPalindrome() {
  var ARRAYSIZE = 1000;
  var largestPalindrome = [0, 0, 0];
  // Multiply each value of array 1 with each value of array 2
  var product = 0;
  for (var x = 0; x < ARRAYSIZE; x++) {
    for (var y = 0; y < ARRAYSIZE; y++) {
      product = x * y;
      // Is the product a palindrome and larger than the current largest palindrome?
      // If so, record the largest palindrome and its factors
      if (isPalindrome(product) && product > largestPalindrome[0]) {
        largestPalindrome[0] = product;
        largestPalindrome[1] = x;
        largestPalindrome[2] = y;
      }
    }
  }
  // Print the largest palindrome and its factors
  console.log(largestPalindrome[0] + " = " + largestPalindrome[1]
    + " * " + largestPalindrome[2]);
}

findLargestPalindrome();

/*
https://projecteuler.net/problem=5

Smallest multiple

2520 is the smallest number that can be divided by each of the numbers from
1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the
numbers from 1 to 20?
*/
function numEvenlyDivisible(x, maxNumber) {
  var evenlyDivisbile = true;
  for (var j = 1; j <= maxNumber; j++) {
    evenlyDivisbile *= (x % j == 0);
  }
  return evenlyDivisbile;
}


function findSmallestMultiple(maxNumber) {
  var i = 1;
  while (!numEvenlyDivisible(i, maxNumber)) {
    ++i;
  }
  return i;
}

var MAX = 20;
console.log(findSmallestMultiple(MAX));

/*
https://projecteuler.net/problem=6

Sum square difference

Find the difference between the sum of the squares of the first
one hundred natural numbers and the square of the sum.
*/

// x = The sum of the squares of the first 100 natural numbers
// y = The square of the sum of the first 100 natural numbers
// z = y - x
// Find z

function sumOfSquares(max) {
  var sum = 0;
  for (var i = 1; i <= max; i++) {
    sum += Math.pow(i, 2);
  }
  return sum;
}

function squareOfSum(max) {
  var sum = 0;
  var squareOfSum = 0;
  for (var j = 1; j <= max; j++) {
    sum += j;
  }
  squareOfSum = Math.pow(sum, 2);
  return squareOfSum;
}

function diffOfSquaresAndSum(max) {
  var x = 0;
  var y = 0;
  var z = 0;

  x = sumOfSquares(max);
  y = squareOfSum(max);
  z = y - x;
  return z;
}

var MAX = 100;
console.log(diffOfSquaresAndSum(MAX));

/*
https://projecteuler.net/problem=7

10001st prime

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
that the 6th prime is 13.

What is the 10 001st prime number?

*/

// Generate 10001 prime numbers
// Return the last prime to be generated

function isPrime(x) {
  if (x === 1) return false;
  if (x === 2) return true;
  for (var j = 2; j < x; j++) {
    if (x % j == 0) {
      return false;
    }
  }
  return true;
}

function generateNthPrime(n) {
  // A prime is an integer > 1 that is evenly divisible only by 1 and itself
  var primeCount = 0;
  var prime = 0;
  var i = 1;

  while (primeCount < n) {
    if (isPrime(i)) {
      prime = i;
      primeCount++;
    }
    i++;
  }
  return prime;
}

var N = 10001;
console.log(generateNthPrime(N));
// 13

/*
https://projecteuler.net/problem=8

Largest product in a series

The four adjacent digits in the 1000-digit number that have the greatest
product are 9 × 9 × 8 × 9 = 5832.

Find the thirteen adjacent digits in the 1000-digit number that have
the greatest product.

What is the value of this product?

73167176531330624919225119674426574742355349194934
96983520312774506326239578318016984801869478851843
85861560789112949495459501737958331952853208805511
12540698747158523863050715693290963295227443043557
66896648950445244523161731856403098711121722383113
62229893423380308135336276614282806444486645238749
30358907296290491560440772390713810515859307960866
70172427121883998797908792274921901699720888093776
65727333001053367881220235421809751254540594752243
52584907711670556013604839586446706324415722155397
53697817977846174064955149290862569321978468622482
83972241375657056057490261407972968652414535100474
82166370484403199890008895243450658541227588666881
16427171479924442928230863465674813919123162824586
17866458359124566529476545682848912883142607690042
24219022671055626321111109370544217506941658960408
07198403850962455444362981230987879927244284909188
84580156166097919133875499200524063689912560717606
05886116467109405077541002256983155200055935729725
71636269561882670428252483600823257530420752963450

*/

var numString = "73167176531330624919225119674426574742355349194934" +
"96983520312774506326239578318016984801869478851843" +
"85861560789112949495459501737958331952853208805511" +
"12540698747158523863050715693290963295227443043557" +
"66896648950445244523161731856403098711121722383113" +
"62229893423380308135336276614282806444486645238749" +
"30358907296290491560440772390713810515859307960866" +
"70172427121883998797908792274921901699720888093776" +
"65727333001053367881220235421809751254540594752243" +
"52584907711670556013604839586446706324415722155397" +
"53697817977846174064955149290862569321978468622482" +
"83972241375657056057490261407972968652414535100474" +
"82166370484403199890008895243450658541227588666881" +
"16427171479924442928230863465674813919123162824586" +
"17866458359124566529476545682848912883142607690042" +
"24219022671055626321111109370544217506941658960408" +
"07198403850962455444362981230987879927244284909188" +
"84580156166097919133875499200524063689912560717606" +
"05886116467109405077541002256983155200055935729725" +
"71636269561882670428252483600823257530420752963450";


// Loop through the string, convert the characters to numbers and store in numArray
// i = 0;
// maxProduct = 0;
// maxProductCounter = 0;
// do
//    calculate product of numArray[i], numArray[i+1] ... numArray[i+3]
//    if product > maxProduct
//      maxProduct = product;
//      maxProductCounter = i;
//    ++i
// while ( (i + 3) <= numArray.length - 1) )
// return maxProduct

function largestProduct(productSize) {
  var numArray = [];
  var maxProduct = 0;
  var maxProductCounter = 0;
  var answer = "";

  for (var i = 0; i < numString.length; i++) {
    numArray[i] = Number(numString[i]);
  }

  var j = 0;
  do {
    var product = 1;
    // Calculate the product of the window
    for (var k = 0; k < productSize; k++) {
      product *= numArray[j + k];
    }
    if (product >= maxProduct) {
      maxProduct = product;
      maxProductCounter = j;
    }
    j++;
  } while ( (j + 3) <= numArray.length - 1);

  // Print the result
  for (var l = 0; l < productSize; l++) {
    answer += numArray[maxProductCounter + l];
    if (l <= productSize - 2) answer += " * ";
    else answer += " = ";
  }
  answer += maxProduct;
  console.log(answer);
}

var SIZE = 13;
largestProduct(SIZE);

/*
https://projecteuler.net/problem=9

Special Pythagorean triplet

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which
a**2 + b**2 = c**2

For example, 3**2 + 4**2 = 9 + 16 = 25 = 5**2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

Solving for:

a**2 + b**2 = c**2
a + b + c = 1000
*/

function pythagoreanTriplet(sum) {
  for (var i = 1; i <= 1000; i++) {
    for (var j = 1; j <= 1000; j++) {
      for (var k = 1; k <= 1000; k++) {
        if ((i + j + k)  == sum) {
          if (Math.pow(i, 2) + Math.pow(j, 2) == Math.pow(k, 2)) {
            console.log(Math.pow(i, 2) + " * " + Math.pow(j, 2) + " = " + Math.pow(k, 2));
            console.log(i + " + " + j + " + " + k + " = " + sum);
            console.log(i + " * " + j + " * " + k + " = " + (i * j * k));
            return;
          }
        }
      }
    }
  }
}

var SUM = 1000;
pythagoreanTriplet(SUM);

/*
https://projecteuler.net/problem=10

Summation of primes

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.

Strategy:

primeSum = 0;
Write isPrime() function
Loop (i) through all natural numbers, 1 ... max - 1
  If isPrime(i)
    add i to primeSum
return primeSum
*/

function isPrime(x) {
  if (x == 1) return false;
  if (x == 2) return true;
  for (var j = 2; j < x; j++) {
    if (x % j == 0) return false;
  }
  return true;
}

function primeSum(max, STATUSCOUNTER) {
  var primeSum = 0;
  for (var i = 1; i < max; i++) {
    if (isPrime(i)) {
      primeSum += i;
    }
    // Print status periodically
    if (i % STATUSCOUNTER == 0) {
      console.log("Numbers checked: " + i);
    }
  }
  return primeSum;
}

var MAX = 2000000;
var STATUSCOUNTER = 1000;
var sumOfPrimes = primeSum(MAX, STATUSCOUNTER);
console.log("The sum of primes below " + MAX + " = " + sumOfPrimes);

/*
https://projecteuler.net/problem=11

Largest product in a grid

In the 20×20 grid below, four numbers along a diagonal line have been marked in red.

08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08
49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00
81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65
52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91
22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80
24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50
32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70
67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21
24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72
21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95
78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92
16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57
86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58
19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40
04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66
88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69
04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36
20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16
20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54
01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48


var stringGrid = [];
stringGrid[0] = "08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08";
stringGrid[1] = "49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00";
stringGrid[2] = "81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65";
stringGrid[3] = "52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91";
stringGrid[4] = "22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80";
stringGrid[5] = "24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50";
stringGrid[6] = "32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70";
stringGrid[7] = "67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21";
stringGrid[8] = "24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72";
stringGrid[9] = "21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95";
stringGrid[10] = "78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92";
stringGrid[11] = "16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57";
stringGrid[12] = "86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58";
stringGrid[13] = "19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40";
stringGrid[14] = "04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66";
stringGrid[15] = "88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69";
stringGrid[16] = "04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36";
stringGrid[17] = "20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16";
stringGrid[18] = "20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54";
stringGrid[19] = "01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48";



The product of these numbers is 26 × 63 × 78 × 14 = 1788696.

What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 20×20 grid?

Strategy

Store grid as 20 x 20 array of strings
  Iterate through array and convert strings to integers

maxProduct = 0;
Calculate max adjacent number product (4 numbers) for grid using different functions:
  maxVP = maxVerticalProduct(stringGrid)
  maxHP = maxHorizontalProduct(stringGrid)
  maxDPP = maxDiagonalPositiveProduct(stringGrid)
  maxDNP = maxDiagonalNegativeProduct(stringGrid)
For each function:
  product = 1;
  maxProduct = 0;
  Iterate through all the possible windows
    Calculate product inside window
    if product > maxProduct, maxProduct = product
  return maxProduct
return the largest product:
  return Math.max(maxVP, maxHP, maxDPP, maxDNP);

*/

function maxVP(gridObj) {
  var product = 0;

  for (var x = 0; x + gridObj.WINDOWSIZE < gridObj.ARRAYSIZE; x++) {
    for (var y = 0; y + gridObj.WINDOWSIZE < gridObj.ARRAYSIZE; y++) {
      product = gridObj.grid[x][y] * gridObj.grid[x][y+1] * gridObj.grid[x][y+2] * gridObj.grid[x][y+3];
      if (product > gridObj.maxProduct) {
        gridObj.maxProduct = product;
      }
      console.log("VP: " + product + " MP: " + gridObj.maxProduct);
    }
  }
}


function maxHP(gridObj) {
  var product = 0;

  for (var x = 0; x + gridObj.WINDOWSIZE < gridObj.ARRAYSIZE; x++) {
    for (var y = 0; y < gridObj.ARRAYSIZE; y++) {
      product = gridObj.grid[x][y] * gridObj.grid[x+1][y] * gridObj.grid[x+2][y] * gridObj.grid[x+3][y];
      if (product > gridObj.maxProduct) {
        gridObj.maxProduct = product;
      }
      console.log("HP: " + product + " MP: " + gridObj.maxProduct);
    }
  }
}

function maxDPP(gridObj) {
  var product = 0;

  for (var x = 0; x + gridObj.WINDOWSIZE < gridObj.ARRAYSIZE; x++) {
    for (var y = 0; y + gridObj.WINDOWSIZE < gridObj.ARRAYSIZE; y++) {
      product = gridObj.grid[x][y+3] * gridObj.grid[x+1][y+2] * gridObj.grid[x+2][y+1] * gridObj.grid[x+3][y];
      if (product > gridObj.maxProduct) {
        gridObj.maxProduct = product;
      }
      console.log("DPP: " + product + " MP: " + gridObj.maxProduct);
    }
  }
}

function maxDNP(gridObj) {
  var product = 0;

  for (var x = 0; x + gridObj.WINDOWSIZE < gridObj.ARRAYSIZE; x++) {
    for (var y = 0; y + gridObj.WINDOWSIZE < gridObj.ARRAYSIZE; y++) {
      product = gridObj.grid[x][y] * gridObj.grid[x+1][y+1] * gridObj.grid[x+2][y+2] * gridObj.grid[x+3][y+3];
      if (product > gridObj.maxProduct) {
        gridObj.maxProduct = product;
      }
      console.log("DNP: " + product + " MP: " + gridObj.maxProduct);
    }
  }
}

function largestGridProduct() {

  // Create 2D array of strings
  var gridObject = {
    WINDOWSIZE: 4,
    ARRAYSIZE: 20,
    grid: [
      ["08", "02", "22", "97", "38", "15", "00", "40", "00", "75", "04", "05", "07", "78", "52", "12", "50", "77", "91", "08"],
      ["49", "49", "99", "40", "17", "81", "18", "57", "60", "87", "17", "40", "98", "43", "69", "48", "04", "56", "62", "00"],
      ["81", "49", "31", "73", "55", "79", "14", "29", "93", "71", "40", "67", "53", "88", "30", "03", "49", "13", "36", "65"],
      ["52", "70", "95", "23", "04", "60", "11", "42", "69", "24", "68", "56", "01", "32", "56", "71", "37", "02", "36", "91"],
      ["22", "31", "16", "71", "51", "67", "63", "89", "41", "92", "36", "54", "22", "40", "40", "28", "66", "33", "13", "80"],
      ["24", "47", "32", "60", "99", "03", "45", "02", "44", "75", "33", "53", "78", "36", "84", "20", "35", "17", "12", "50"],
      ["32", "98", "81", "28", "64", "23", "67", "10", "26", "38", "40", "67", "59", "54", "70", "66", "18", "38", "64", "70"],
      ["67", "26", "20", "68", "02", "62", "12", "20", "95", "63", "94", "39", "63", "08", "40", "91", "66", "49", "94", "21"],
      ["24", "55", "58", "05", "66", "73", "99", "26", "97", "17", "78", "78", "96", "83", "14", "88", "34", "89", "63", "72"],
      ["21", "36", "23", "09", "75", "00", "76", "44", "20", "45", "35", "14", "00", "61", "33", "97", "34", "31", "33", "95"],
      ["78", "17", "53", "28", "22", "75", "31", "67", "15", "94", "03", "80", "04", "62", "16", "14", "09", "53", "56", "92"],
      ["16", "39", "05", "42", "96", "35", "31", "47", "55", "58", "88", "24", "00", "17", "54", "24", "36", "29", "85", "57"],
      ["86", "56", "00", "48", "35", "71", "89", "07", "05", "44", "44", "37", "44", "60", "21", "58", "51", "54", "17", "58"],
      ["19", "80", "81", "68", "05", "94", "47", "69", "28", "73", "92", "13", "86", "52", "17", "77", "04", "89", "55", "40"],
      ["04", "52", "08", "83", "97", "35", "99", "16", "07", "97", "57", "32", "16", "26", "26", "79", "33", "27", "98", "66"],
      ["88", "36", "68", "87", "57", "62", "20", "72", "03", "46", "33", "67", "46", "55", "12", "32", "63", "93", "53", "69"],
      ["04", "42", "16", "73", "38", "25", "39", "11", "24", "94", "72", "18", "08", "46", "29", "32", "40", "62", "76", "36"],
      ["20", "69", "36", "41", "72", "30", "23", "88", "34", "62", "99", "69", "82", "67", "59", "85", "74", "04", "36", "16"],
      ["20", "73", "35", "29", "78", "31", "90", "01", "74", "31", "49", "71", "48", "86", "81", "16", "23", "57", "05", "54"],
      ["01", "70", "54", "71", "83", "51", "54", "69", "16", "92", "33", "48", "61", "43", "52", "01", "89", "19", "67", "48"]
    ],
    maxProduct: 0
  };

  // In grid, convert strings to integers
  for (var j = 0; j < gridObject.ARRAYSIZE; j++) {
    for (var k = 0; k < gridObject.ARRAYSIZE; k++) {
      gridObject.grid[j][k] = parseInt(gridObject.grid[j][k]);
    }
  }

  // Find the largest product
  maxVP(gridObject);
  maxHP(gridObject);
  maxDPP(gridObject);
  maxDNP(gridObject);
  console.log(gridObject.maxProduct);
}

largestGridProduct();

/*
https://projecteuler.net/problem=12

Highly divisible triangular number

What is the value of the first triangle number to have over five hundred divisors?

Strategy

Loop through the natural numbers (1...n)
  Calculate the triangle number for n
  Factor the triangle number
  Determine the number of factors
  If # factors is > 500
    Return triange number
*/

function numberOfFactors(num) {
  var factorCounter = 0;

  for (var j = 1; j <= num; j++) {
    if (num % j == 0) {
      factorCounter++;
    }
  }
  return factorCounter;
}

function triNumber(num) {
  var triNum = 0;
  for (var i = 1; i <= num; i++) {
    triNum += i;
  }
  return triNum;
}

function highDivTriNumber(maxDivisor) {
  var n = 1;

  while (true) {
    var triNum = triNumber(n);
    var numFactors = numberOfFactors(triNum);
    console.log(triNum + " factors: " + numFactors + " / " + maxDivisor);
    if (numFactors > maxDivisor) return triNum;
    n++;
  }

}

var MAXDIVISORS = 500;
console.log(highDivTriNumber(MAXDIVISORS));

/*
https://projecteuler.net/problem=13

#13--Large sum

Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.

37107287533902102798797998220837590246510135740250
46376937677490009712648124896970078050417018260538
74324986199524741059474233309513058123726617309629
91942213363574161572522430563301811072406154908250
23067588207539346171171980310421047513778063246676
89261670696623633820136378418383684178734361726757
28112879812849979408065481931592621691275889832738
44274228917432520321923589422876796487670272189318
47451445736001306439091167216856844588711603153276
70386486105843025439939619828917593665686757934951
62176457141856560629502157223196586755079324193331
64906352462741904929101432445813822663347944758178
92575867718337217661963751590579239728245598838407
58203565325359399008402633568948830189458628227828
80181199384826282014278194139940567587151170094390
35398664372827112653829987240784473053190104293586
86515506006295864861532075273371959191420517255829
71693888707715466499115593487603532921714970056938
54370070576826684624621495650076471787294438377604
53282654108756828443191190634694037855217779295145
36123272525000296071075082563815656710885258350721
45876576172410976447339110607218265236877223636045
17423706905851860660448207621209813287860733969412
81142660418086830619328460811191061556940512689692
51934325451728388641918047049293215058642563049483
62467221648435076201727918039944693004732956340691
15732444386908125794514089057706229429197107928209
55037687525678773091862540744969844508330393682126
18336384825330154686196124348767681297534375946515
80386287592878490201521685554828717201219257766954
78182833757993103614740356856449095527097864797581
16726320100436897842553539920931837441497806860984
48403098129077791799088218795327364475675590848030
87086987551392711854517078544161852424320693150332
59959406895756536782107074926966537676326235447210
69793950679652694742597709739166693763042633987085
41052684708299085211399427365734116182760315001271
65378607361501080857009149939512557028198746004375
35829035317434717326932123578154982629742552737307
94953759765105305946966067683156574377167401875275
88902802571733229619176668713819931811048770190271
25267680276078003013678680992525463401061632866526
36270218540497705585629946580636237993140746255962
24074486908231174977792365466257246923322810917141
91430288197103288597806669760892938638285025333403
34413065578016127815921815005561868836468420090470
23053081172816430487623791969842487255036638784583
11487696932154902810424020138335124462181441773470
63783299490636259666498587618221225225512486764533
67720186971698544312419572409913959008952310058822
95548255300263520781532296796249481641953868218774
76085327132285723110424803456124867697064507995236
37774242535411291684276865538926205024910326572967
23701913275725675285653248258265463092207058596522
29798860272258331913126375147341994889534765745501
18495701454879288984856827726077713721403798879715
38298203783031473527721580348144513491373226651381
34829543829199918180278916522431027392251122869539
40957953066405232632538044100059654939159879593635
29746152185502371307642255121183693803580388584903
41698116222072977186158236678424689157993532961922
62467957194401269043877107275048102390895523597457
23189706772547915061505504953922979530901129967519
86188088225875314529584099251203829009407770775672
11306739708304724483816533873502340845647058077308
82959174767140363198008187129011875491310547126581
97623331044818386269515456334926366572897563400500
42846280183517070527831839425882145521227251250327
55121603546981200581762165212827652751691296897789
32238195734329339946437501907836945765883352399886
75506164965184775180738168837861091527357929701337
62177842752192623401942399639168044983993173312731
32924185707147349566916674687634660915035914677504
99518671430235219628894890102423325116913619626622
73267460800591547471830798392868535206946944540724
76841822524674417161514036427982273348055556214818
97142617910342598647204516893989422179826088076852
87783646182799346313767754307809363333018982642090
10848802521674670883215120185883543223812876952786
71329612474782464538636993009049310363619763878039
62184073572399794223406235393808339651327408011116
66627891981488087797941876876144230030984490851411
60661826293682836764744779239180335110989069790714
85786944089552990653640447425576083659976645795096
66024396409905389607120198219976047599490197230297
64913982680032973156037120041377903785566085089252
16730939319872750275468906903707539413042652315011
94809377245048795150954100921645863754710598436791
78639167021187492431995700641917969777599028300699
15368713711936614952811305876380278410754449733078
40789923115535562561142322423255033685442488917353
44889911501440648020369068063960672322193204149535
41503128880339536053299340368006977710650566631954
81234880673210146739058568557934581403627822703280
82616570773948327592232845941706525094512325230608
22918802058777319719839450180888072429661980811197
77158542502016545090413245809786882778948721859617
72107838435069186155435662884062257473692284509516
20849603980134001723930671666823555245252804609722
53503534226472524250874054075591789781264330331690

Strategy

Enter the 50 numbers as a 50-element array of integers
OR
Is there an easier way to suck in these numbers with JSON?

sum = 0;
for (var i = 0; i < numArray.length; i++)
  sum += number[i];

store sum as sumString (convert the integer to a string)
Take a substring of the first ten digits (after displaying without scientific notation)
Convert substring back to a number
*/

var numArray = [37107287533902102798797998220837590246510135740250,
46376937677490009712648124896970078050417018260538,
74324986199524741059474233309513058123726617309629,
91942213363574161572522430563301811072406154908250,
23067588207539346171171980310421047513778063246676,
89261670696623633820136378418383684178734361726757,
28112879812849979408065481931592621691275889832738,
44274228917432520321923589422876796487670272189318,
47451445736001306439091167216856844588711603153276,
70386486105843025439939619828917593665686757934951,
62176457141856560629502157223196586755079324193331,
64906352462741904929101432445813822663347944758178,
92575867718337217661963751590579239728245598838407,
58203565325359399008402633568948830189458628227828,
80181199384826282014278194139940567587151170094390,
35398664372827112653829987240784473053190104293586,
86515506006295864861532075273371959191420517255829,
71693888707715466499115593487603532921714970056938,
54370070576826684624621495650076471787294438377604,
53282654108756828443191190634694037855217779295145,
36123272525000296071075082563815656710885258350721,
45876576172410976447339110607218265236877223636045,
17423706905851860660448207621209813287860733969412,
81142660418086830619328460811191061556940512689692,
51934325451728388641918047049293215058642563049483,
62467221648435076201727918039944693004732956340691,
15732444386908125794514089057706229429197107928209,
55037687525678773091862540744969844508330393682126,
18336384825330154686196124348767681297534375946515,
80386287592878490201521685554828717201219257766954,
78182833757993103614740356856449095527097864797581,
16726320100436897842553539920931837441497806860984,
48403098129077791799088218795327364475675590848030,
87086987551392711854517078544161852424320693150332,
59959406895756536782107074926966537676326235447210,
69793950679652694742597709739166693763042633987085,
41052684708299085211399427365734116182760315001271,
65378607361501080857009149939512557028198746004375,
35829035317434717326932123578154982629742552737307,
94953759765105305946966067683156574377167401875275,
88902802571733229619176668713819931811048770190271,
25267680276078003013678680992525463401061632866526,
36270218540497705585629946580636237993140746255962,
24074486908231174977792365466257246923322810917141,
91430288197103288597806669760892938638285025333403,
34413065578016127815921815005561868836468420090470,
23053081172816430487623791969842487255036638784583,
11487696932154902810424020138335124462181441773470,
63783299490636259666498587618221225225512486764533,
67720186971698544312419572409913959008952310058822,
95548255300263520781532296796249481641953868218774,
76085327132285723110424803456124867697064507995236,
37774242535411291684276865538926205024910326572967,
23701913275725675285653248258265463092207058596522,
29798860272258331913126375147341994889534765745501,
18495701454879288984856827726077713721403798879715,
38298203783031473527721580348144513491373226651381,
34829543829199918180278916522431027392251122869539,
40957953066405232632538044100059654939159879593635,
29746152185502371307642255121183693803580388584903,
41698116222072977186158236678424689157993532961922,
62467957194401269043877107275048102390895523597457,
23189706772547915061505504953922979530901129967519,
86188088225875314529584099251203829009407770775672,
11306739708304724483816533873502340845647058077308,
82959174767140363198008187129011875491310547126581,
97623331044818386269515456334926366572897563400500,
42846280183517070527831839425882145521227251250327,
55121603546981200581762165212827652751691296897789,
32238195734329339946437501907836945765883352399886,
75506164965184775180738168837861091527357929701337,
62177842752192623401942399639168044983993173312731,
32924185707147349566916674687634660915035914677504,
99518671430235219628894890102423325116913619626622,
73267460800591547471830798392868535206946944540724,
76841822524674417161514036427982273348055556214818,
97142617910342598647204516893989422179826088076852,
87783646182799346313767754307809363333018982642090,
10848802521674670883215120185883543223812876952786,
71329612474782464538636993009049310363619763878039,
62184073572399794223406235393808339651327408011116,
66627891981488087797941876876144230030984490851411,
60661826293682836764744779239180335110989069790714,
85786944089552990653640447425576083659976645795096,
66024396409905389607120198219976047599490197230297,
64913982680032973156037120041377903785566085089252,
16730939319872750275468906903707539413042652315011,
94809377245048795150954100921645863754710598436791,
78639167021187492431995700641917969777599028300699,
15368713711936614952811305876380278410754449733078,
40789923115535562561142322423255033685442488917353,
44889911501440648020369068063960672322193204149535,
41503128880339536053299340368006977710650566631954,
81234880673210146739058568557934581403627822703280,
82616570773948327592232845941706525094512325230608,
22918802058777319719839450180888072429661980811197,
77158542502016545090413245809786882778948721859617,
72107838435069186155435662884062257473692284509516,
20849603980134001723930671666823555245252804609722,
53503534226472524250874054075591789781264330331690];

function largeSum(numArray, displayDigits) {
  var sum = 0;
  for (var i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  var sumString = sum.toFixed();
  var beginningString = sumString.substring(0, 1);
  var endString = sumString.substring(2, DISPLAYDIGITS + 1);
  var firstDigitsString = beginningString + endString;
  return firstDigitsString;
}

var DISPLAYDIGITS = 10;
console.log(largeSum(numArray, DISPLAYDIGITS));
// 5537376230

/*
https://projecteuler.net/problem=14

#14-Longest Collatz sequence

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.

Strategy:

Recursive function
*/

function longestCollatzSequence(upperLimit) {
  var longestChain = 0;
  var longestChainProducer = 0;

  function collatzSequence(n, chainLength) {
    if (n == 1) {
      return chainLength;
    }
    else {
      if (n % 2 == 0) {
        return collatzSequence(n/2, chainLength+1);
      }
      else {
        return collatzSequence(3*n + 1, chainLength+1);
      }
    }
  }

  for (var i = 2; i < upperLimit; i++) {
    var chain = collatzSequence(i, 1);
    if (chain > longestChain) {
      longestChain = chain;
      longestChainProducer = i;
    }
    console.log("n: " + i + " CL: " + chain + " LCL: " + longestChain + " n -> LCL: " + longestChainProducer);
  }
  return longestChainProducer;
}

var UPPERLIMIT = 1000000;
console.log(longestCollatzSequence(UPPERLIMIT));

/*
https://projecteuler.net/problem=17

#17--Number letter counts

If the numbers 1 to 5 are written out in words: one, two, three, four, five,
then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out
in words, how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and
forty-two) contains 23 letters and 115 (one hundred and fifteen)
contains 20 letters. The use of "and" when writing out numbers is in
compliance with British usage.
*/

function parseNumber(num, wordArray) {
  var xString = num.toString();
  var mostSignificantDigit = 0;
  for (i = xString.length - 1; i >= 0; i--) {
    mostSignificantDigit = Math.trunc(num / Math.pow(10, i));
    if (mostSignificantDigit >= 1) {
      switch(i) {
        case 3:
          if (mostSignificantDigit == 1) {
            wordArray[(xString.length-1) - i] = "one thousand";
          }
        break;

      }
    }

    switch(i) {
      case 3:
        if (mostSignificantDigit == 1) {
          wordArray[(xString.length-1) - i] = "one thousand";
        }
        break;
      case 2:
        if (mostSignificantDigit >= 1) {

        }
        break;
      case 1:
        if (mostSignificantDigit >= 1) {

        }
        code block
        break;
      case 0:
        code block
        break;
      default:
        code block
    }
  }
}

numberLetterCounter(number) {
  var wordArray = [];
  parseNumber(number, wordArray);
  var letterSum = countLettersInWords(wordArray);
  return letterSum;
}


var NUMBER = 1000;
console.log(numberLetterCounter(MAXNUMBER));

/*
https://projecteuler.net/problem=18

#18--Maximum path sum I

By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

3
7 4
2 4 6
8 5 9 3

That is, 3 + 7 + 4 + 9 = 23.

Find the maximum total from top to bottom of the triangle below:

75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23

NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)

Strategy:

Enter triangle data into an array of arrays
Use recursive function
function maxPathSum(x, y) {
  var maxSum = 0;
  function pathSum(x, y, sum)
    if (y == yArray.length -1)
      sum += [x,y];
      if sum > maxSum
        maxSum= sum;
      return 1;
    else
      return (pathSum(x, y+1, array[x,y] + sum) || pathSum(x+1, y+1, array[x,y] + sum)
  })
  pathSum(0, 0, 0);
  return maxSum;
}

*/

var triangleArray1 = [
  [3],
  [7, 4],
  [2, 4, 6],
  [8, 5, 9, 3]
];

var triangleArray2 = [
  [75],
  [95, 64],
  [17, 47, 82],
  [18, 35, 87, 10],
  [20, 4, 82, 47, 65],
  [19, 1, 23, 75, 3, 34],
  [88, 2, 77, 73, 7, 63, 67],
  [99, 65, 4, 28, 6, 16, 70, 92],
  [41, 41, 26, 56, 83, 40, 80, 70, 33],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]
];

function maxPathSum(x, y, triArray) {
  var maxSum = 0;
  function pathSum(x, y, sum) {
    sum += triArray[x][y];
    //console.log("x: " + x + " y: " + y + " sum: " + sum);
    if (x == triArray.length-1) {
      if (sum > maxSum) {
        maxSum = sum;
      }
      return 1;
    }
    else {
      return pathSum(x+1, y, sum) && pathSum(x+1, y+1, sum);
    }
  }
  pathSum(0, 0, 0);
  return maxSum;
}

console.log(maxPathSum(0, 0, triangleArray2));

/*
https://projecteuler.net/problem=19

#19--Counting Sundays

You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.

Thirty days has September,
April, June and November.

All the rest have thirty-one,
  Saving February alone,
  Which has twenty-eight, rain or shine.
  And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century
  unless it is divisible by 400.

How many Sundays fell on the first of the month during the twentieth century
  (1 Jan 1901 to 31 Dec 2000)?

  Strategy:

  Weekly cycles are always the same

  Due to months not having the same number of days, a day of the week (or a day of one
  of the weeks of a month) does not have the same date per month

  Given that 1 Jan 1900 is a Monday, create algorithm that generates # days per month
  for every year

  Loop through all of the months of the 20th century
    Count # days from 1 Jan 1900 to 1st of month
    Determine which day falls on 1st of month

    Sum the count of Sundays that fall on 1st of month

*/
function daysinMonth(month, year) {
  var days = 0;
  switch(month) {
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31;
      break;
    case 2:
      // Leap year calculation
      if ( (year % 4 == 0) && ((year % 100 == 0) && (year % 400 == 0)) ) {
        days = 29;
      }
      else {
        days = 28;
      }
  }
  return days;
}

function whichDay(days) {

}

function sundayCounter() {
  var days = 0;
  var sundayCounter = 0;
  var dayOfWeek = 0;
  for (var year = 1900; year <= 2000; year++) {
    for (var month = 1; month <= 12; month++) {
      if (year >= 1901) {
        dayOfWeek = whichDay(days);
        if (dayOfWeek == 6) {
          sundayCounter++;
        }
      }
      days += daysinMonth(month, year);
    }
  }
  return sundayCounter;
}

console.log(sundayCounter());
