/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let previous = null;
  let current = head;
  let next = null;

  while (current != null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
};

console.log(reverseList([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
console.log(reverseList([1, 2])); // Output: [2, 1]
console.log(reverseList([])); // Output: []
