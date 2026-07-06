class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let arr = matrix.flat()

        let start = 0
        let end = arr.length - 1
        let middle
        while (start <= end) {
            middle = Math.floor((start + end) / 2)

            if (arr[middle] === target) return true

            if (arr[middle] > target) {
                end = middle - 1
            } else {
                start = middle + 1
            }
        }

        return false
    }
}
