import math
class Solution:
    def climbStairs(self, n: int) -> int:
        count = 0
        # count permutations
        for i in range(int(n/2+1)):
            count += int(math.factorial(n-i)/(math.factorial(i)*math.factorial(n-2*i)))
        return count
