# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
    def firstBadVersion(self, n: int) -> int:
        left = 0
        right = n
        while right >= left:
            partition = int((right+left)/2)
            if isBadVersion(partition) and not isBadVersion(partition-1):
                return partition
            elif not isBadVersion(partition):
                left = partition+1
            else:
                right = partition
