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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        let queue1 = [p]
        let queue2 = [q]

        while (queue1.length && queue2.length) {
            let node1 = queue1.shift()
            let node2 = queue2.shift()

            if (!node1 && !node2) continue

            if (!node1 || !node2) return false

            if (node1.val !== node2.val) return false

            queue1.push(node1.left)
            queue1.push(node1.right)

            queue2.push(node2.left)
            queue2.push(node2.right)

        }

        return true
    }
}
