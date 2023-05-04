/**
 * Mashrur Hossain Khan
 * 4 May, 2023
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * const prompt = require("prompt-sync")();
 */

var twoSum = function (numbers, target) {
  var L = 0;
  const n = numbers.length;
  var R = n - 1;

  while (L < R) {
    var sum = numbers[L] + numbers[R];
    console.log("L=" + L + "R= " + R + "n= " + n);
    if (sum == target) {
      return [L + 1, R + 1];
    } else if (sum < target) {
      L = L + 1;
    } else {
      R = R - 1;
    }
  }
};

/*
var numbers = [];
var size = 5; //Maximum Array size

for (var i = 0; i < size; i++) {
  //Taking Input from user
  numbers[i] = prompt();
}

const target = prompt();

twoSum(numbers, target);
*/
