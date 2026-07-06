class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let start = 1
        let end = Math.max(...piles)

        let result = 0

        while (start <= end) {
            let middle = Math.floor((start + end) / 2)


            let totalTime = 0

            for (let pile of piles) {
                totalTime += Math.ceil(pile / middle)
            }

            if (totalTime <= h) {
                result = middle
                end = middle - 1
            } else {
                start = middle + 1
            }
        }


        return result
    }
}
