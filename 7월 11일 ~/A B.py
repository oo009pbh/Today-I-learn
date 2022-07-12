from sys import stdin

def DFS (A, B):
    stack = [(A, 0)]

    while stack:
        n, count = stack.pop()

        if n == B:
            return count + 1

        if n * 10 + 1 <= B:
            stack.append((n * 2, count + 1))
            stack.append((n * 10 + 1, count + 1))
        elif n * 2 <= B:
            stack.append((n * 2, count + 1))

    return -1


A, B = map(int, stdin.readline().rstrip().split())

print(DFS(A, B))

