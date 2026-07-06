class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {

        const cleanedStr = s.toLowerCase().split('').filter(char => (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9'))

        const isPalindrome = (l, r) => {
            while (l < r) {
                if (cleanedStr[l] !== cleanedStr[r]) return false
                l++
                r--
            }
            return true
        }


        let l = 0
        let r = cleanedStr.length - 1

        while (l < r) {
            if (cleanedStr[l] !== cleanedStr[r]) {
                return isPalindrome(l + 1, r) || isPalindrome(l, r - 1)
            }
            l++
            r--
        }

        return true

    }
}
