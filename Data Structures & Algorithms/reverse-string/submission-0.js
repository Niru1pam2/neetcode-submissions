class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let f = 0
        let e = s.length - 1

        while (f < e) {
            [s[f], s[e]] = [s[e], s[f]]

            f++
            e--
        }

        return s
    }
}
