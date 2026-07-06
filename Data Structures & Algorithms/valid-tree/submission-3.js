class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const adjList = makeList(n, edges)

        let visited = new Set()

        function makeList(num, edges) {
            let list = {}

            for (let i = 0; i < num; i++) {
                list[i] = []
            }

            for (const edge of edges) {
                const [from, to] = edge
                list[from].push(to)
                list[to].push(from)
            }

            return list
        }

        const dfs = (edge, parent) => {
            if (visited.has(edge)) return false
            visited.add(edge)

            for (const neighbor of adjList[edge]) {
                if (neighbor === parent) continue
                if (!dfs(neighbor, edge)) return false
            }

            return true
        }

        return dfs(0, -1) && visited.size === n

    }
}
