| #  | Problem                         | Pattern / Algorithm            | Notes                                                        |
| -- | ------------------------------- | ------------------------------ | ------------------------------------------------------------ |
| 1  | Two Sum                         | Hash Map                       | Store seen numbers and look up complements in O(1).          |
| 2  | Valid Parentheses               | Stack                          | Push opens and pop matching closes.                          |
| 3  | Merge Two Sorted Lists          | Linked List, Two Pointers      | Traverse both lists and build a merged result.               |
| 4  | Best Time to Buy and Sell Stock | Greedy (One Pass)              | Track minimum price so far and maximum profit.               |
| 5  | Valid Palindrome                | Two Pointers                   | Compare characters from both ends inward.                    |
| 6  | Invert Binary Tree              | DFS, Recursion                 | Swap left and right children recursively.                    |
| 7  | Valid Anagram                   | Hash Map, Frequency Count      | Count characters and compare frequencies.                    |
| 8  | Binary Search                   | Binary Search                  | Repeatedly halve the search space.                           |
| 9  | Flood Fill                      | DFS on Matrix                  | Visit connected cells and recolor them.                      |
| 10 | Lowest Common Ancestor (BST)    | BST Traversal                  | Use BST ordering to find the split point.                    |
| 11 | Balanced Binary Tree            | Post-Order DFS                 | Compute subtree heights and detect imbalance.                |
| 12 | Linked List Cycle               | Fast & Slow Pointers           | Use Floyd's cycle detection algorithm.                       |
| 13 | Implement Queue Using Stacks    | Two Stacks                     | Use one stack for input and one for output.                  |
| 14 | First Bad Version               | Binary Search                  | Search for the first true value in a predicate.              |
| 15 | Ransom Note                     | Hash Map, Frequency Count      | Count available characters and consume them.                 |
| 16 | Climbing Stairs                 | Dynamic Programming            | Fibonacci-style recurrence relation.                         |
| 17 | Longest Palindrome              | Hash Map, Frequency Count      | Use character pairs and an optional center character.        |
| 18 | Reverse Linked List             | Linked List Iteration          | Reverse `next` pointers in-place.                            |
| 19 | Majority Element                | Boyer-Moore Voting             | Track a candidate and running count.                         |
| 20 | Add Binary                      | Bit Manipulation, Two Pointers | Simulate binary addition with carry.                         |
| 21 | Diameter of Binary Tree         | DFS, Recursion                 | Track the longest path through any node.                     |
| 22 | Middle of the Linked List       | Fast & Slow Pointers           | Move slow by 1 and fast by 2; slow ends at the middle.       |
| 23 | Maximum Depth of Binary Tree    | DFS, Recursion                 | Depth = `1 + max(leftDepth, rightDepth)`.                    |
| 24 | Contains Duplicate              | Hash Set                       | Track seen values and return true when a duplicate is found. |
