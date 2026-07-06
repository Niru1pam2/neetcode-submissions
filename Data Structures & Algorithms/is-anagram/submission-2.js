class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length !== t.length) return false
        
        const first = {}

        for (let char of s) {
            if (!first[char]) first[char] = 0
            first[char] += 1
        }


        for (let char of t) {
            if (!first[char]) return false
            first[char] -= 1
        }

        return true
    }
}
