class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const memo = {}
        const dfs = (i) => {
            if (i in memo) return memo[i]

            if (i >= nums.length) {
                return 0
            }

            const robHouse = nums[i] + dfs(i + 2)
            const skipHouse = dfs(i + 1)

            memo[i] = Math.max(robHouse, skipHouse)
            return memo[i]
        }

        return dfs(0)
    }
}
