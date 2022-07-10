from sys import stdin
from collections import defaultdict
from collections import deque

def DFS(graph, root):
    visited = []
    stack = [root]

    while stack:
        n = stack.pop()
        if n not in visited:
            visited.append(n)
            if n in graph:
                temp = list(set(graph[n]) - set(visited))
                temp.sort(reverse=True)
                stack += temp
    return " ".join(str(i) for i in visited)

def BFS(graph, root):
    visited = []
    queue = deque([root])

    while queue:
        n = queue.popleft()
        if n not in visited:
            visited.append(n)
            if n in graph:
                temp = list(set(graph[n]) - set(visited))
                temp.sort()
                queue += temp
    return " ".join(str(i) for i in visited)

graph = defaultdict(set)
n, m, start = map(int, stdin.readline().rstrip().split())
for i in range(1, m + 1):
    v1, v2 = map(int, stdin.readline().rstrip().split())
    graph[v1].add(v2)
    graph[v2].add(v1)

print(DFS(graph, start))
print(BFS(graph, start))
