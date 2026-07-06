class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let start = 1
        let end = x

        let res = 0
        while (start <= end) {
            let mid = Math.floor((start + end) / 2)

            if (mid * mid > x) {
                end = mid - 1
            } else if (mid * mid < x) {
                res = mid
                start = mid + 1
            } else {
                return mid
            }
        }
        return res
    }
}
