class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {

    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
          return true;
        }
      }
    }
    return false;
  }
}

const check = new Solution();
const res = check.hasDuplicate([1, 2, 3, 4])
console.log('test', res)


