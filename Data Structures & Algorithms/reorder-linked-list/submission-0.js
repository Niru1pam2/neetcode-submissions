class Solution {
    /**
     * @param {ListNode} head
     * @return {void} Do not return anything, modify head in-place instead.
     */
    reorderList(head) {
        if (!head || !head.next) return;

        // Step 1: Find the middle
        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Step 2: Reverse second half
        let prev = null;
        let curr = slow.next;
        slow.next = null; // cut the first half

        while (curr) {
            let nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }

        // Step 3: Merge two halves
        let first = head;
        let second = prev;

        while (second) {
            let temp1 = first.next;
            let temp2 = second.next;

            first.next = second;
            second.next = temp1;

            first = temp1;
            second = temp2;
        }
    }
}
