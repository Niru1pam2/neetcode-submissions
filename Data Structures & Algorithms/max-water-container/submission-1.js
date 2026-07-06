class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let area = 0
        let left = 0
        let right = heights.length - 1

        while (left < right) {

            let smallest = Math.min(heights[left], heights[right])

            area = Math.max(smallest * (right - left), area)

            if (heights[left] < heights[right]) {
                left++
            } else {
                right--
            }
        }

        return area
    }
}
