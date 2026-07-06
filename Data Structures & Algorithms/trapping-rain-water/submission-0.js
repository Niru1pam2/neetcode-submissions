class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftMax = 0
        let rightMax = 0
        let left = 0
        let right = height.length - 1
        let water = 0

        while (left < right) {
            if (height[left] < height[right]) {

                if (height[left] < leftMax) {
                    water += leftMax - height[left]
                } else {
                    leftMax = height[left]
                }

                left++
            } else {
                if (height[right] < rightMax) {
                    water += rightMax - height[right]
                } else {
                    rightMax = height[right]
                }
                right--
            }
        }

        return water


    }
}
