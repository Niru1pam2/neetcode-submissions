class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ''
        for (const str of strs) {
            let curStr = str.length + "#" + str
            res += curStr
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []

        let i = 0
        while (i < str.length) {
            let j = i
            while (str[j] !== "#") {
                j++
            }

            let length = parseInt(str.substring(i, j))

            i = j + 1

            let curStr = str.substring(i, i + length)
            res.push(curStr)

            i = i + length

        }

        return res

    }
}
