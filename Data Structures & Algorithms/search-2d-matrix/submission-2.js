class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length
        let cols = matrix[0].length

        let top = 0
        let bot = rows - 1
        let row = -1

        // Step 1: Binary search to find the correct row
        while (top <= bot) {
            let middle = Math.floor((top + bot) / 2)

            // Target is greater than the largest element in this row, look down
            if (target > matrix[middle][cols - 1]) {
                top = middle + 1
            // Target is smaller than the smallest element in this row, look up
            } else if (target < matrix[middle][0]) {
                bot = middle - 1
            // Target falls perfectly within this row's range!
            } else {
                row = middle
                break
            }
        }

        // If the row was never found, the target is out of bounds completely
        if (row === -1) return false

        // Step 2: Standard binary search within that row
        let l = 0
        let r = cols - 1

        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            if (target > matrix[row][m]) {
                l = m + 1;
            } else if (target < matrix[row][m]) {
                r = m - 1;
            } else {
                return true;
            }
        }
        return false;
    }
}