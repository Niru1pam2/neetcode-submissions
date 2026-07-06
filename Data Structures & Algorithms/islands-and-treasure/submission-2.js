class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {

        const ROWS = grid.length
        const COLS = grid[0].length

        const queue = []

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 0) queue.push([r, c])
            }
        }


        const getNeighbors = (r, c) => {
            return [
                [r - 1, c],
                [r + 1, c],
                [r, c - 1],
                [r, c + 1]
            ]
        }

        while (queue.length) {
            const [r, c] = queue.shift()

            for (let [nr, nc] of getNeighbors(r, c)) {
                if (nr < 0 || nc < 0 || nr >= ROWS || nc >= COLS || grid[nr][nc] !== 2147483647) continue

                grid[nr][nc] = grid[r][c] + 1
                queue.push([nr, nc])
            }
        }
    }
}
