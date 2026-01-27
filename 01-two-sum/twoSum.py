from collections import Counter
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        neg_nums = [num * (num - target) for num in nums]
        num_dict = Counter(neg_nums)
        n = [k for k, v in num_dict.items() if v  == 2]
        for num in n:
            result = [i for i, v in enumerate(neg_nums) if v == num]
            if nums[result[0]] + nums[result[1]] == target:
                return result
