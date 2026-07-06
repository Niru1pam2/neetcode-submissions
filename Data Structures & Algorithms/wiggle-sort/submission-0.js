class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    wiggleSort(nums) {

        for (let i = 0; i < nums.length; i++) {
            if (i % 2 === 0) {
                if (nums[i] > nums[i + 1]) {
                    [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
                }
            }

            if (i % 2 !== 0) {
                if (nums[i] < nums[i + 1]) {
                    [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
                }
            }
        }

    }
}
