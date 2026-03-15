nums = [2, 7, 11, 15];
target = 9;

const findToSum = function (nums, target) {
  for (let p = 0; p < nums.length - 1; p++) {
    numberToFind = target - nums[p];
    for (let q = p + 1; q < nums.length; q++) {
      if (nums[q] === numberToFind) {
        return [p, q];
      }
    }
  }
  return null;
};

console.log(findToSum(nums, target));
