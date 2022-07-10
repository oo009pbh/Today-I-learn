from sys import stdin
from collections import defaultdict
from collections import deque

def BFS(graph, arr, root):
    queue = deque([root])
    visited = []

    while queue:
        n = queue.popleft()

        if n not in visited:
            visited.append(n)
            for tn in list(graph[n]):
                if arr[tn[0]][tn[1]] == 1:
                    arr[tn[0]][tn[1]] = arr[n[0]][n[1]] + 1
                    queue.append(tn)

    return arr

graph = defaultdict(set)
n, m = map(int, stdin.readline().rstrip().split())
arr = [] * n

for i in range(n):
    arr.append(list(map(int, stdin.readline().rstrip())))

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

arr = BFS(graph, arr, (0, 0))
print(arr[n - 1][m - 1])