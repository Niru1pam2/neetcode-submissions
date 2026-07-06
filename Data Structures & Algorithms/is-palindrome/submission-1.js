class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        const cleanedStr = s.toLowerCase().split('').filter(char => (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')).join()
        let start = 0
        let end = cleanedStr.length - 1

        while (start < end) {
            if (cleanedStr[start] !== cleanedStr[end]) return false
            start++
            end--
        }

        return true

    }
}
