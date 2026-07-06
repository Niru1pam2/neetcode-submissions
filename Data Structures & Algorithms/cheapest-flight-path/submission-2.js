class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        const minPQ = new MinPriorityQueue(entry => entry[0])

        const adj = new Map()

        for (let i = 0; i < n; i++) {
            adj.set(i, [])
        }

        for (const [src, dst, price] of flights) {
            adj.get(src).push([dst, price])
        }

        minPQ.push([0, src, 0])

        while (!minPQ.isEmpty()) {
            const [cost, src, stops] = minPQ.pop()

            if (src === dst) return cost

            if (stops > k) continue

            for (const [nei, neiCost] of adj.get(src)) {
                minPQ.push([cost + neiCost, nei, stops + 1])
            }
        }

        return -1
    }
}
