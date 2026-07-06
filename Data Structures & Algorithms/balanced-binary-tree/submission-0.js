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
     * @return {boolean}
     */
    isBalanced(root) {
        if (!root) return true

        function height(node) {
            if (!node) return 0

            return 1 + Math.max(height(node.left), height(node.right))
        }

        const leftHeight = height(root.left)
        const rightHeight = height(root.right)

        if(Math.abs(leftHeight - rightHeight) > 1) {
            return false
        }

        return this.isBalanced(root.left) && this.isBalanced(root.right)
    }
}
