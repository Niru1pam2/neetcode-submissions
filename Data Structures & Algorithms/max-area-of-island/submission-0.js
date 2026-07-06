class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const ROWS = grid.length
        const COLS = grid[0].length

        let maxArea = 0

        const dfs = (r, c) => {


            //backtracking case
            if (r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] === '#' || grid[r][c] !== 1) return 0 

            grid[r][c] = '#'
            let area = 1

            //recusrive case
            area += dfs(r + 1, c)
            area += dfs(r - 1, c)
            area += dfs(r, c + 1)
            area += dfs(r, c - 1)

            return area
        }


        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                const area = dfs(r, c)
                maxArea = Math.max(area, maxArea)
            }
        }

        return maxArea
    }
}
