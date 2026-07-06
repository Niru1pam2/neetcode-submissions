class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let length = nums.length
        let result = new Array(length)
        let prefix = new Array(length)
        let suffix = new Array(length)

        prefix[0] = 1

        for (let i = 1; i < length; i++) {
            prefix[i] = prefix[i - 1] * nums[i - 1]
        }

        suffix[length - 1] = 1

        for (let i = length - 2; i >= 0; i--) {
            suffix[i] = suffix[i + 1] * nums[i + 1]
        }

        for (let i = 0; i < length; i++) {
            result[i] = prefix[i] * suffix[i]
        }

        return result
    }
}
