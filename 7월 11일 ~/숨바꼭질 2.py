from sys import stdin
from collections import deque

def BFS (N, K):
    visited = [False] * 100001
    queue = deque([(N, 0)])
    min_count = 1e9
    min_counts = 0

    while queue:
        n, count = queue.popleft()
        visited[n] = True

        if n == K :
            if count == min_count:
                min_counts += 1
            elif count < min_count:
                min_count = count
                min_counts = 1
                
        if count + 1 > min_count:
            continue

        if n * 2 <= 100000 and not visited[n * 2]:
            queue.append((n * 2, count + 1))
        if n + 1 <= 100000 and not visited[n + 1]:            
            queue.append((n + 1, count + 1))
        if n - 1 >= 0 and not visited[n - 1]:
            queue.append((n - 1, count + 1))

    return min_count, min_counts

N, K = map(int, stdin.readline().rstrip().split())
min_value, min_value_count = BFS(N, K)
print(min_value, min_value_count)