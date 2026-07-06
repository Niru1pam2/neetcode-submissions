class TrieNode {
    constructor() {
        this.children = new Map()
        this.end = false
    }
}



class WordDictionary {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root
        for (let c of word) {
            if (!curr.children.has(c)) {
                curr.children.set(c, new TrieNode())
            }
            curr = curr.children.get(c)
        }
        curr.end = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root

        const dfs = (node, i) => {
            //base case
            if (i === word.length) {
                return node.end
            }

            const char = word[i]

            if (char === '.') {
                for (let child of node.children.values()) {
                    if (dfs(child, i + 1)) return true
                }
                return false
            }

            //backtracking case
            if (!node.children.has(char)) return false

            //recursive case
            return dfs(node.children.get(char), i + 1)
        }

        return dfs(curr, 0)
    }
}
