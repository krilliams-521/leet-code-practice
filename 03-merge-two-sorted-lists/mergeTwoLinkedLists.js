/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  // Create a dummy node to build the new list off of
  let dummy = new ListNode(-1);
  let current = dummy;

  // Walk through both lists
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // Attach any remaining nodes (one of them may still have values left)
  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  // Return the real head (dummy.next)
  return dummy.next;
};

console.log(
  mergeTwoLists(
    { val: 1, next: { val: 2, next: { val: 4, next: null } } },
    { val: 1, next: { val: 3, next: { val: 4, next: null } } }
  )
);
// Output: { val: 1, next: { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 4, next: null } } } } } } }
