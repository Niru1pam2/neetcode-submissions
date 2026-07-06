class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = {}

        for (let i = 0; i < nums.length; i++) {
            const req = target - nums[i]

            if (req in seen) {
                return [seen[req], i]
            }

            seen[nums[i]] = i
        }

        return []
    }
}
