class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let minutes = 0
        let freshcount = 0
        const queue = []
        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] === 2) {
                    queue.push([r, c, 0])
                } else if (grid[r][c] === 1) {
                    freshcount += 1
                }
            }
        }


        const getNeighbors = (r, c) => {
            return [
                [r + 1, c],
                [r - 1, c],
                [r, c - 1],
                [r, c + 1]
            ]
        }


        while (queue.length) {
            let [r, c, t] = queue.shift()
            minutes = Math.max(minutes, t)
            for (let [nr, nc] of getNeighbors(r, c)) {
                if (nr < 0 || nr >= grid.length || nc < 0 || nc >= grid[0].length || grid[nr][nc] !== 1) continue

                grid[nr][nc] = 2
                freshcount--
                queue.push([nr, nc, t + 1])
            }


        }

        return freshcount === 0 ? minutes : -1
    }
}
