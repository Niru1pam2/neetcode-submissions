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
     * @return {TreeNode}
     */
    invertTree(root) {
       return this.dfs(root)
    }

    dfs(node) {
        if (!node) return null

        let left = this.dfs(node.left)
        let right = this.dfs(node.right)

        node.left = right
        node.right = left

        return node
    }
}
