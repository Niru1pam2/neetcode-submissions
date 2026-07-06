class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const preMap = new Map()

        for (let i = 0; i < numCourses; i++) {
            preMap.set(i, [])
        }

        for (let [crs, pre] of prerequisites) {
            preMap.get(crs).push(pre)
        }

        const visiting = new Set()

        const dfs = (crs) => {

            if (visiting.has(crs)) return false

            if (preMap.get(crs).length === 0) return true

            visiting.add(crs)

            for (let nei of preMap.get(crs)) {
                if (!dfs(nei)) return false
            }

            preMap.set(crs, [])
            visiting.delete(crs)
            return true
        }

        for (let c = 0; c < numCourses; c++) {
            if (!dfs(c)) return false
        }

        return true
    }
}
