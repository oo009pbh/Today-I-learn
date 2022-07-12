from sys import stdin
from collections import deque

def BFS (N, K):
    queue = deque([(N, 0)])
    min_value = -1
    min_value_count = 0

    while queue:
        n, count = queue.popleft()

        if min_value != -1 and min_value < count:
            return min_value, min_value_count

        if n == K:
            min_value = count
            min_value_count += 1

        if n < K: 
            queue.append((n * 2, count + 1))
            queue.append((n + 1, count + 1))
        if n - 1 > 0:
            queue.append((n - 1, count + 1))

    return min_value, min_value_count

N, K = map(int, stdin.readline().rstrip().split())
min_value, min_value_count = BFS(N, K)
print(min_value, min_value_count)