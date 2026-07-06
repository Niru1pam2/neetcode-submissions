class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */

    valid(s) {
        let open = 0
        for(const c of s) {
            open+= c=== '(' ? 1 : -1
            if(open < 0) return false
            
        }

        return open===0
    }


    dfs(s, res, n) {
        if(s.length === 2 * n) {
            if(this.valid(s)) res.push(s)
            return
        }

        this.dfs(s + '(', res, n)
        this.dfs(s + ')', res, n)
    }


    generateParenthesis(n) {
        const res = []
        this.dfs("", res, n)
        return res
    }
}
