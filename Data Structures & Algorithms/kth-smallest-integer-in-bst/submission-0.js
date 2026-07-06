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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let sortedArr = []

        const dfs = (root) => {
            if (!root) return null

            dfs(root.left)
            sortedArr.push(root.val)
            dfs(root.right)

            return root
        }

        dfs(root)

        return sortedArr[k - 1]
    }
}
