class Node(object):
    def __init__(self, index = None, value = None, left = None, right = None):
        self.index = index
        self.value = value
        self.left = left
        self.right = right

def dfs(graph):
    stack = [(0, 0, 0)]
    answer = 0
    while stack:
        visited = []
        sheep, wolf, position = stack.pop()
        if position in visited:
            continue

        visited.append(position)
        current = graph[position]
        left = current.left
        right = current.right
        
        if current.value == 0:
            sheep += 1
        else:
            wolf += 1
        
        if sheep <= wolf:
            answer = max(answer, sheep)
            continue

        if right and right.value == 1:
            stack.append((sheep, wolf, right.index))
        if left and left.value == 1:
            stack.append((sheep, wolf, left.index))
        if right and right.value == 0:
            stack.append((sheep, wolf, right.index))
        if left and left.value == 0:
            stack.append((sheep, wolf, left.index))
        
    return answer

def solution(info, edges):
    answer = 0
    graph = {}
    for [index, value] in enumerate(info):
        graph[index] = Node(index, value)
    
    for edge in edges:
        A, B = edge
        if graph[A].left is None:
            graph[A].left = graph[B]
        else:
            graph[A].right = graph[B]

    answer = dfs(graph)
    return answer

print(solution([0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0], [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6], [3, 7], [4, 8], [6, 9], [9, 10]]))