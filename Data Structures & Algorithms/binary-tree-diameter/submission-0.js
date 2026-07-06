/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let maxD = 0

        const dfs = (node) => {
            if (!node) return 0

            let left = dfs(node.left)
            let right = dfs(node.right)

            let currD = left + right
            maxD = Math.max(currD, maxD)

            return Math.max(left, right) + 1
        }

        dfs(root)

        return maxD
    }
}
