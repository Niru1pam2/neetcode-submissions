class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        let countMap1 = new Map()
        let countMap2 = new Map()

        for (const char of s) {
            countMap1.set(char, (countMap1.get(char) || 0) + 1)
        }

        for (const char of t) {
            countMap2.set(char, (countMap2.get(char) || 0) + 1)
        }

        for (const [key, value] of countMap1) {
            if (countMap2.get(key) !== value) {
                return false
            }
        }

        return true
    }
}
