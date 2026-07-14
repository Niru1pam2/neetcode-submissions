class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let start = 0
        let end = nums.length - 1

        while (start <= end) {
            let middle = Math.floor((start + end) / 2)

            if (nums[middle] > target) {
                end = middle - 1
            } else if (nums[middle] < target) {
                start = middle + 1
            } else {
                return middle
            }
        }

        return -1
    }
}
