class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const graph = this.makeGraph(edges)
        const visited = new Set()

        const dfs = (child, parent) => {
            if (visited.has(child)) return false
            visited.add(child)

            for (const neighbor of graph[child] || []) {
                if (neighbor === parent) continue
                if (!dfs(neighbor, child)) return false
            }

            return true
        }

        return dfs(0, -1) && visited.size === n
    }

    makeGraph(edges) {
        const graph = {}
        for (let edge of edges) {
            const [a, b] = edge
            if (!(a in graph)) graph[a] = []
            if (!(b in graph)) graph[b] = []
            graph[a].push(b)
            graph[b].push(a)
        }

        return graph
    }
}
