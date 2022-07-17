from sys import stdin
from collections import deque

def BFS(n, m, arr, queue):

    while queue:
        i, j = queue.popleft()
        for ni in [1, 0, -1]:
            for nj in [1, 0, -1]:
                if ni == 0 and nj == 0:
                    continue
                if 0 <= (ni + i) < n and 0 <= (nj + j) < m and arr[ni + i][nj + j] == 0:
                    arr[ni + i][nj + j] = arr[i][j] + 1
                    queue.append((ni + i, nj + j))

    return

n, m = map(int, stdin.readline().rstrip().split())
arr = [] * n
queue = deque([])

for i in range(n):
    arr.append(list(map(int, stdin.readline().rstrip().split())))

for i in range(n):
    for j in range(m):
        if arr[i][j] == 1:
            queue.append((i,j))
            
BFS(n, m, arr, queue)

print(max(map(max, arr)) - 1)