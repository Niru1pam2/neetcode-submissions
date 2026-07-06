class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let countMap = new Map()
        let result = []
        let sortedValue = []
        let count = k

        for (const num of nums) {
            countMap.set(num, (countMap.get(num) || 0) + 1)
        }

        for (const [key, value] of countMap) {
            sortedValue.push([key, value])
        }

        sortedValue.sort((a, b) => b[1] - a[1])

        for (const [a, b] of sortedValue) {
            if (count !== 0) {
                result.push(a)
                count--
            }
        }

        return result
    }
}
