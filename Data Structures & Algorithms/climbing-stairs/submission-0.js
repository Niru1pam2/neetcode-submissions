class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {


        const dfs = (currentStep, memo = {}) => {
            if (currentStep in memo) return memo[currentStep]
            if (currentStep === n) return 1
            if (currentStep > n) return 0

            memo[currentStep] = dfs(currentStep + 1, memo) + dfs(currentStep + 2, memo)

            return memo[currentStep]
        }

        return dfs(0)


    }
}
