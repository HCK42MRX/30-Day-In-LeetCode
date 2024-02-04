/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const objectNum = new Map()
  for(let i = 0; i < nums.length; i++){
    const selisih = target - nums[i]
    if(objectNum.has(selisih)){
      return [objectNum.get(selisih), i]
    }
    objectNum.set(nums[i], i)
  }
  return []
};

console.log(twoSum([2,7,11,15], 9))
// twoSum([2,7,11,15], 9)

// https://leetcode.com/problems/two-sum/description/