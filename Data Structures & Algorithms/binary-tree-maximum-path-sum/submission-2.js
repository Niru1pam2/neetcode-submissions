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
    maxPathSum(root) {

        let res = [root.val]

        this.dfs(res, root)

        return res[0]
    }

    dfs(res, root) {
        if (root === null) return 0

        let leftMax = Math.max(this.dfs(res, root.left), 0)
        let rightMax = Math.max(this.dfs(res, root.right), 0)

        res[0] = Math.max(res[0], root.val + leftMax + rightMax)

        return root.val + Math.max(leftMax, rightMax)
    }
}
