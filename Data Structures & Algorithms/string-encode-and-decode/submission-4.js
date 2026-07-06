class Solution {

    encode(strs) {
        let res = ''

        for (const str of strs) {
            res += str.length + '#' + str
        }

        return res
    }


    decode(str) {
        let res = []
        let i = 0

        while (i < str.length) {
            let j = i
            while (str[j] !== '#') {
                j++
            }

            const length = +(str.substring(i, j))
            const word = str.substring(j + 1, length + j + 1)
            res.push(word)
            i = j + length + 1
        }

        return res
    }
}


