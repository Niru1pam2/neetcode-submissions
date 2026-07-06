class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0
        let j = numbers.length - 1

        while (i < j) {
            let currentSum = numbers[i] + numbers[j]
            if (currentSum < target) {
                i++
            } else if (currentSum > target) {
                j--
            } else {
                return [i+1, j+1]
            }
        }
    }
}
