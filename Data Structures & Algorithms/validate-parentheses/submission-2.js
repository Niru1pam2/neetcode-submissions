class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length === 0 || s.length === 1) return false

        let stack = []


        for (const paren of s) {
            if (paren === "(" || paren === "{" || paren === "[") {
                stack.push(paren)
            } else if (stack[stack.length - 1] === "(" && paren === ")") {
                stack.pop()
            } else if (stack[stack.length - 1] === "{" && paren === "}") {
                stack.pop()
            } else if (stack[stack.length - 1] === "[" && paren === "]") {
                stack.pop()
            } else {
                return false
            }
        }

        return stack.length === 0

    }
}

