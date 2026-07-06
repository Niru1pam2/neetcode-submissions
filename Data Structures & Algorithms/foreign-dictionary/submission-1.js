class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        const adj = new Map()
        const inDegree = new Map()

        for (const word of words) {
            for (const char of word) {
                adj.set(char, new Set())
                inDegree.set(char, 0)
            }
        }


        for (let i = 0; i < words.length - 1; i++) {
            const w1 = words[i]
            const w2 = words[i + 1]

            if (w1.length > w2.length && w1.startsWith(w2)) {
                return ""
            }

            for (let j = 0; j < Math.min(w1.length, w2.length); j++) {
                const c1 = w1[j]
                const c2 = w2[j]

                if (c1 !== c2) {
                    if (!adj.get(c1).has(c2)) {
                        adj.get(c1).add(c2)
                        inDegree.set(c2, inDegree.get(c2) + 1)
                    }
                    break
                }
            }
        }

        const queue = []

        for (const [char, degree] of inDegree.entries()) {
            if (degree === 0) queue.push(char)
        }

        let result = ""

        while (queue.length) {
            const char = queue.shift()
            result += char

            for (const nei of adj.get(char)) {
                inDegree.set(nei, inDegree.get(nei) - 1)

                if (inDegree.get(nei) === 0) queue.push(nei)
            }
        }

        return result.length === inDegree.size ? result : ""
    }
}
