from sys import stdin
input = stdin.readline

def solution(N, S, M):
    arr = list(map(int, input().split()))
    dp = [S]
    for i in range(N):
        temp = []
        while dp:
            current = dp.pop()
            if current + arr[i] >= 0 and current + arr[i] <= M:
                temp.append(current + arr[i])
            if current - arr[i] >= 0 and current - arr[i] <= M:
                temp.append(current - arr[i])
        dp += temp
    return max(dp) if dp else -1

N, S, M = map(int, input().split())
print(solution(N, S, M))