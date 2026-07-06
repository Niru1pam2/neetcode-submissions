class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map()

        for(let num of nums) {
            map.set(num , (map.get(num) || 0) + 1)
        }

        const sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1])

        const res = sorted.slice(0, k).map(entry => entry[0])

        return res
    }
}
