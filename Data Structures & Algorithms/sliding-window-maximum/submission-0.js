class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let l = 0
        let r = 0

        let res = []

        while (r < nums.length) {
            if ((r - l + 1) === k) {
                let windowMax = Math.max(...nums.slice(l, r + 1))
                res.push(windowMax)
                l++
            }
            r++
        }
        return res
    }
}
