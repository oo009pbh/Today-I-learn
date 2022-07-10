from sys import stdin
from collections import defaultdict

def DFS(graph, visited, root):
    stack = [root]
    count = 0

    while stack:
        v = stack.pop()
        visited[v[0]][v[1]] = True
        count += 1

        for tv in list(graph[v]):
            if not visited[tv[0]][tv[1]] and tv not in stack:
                stack.append(tv)
                    
    return count * count

graph = defaultdict(set)
n, m = map(int, stdin.readline().rstrip().split())
visited = [] * m
arr = [] * m
d = {'B': 0,'W': 0}

for i in range(m):
    arr.append(list(stdin.readline().rstrip()))
    visited.append([False for _ in range(n)])

for i in range(m):
    for j in range(n):
        if i != 0 and arr[i][j] == arr[i - 1][j]:
            graph[(i, j)].add((i - 1, j))
        if j != 0 and arr[i][j] == arr[i][j - 1]:
            graph[(i, j)].add((i, j - 1))
        if i < m - 1 and arr[i][j] == arr[i + 1][j]:
            graph[(i, j)].add((i + 1, j))
        if j < n - 1 and arr[i][j] == arr[i][j + 1]:
            graph[(i, j)].add((i, j + 1))
        if (i, j) not in graph:
            graph[(i, j)] = set()

for i in range(m):
    for j in range(n):
        if not visited[i][j]:
            d[arr[i][j]] += DFS(graph, visited, (i, j))

print(d['W'], d['B'])
