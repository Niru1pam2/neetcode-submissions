class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        const N = grid.length
        const visit = new Set()
        const minPQ = new MinPriorityQueue(entry => entry[0])

        const getNeighbors = (r, c) => {
            return [
                [r + 1, c],
                [r - 1, c],
                [r, c + 1],
                [r, c - 1]
            ]
        }


        minPQ.push([grid[0][0], 0, 0])
        visit.add('0, 0')

        while (!minPQ.isEmpty()) {
            const [t, r, c] = minPQ.pop()

            if (r === N - 1 && c === N - 1) {
                return t
            }

            for (const [nr, nc] of getNeighbors(r, c)) {
                if (nr < 0 || nc < 0 || nr >= N || nc >= N || visit.has(`${nr}, ${nc}`)) continue

                visit.add(`${nr}, ${nc}`)

                minPQ.push([Math.max(t, grid[nr][nc]), nr, nc])
            }
        }
    }
}
