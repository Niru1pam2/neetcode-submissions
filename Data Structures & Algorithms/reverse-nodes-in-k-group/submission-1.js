/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        if (head === null) return null

        let node = head
        let count = 0
        while (node !== null && count < k) {
            node = node.next
            count++
        }

        if (count < k) return head

        let i = 0
        let prev = null
        let next
        let curr = head

        while (i < k) {
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
            i++
        }

        if(next !== null) {
            head.next = this.reverseKGroup(next, k) 
        }

        return prev

    }
}
