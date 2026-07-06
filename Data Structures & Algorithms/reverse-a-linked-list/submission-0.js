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
     * @return {ListNode}
     */
    reverseList(head) {
        let curr = head
        let prev = null
        let nextPointer = null
        while (curr !== null) {
            nextPointer = curr.next
            curr.next = prev
            prev = curr
            curr = nextPointer
        }
        return prev
    }
}
