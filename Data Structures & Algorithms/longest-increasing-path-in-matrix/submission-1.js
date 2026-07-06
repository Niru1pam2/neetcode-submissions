class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        const ROWS = matrix.length
        const COLS = matrix[0].length

        let dp = Array.from({ length: ROWS + 1 }, () => Array(COLS + 1).fill(0))

        let len = -Infinity

        const getNeighbors = (r, c) => {
            return [
                [r + 1, c],
                [r - 1, c],
                [r, c + 1],
                [r, c - 1]
            ]
        }

        const dfs = (i, j) => {

            if (dp[i][j] !== 0) return dp[i][j]

            let maxLen = 1
            for (const [nr, nc] of getNeighbors(i, j)) {
                if (nr >= 0 && nc >= 0 && nr < ROWS && nc < COLS && matrix[nr][nc] > matrix[i][j]) {
                    let res = 1 + dfs(nr, nc)
                    maxLen = Math.max(res, maxLen)
                }
            }
            dp[i][j] = maxLen
            return dp[i][j]
        }

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                let res = dfs(i, j)
                len = Math.max(res, len)
            }
        }

        return len
    }
}
