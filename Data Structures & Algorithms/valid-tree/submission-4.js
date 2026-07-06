class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        // A valid tree must have exactly n - 1 edges
        if (edges.length !== n - 1) return false

        const root = Array.from({ length: n }, (_, i) => i)
        const rank = Array(n).fill(1)

        function find(x) {
            if (root[x] !== x) root[x] = find(root[x]) // Path compression
            return root[x]
        }

        function union(x, y) {
            const rootX = find(x)
            const rootY = find(y)

            if (rootX === rootY) return false // Cycle detected

            // Union by rank
            if (rank[rootX] > rank[rootY]) {
                root[rootY] = rootX
            } else if (rank[rootY] > rank[rootX]) {
                root[rootX] = rootY
            } else {
                root[rootY] = rootX
                rank[rootX]++
            }

            return true
        }

        // Process all edges, check for cycles
        for (const [u, v] of edges) {
            if (!union(u, v)) return false
        }

        // Optional: connectivity check (redundant since edges = n - 1 guarantees it)
        const firstRoot = find(0)
        for (let i = 1; i < n; i++) {
            if (find(i) !== firstRoot) return false
        }

        return true
    }
}
