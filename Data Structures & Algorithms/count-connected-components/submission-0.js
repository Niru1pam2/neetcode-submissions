class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const graph = this.makeGraph(edges)
        const visited = new Set()

        let count = 0

        const dfs = (node) => {
            if (visited.has(node)) return

            visited.add(node)
            for (const neighbor of graph[node] || []) {
                dfs(neighbor)
            }
            return true
        }



        for (let i = 0; i < n; i++) {
            if (!visited.has(i)) {
                dfs(i)
                count++
            }
        }

        return count
    }


    makeGraph(edges) {
        let adj = {}
        for (let edge of edges) {
            const [a, b] = edge
            if (!(a in adj)) adj[a] = []
            if (!(b in adj)) adj[b] = []
            adj[a].push(b)
            adj[b].push(a)
        }

        return adj
    }
}
