class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for(let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j]
        } 
      }
    }
    return []
  }
}

const check = new Solution();
const res = check.twoSum([5,5], 10)
console.log('res outer', res)