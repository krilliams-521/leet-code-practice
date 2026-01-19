function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  // while fast and fast.next != null
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;


    if (slow === fast) return true;

  }

  return false;
};


const nodeA = new ListNode(3);
const nodeB = new ListNode(2);
const nodeC = new ListNode(0);
const nodeD = new ListNode(-4);

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeB; // creates a cycle here

// show list structure via comment for visualization
// 3 -> 2 -> 0 -> -4
//      ^          |
//      |__________|

console.log(hasCycle(nodeA)); // Output: true

const nodeE = new ListNode(1);
const nodeF = new ListNode(2);

nodeE.next = nodeF;

// show list structure via comment for visualization
// 1 -> 2 -> null

console.log(hasCycle(nodeE)); // Output: false