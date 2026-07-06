class TrieNode {
    constructor() {
        this.children = new Map()
        this.isEnd = false
    }
}




class PrefixTree {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root
        for (let c of word) {
            if (!curr.children.has(c)) {
                curr.children.set(c, new TrieNode())
            }
            curr = curr.children.get(c)
        }

        curr.isEnd = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root
        for (let c of word) {
            if (!curr.children.has(c)) return false
            curr = curr.children.get(c)
        }
        return curr.isEnd
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root
        for (let p of prefix) {
            if (!curr.children.has(p)) return false
            curr = curr.children.get(p)
        }
        return true
    }
}
