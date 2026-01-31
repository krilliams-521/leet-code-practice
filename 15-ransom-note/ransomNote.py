from collections import Counter
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        ransom = Counter(ransomNote)
        mag = Counter(magazine)
        for letter in ransom:
            if ransom[letter] > mag[letter]:
                return False
        return True
