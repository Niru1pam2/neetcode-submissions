class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = -Infinity

        let i = 0
        let j = heights.length - 1

        while (i < j) {
            let area = Math.min(heights[i], heights[j]) * (j - i)
            max = Math.max(max, area)

            if (heights[i] < heights[j]) {
                i++
            } else {
                j--
            }

        }

        return max
    }
}
