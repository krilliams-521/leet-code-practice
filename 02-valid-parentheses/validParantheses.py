class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for char in s:
            if char in ('(', '[', '{'):
                stack.append(char)
            else:
                if stack == [] or [stack[-1], char] not in (['[', ']'], ['(', ')'], ['{', '}']):
                    return False
                del stack[-1]
        return stack == []


if __name__ == "__main__":
    sol = Solution()
    print(sol.isValid("()"))          # True
    print(sol.isValid("()[]{}"))      # True
    print(sol.isValid("(]"))          # False
    print(sol.isValid("([)]"))        # False
    print(sol.isValid("{[]}"))        # True