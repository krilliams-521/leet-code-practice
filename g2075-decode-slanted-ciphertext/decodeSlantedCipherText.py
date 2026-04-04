class Solution:
    def decodeCiphertext(self, encodedText: str, rows: int) -> str:
        cols = len(encodedText)//rows
        text = ""
        for i in range(cols):
            for j in range(rows):
                index = j*cols + (i+j)
                if index > len(encodedText)-1:
                    break
                text += encodedText[index]
        return text.rstrip()
