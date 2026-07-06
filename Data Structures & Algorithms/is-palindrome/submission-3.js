class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let strCleaned = s.toLowerCase().split("").filter((a) =>( a >= "a" && a<="z") || (a>="0" && a<="9"))

        let i = 0
        let j = strCleaned.length - 1

        while (i <= j) {
            if (strCleaned[i] !== strCleaned[j]) {
                return false
            }
            i++
            j--
        }

        return true

    }
}
