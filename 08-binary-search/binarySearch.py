class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums)
        while right > left:
            partition = int((right+left)/2)
            if target > nums[partition]:
                left = partition+1
            elif target < nums[partition]:
                right = partition
            else:
                return partition
        return -1
