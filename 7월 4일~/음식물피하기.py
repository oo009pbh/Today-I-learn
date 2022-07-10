from sys import stdin
from collections import defaultdict

def DFS(graph, visited, root):
    stack = [root]
    count = 0

    while stack:
        y , x = stack.pop()
        visited[y][x] = True
        count += 1

        for tv in list(graph[(y, x)]):
            if not visited[tv[0]][tv[1]] and tv not in stack:
                stack.append(tv)
                    
    return count

graph = defaultdict(set)
n, m, trash = map(int, stdin.readline().rstrip().split())
visited = [[False] * m for _ in range(n)]
arr = [[0] * m for _ in range(n)]
answer = 0

for _ in range(trash):
    r, c = map(int, stdin.readline().rstrip().split())
    arr[r - 1][c - 1] = 1

for i in range(n):
    for j in range(m):
        if i != 0 and arr[i - 1][j]:
            graph[(i, j)].add((i - 1, j))
        if j != 0 and arr[i][j - 1]:
            graph[(i, j)].add((i, j - 1))
        if i < n - 1 and arr[i + 1][j]:
            graph[(i, j)].add((i + 1, j))
        if j < m - 1 and arr[i][j + 1]:
            graph[(i, j)].add((i, j + 1))

for i in range(n):
    for j in range(m):
        if not visited[i][j] and arr[i][j]:
            answer = max(DFS(graph, visited, (i, j)), answer)

print(answer)
