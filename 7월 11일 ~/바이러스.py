from sys import stdin
from collections import defaultdict

def DFS (graph, root):
    stack = [root]
    visited = []
    count = 0
    while stack:
        n = stack.pop()

        if n not in visited:
            count += 1
            visited.append(n)
            stack += graph[n] - set(visited)

    return count - 1 if count >= 1 else 0


graph = defaultdict(set)
n = int(input())
m = int(input())

for _ in range(m):
    c1, c2 = map(int, stdin.readline().rstrip().split())
    graph[c1].add(c2)
    graph[c2].add(c1)

print(DFS(graph, 1))

