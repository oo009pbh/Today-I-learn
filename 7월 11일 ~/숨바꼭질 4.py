from sys import stdin
from collections import deque

def BFS (N, K):
    visited = [False] * 100001
    queue = deque([(N, 0)])
    min_count = 1e9

    while queue:
        n, count = queue.popleft()
        visited[n] = True

        if n == K:
            min_count = count
            break
                
        if count + 1 > min_count:
            continue

        temp_n = n
        while temp_n != 0 and temp_n * 2 <= 100000:
            temp_n *= 2 
            if not visited[temp_n]:
                queue.append((temp_n, count))

        if n + 1 <= 100000 and not visited[n + 1]:            
            queue.append((n + 1, count + 1))
        if n - 1 >= 0 and not visited[n - 1]:
            queue.append((n - 1, count + 1))

    return min_count

N, K = map(int, stdin.readline().rstrip().split())
min_value = BFS(N, K)
print(min_value)