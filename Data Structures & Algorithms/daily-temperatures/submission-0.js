class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = Array(temperatures.length).fill(0)

        for (let i = 0; i < temperatures.length - 1; i++) {
            for (let j = i + 1; j < temperatures.length; j++) {
                if (temperatures[j] > temperatures[i]) {
                    stack[i] = j - i
                    break
                }
            }
        }

        return stack
    }
}
