class MyQueue:

    def __init__(self):
        self.stack1 = []
        self.stack2 = []

    def push(self, x: int) -> None:
        self.stack1.append(x)

    def pop(self) -> int:
        while len(self.stack1) > 1:
            self.stack2.append(self.stack1.pop())
        pop_obj = self.stack1.pop()
        while self.stack2:
            self.stack1.append(self.stack2.pop())
        return pop_obj

    def peek(self) -> int:
        while self.stack1:
            self.stack2.append(self.stack1.pop())
        first = self.stack2.pop()
        self.stack2.append(first)
        while self.stack2:
            self.stack1.append(self.stack2.pop())
        return first

    def empty(self) -> bool:
        return False if self.stack1 else True


# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()
