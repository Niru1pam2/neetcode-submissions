class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []

        for (const token of tokens) {
            if (token === "+") {
                let num2 = stack.pop()
                let num1 = stack.pop()
                stack.push(num1 + num2)
            } else if (token === "-") {
                let num2 = stack.pop()
                let num1 = stack.pop()
                stack.push(num1 - num2)
            } else if (token === "*") {
                let num2 = stack.pop()
                let num1 = stack.pop()
                stack.push(num1 * num2)
            } else if (token === "/") {
                let num2 = stack.pop()
                let num1 = stack.pop()
                stack.push(Math.trunc(num1 / num2))
            } else {
                stack.push(parseInt(token))
            }
        }

        return stack.pop()
    }
}
