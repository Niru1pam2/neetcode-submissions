class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let ROWS = heights.length
        let COLS = heights[0].length

        const getNeighbors = (r, c) => {
            return [
                [r - 1, c],
                [r + 1, c],
                [r, c - 1],
                [r, c + 1]
            ]
        }

        let pac = Array.from({ length: ROWS }, () => Array(COLS).fill(false))

        let atl = Array.from({ length: ROWS }, () => Array(COLS).fill(false))

        let pacQueue = []
        let atlQueue = []

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (r === 0 || c === 0) {
                    pacQueue.push([r, c])
                }
                if (r === ROWS - 1 || c === COLS - 1) {
                    atlQueue.push([r, c])
                }
            }
        }

        const bfs = (queue, ocean, heights) => {
            while (queue.length) {
                let [r, c] = queue.shift()

                if (ocean[r][c]) continue

                ocean[r][c] = true
                for (let [nr, nc] of getNeighbors(r, c)) {
                    if (nr < 0 || nc < 0 || nr >= ROWS || nc >= COLS || heights[nr][nc] < heights[r][c]) continue
                    queue.push([nr, nc])
                }
            }
        }

        bfs(pacQueue, pac, heights)
        bfs(atlQueue, atl, heights)


        let res = []

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (pac[r][c] && atl[r][c]) {
                    res.push([r, c])
                }
            }
        }

        return res
    }
}
