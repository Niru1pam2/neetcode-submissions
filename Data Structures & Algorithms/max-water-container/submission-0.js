class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let area = 0
        let l = 0
        let r = heights.length - 1

        while (l < r) {
            let lower = Math.min(heights[l], heights[r])
            area = Math.max(lower * (r - l), area)

            if (heights[l] < heights[r]) {
                l++
                while (heights[l] < lower) {
                    l++
                }
            } else {
                r--
                while (heights[r] < lower) {
                    r--
                }
            }

        }
        return area
    }
}
