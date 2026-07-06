class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {

        const dfs = (i, memo = {}) => {
            if (i in memo) return memo[i]
            if (i === n) return 1
            if (i > n) return 0

            memo[i] = dfs(i + 1) + dfs(i + 2)
            return memo[i]
        }

        return dfs(0)
    }
}
