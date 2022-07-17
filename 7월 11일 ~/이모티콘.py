from collections import deque

def BFS (N):
    queue = deque([(1, 0)])
    visited = dict()
    visited[(1, 0)] = 0

    while queue:
        n, clip = queue.popleft()

        if n == N:
            return visited[(n, clip)]

        if (n, n) not in visited.keys():
            queue.append((n, n))
            visited[(n, n)] = visited[(n,clip)] + 1

        if n - 1 > 0 and (n - 1, clip) not in visited.keys():
            queue.append((n - 1, clip))
            visited[(n - 1, clip)] = visited[(n, clip)] + 1

        if clip != 0 and (n + clip, clip) not in visited.keys():
            queue.append((n + clip, clip))
            visited[(n + clip, clip)] = visited[(n, clip)] + 1

    return 0

N = int(input())
print(BFS(N))