/* 
    Mashrur Hossain Khan
    9 Oct 2024
    Lecture: https://docs.google.com/document/d/1KRRjhuu7WDrExrz8V70Z4H3BbP1dXvOwc9tsLzdMsqg/edit?usp=sharing
    problem: https://leetcode.com/problems/two-sum/submissions/1416716864/
*/
const findToSum = function (nums, target) {
  const numsMap = {};

  for (let p = 0; p < nums.length; p++) {
    const currentMapVal = numsMap[nums[p]]; //step 1: nums[0] ==> no value
    //step 2 :nums[1] ==> 7 ==> currentMapVal==0

    if (currentMapVal >= 0) {
      return [currentMapVal, p]; //step2 [0,1]
    } else {
      const numberToFind = target - nums[p]; //step1:  [2, 7, 11, 15] ; 9 ==> 7
      numsMap[numberToFind] = p; //step1:  numsMap[7] = 0
    }
    return null;
  }
};
