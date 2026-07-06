class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const queue = []
        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] === 0) {
                    queue.push([r, c])
                }
            }
        }


        function getNeighbors(r, c) {
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
                if (nr < 0 || nr >= grid.length || nc < 0 || nc >= grid[0].length || grid[nr][nc] !== 2147483647) {
                    continue
                }

                grid[nr][nc] = grid[r][c] + 1
                queue.push([nr,nc])
            }
        }
    }
}
