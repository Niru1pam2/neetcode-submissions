class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = new Array(temperatures.length).fill(0)
        let stack = []

        for (let i = 0; i < temperatures.length; i++) {
            // While the current temp is warmer than the index on top of the stack
            while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                let prevIndex = stack.pop();
                // FIX: Distance between the days is current index minus the previous index
                res[prevIndex] = i - prevIndex; 
            }
            stack.push(i)
        }

        return res
    }
}