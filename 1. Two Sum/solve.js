/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let p1 = 0; p1 < nums.length; p1++) {
    const NumToFind = target - nums[p1];

    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      if (NumToFind == nums[p2]) {
        return [p1, p2];
      }
    }
  }
  return null;
};

const arr = [1, 3, 4, 5, 7];
console.log('result: ' + twoSum(arr, 10));
