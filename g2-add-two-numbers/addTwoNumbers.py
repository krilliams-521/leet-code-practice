# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        num1 = num2 = 0
        digit = 1
        while l1 or l2:
            if l1:
                num1 += l1.val * digit
                l1 = l1.next
            if l2:
                num2 += l2.val * digit
                l2 = l2.next
            digit *= 10
        sum = num1 + num2
        l3 = ListNode(next=ListNode(0))
        temp = l3
        while(sum > 0):
            num = sum % 10
            sum = sum // 10
            l3.next = ListNode(num)
            l3 = l3.next
        return temp.next
