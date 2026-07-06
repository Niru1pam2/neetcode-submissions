class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        for(let r=0; r< grid.length; r++) {
            for(let c=0; c<grid[0].length; c++) {
                if(grid[r][c] === 0) explore(grid, r, c, 0)
            }
        }
    }

}


const explore = (grid, r, c, distance) => {
    const rowbound = r>=0 && r<grid.length
    const colbound = c>=0 && c<grid[0].length

    if(!rowbound || !colbound) return

    if(grid[r][c] === -1 || grid[r][c] < distance) return

    grid[r][c] = distance

    explore(grid, r-1, c, distance + 1)
    explore(grid, r+1, c, distance + 1)
    explore(grid, r, c-1, distance +1)
    explore(grid, r, c+1, distance + 1)

}
