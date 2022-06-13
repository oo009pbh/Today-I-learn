class Node(object):
    def __init__(self, key, str = None):
        self.key = key
        self.str = str
        self.has_children = False
        self.children = {}

class Trie():
    def __init__(self):
        self.head = Node(None);

    def insert(self, str = None):
        current = self.head;
        for char in str:
            if char not in current.children:
                current.children[char] = Node(char)
            elif not current.children[char].has_children:
                current.children[char].has_children = True 
            current = current.children[char]
        current.str = str

    def returnNumber(self, str = None):
        current = self.head;
        number = 0

        for char in str:
            if char in current.children:
                current = current.children[char]
            number += 1
            if current.str == str or not current.has_children:
                return number
        return number

def solution(words):
    answer = 0
    trie = Trie()
    for word in words:
        trie.insert(word)

    for word in words:
        answer += trie.returnNumber(word)
    
    return answer

print(solution(
    ["word","war","warrior","world"]
))


# ["abc","def","ghi","jklm"],
# ["word","war","warrior","world"]