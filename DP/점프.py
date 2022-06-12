from sys import stdin
input = stdin.readline

def solution(N):
    arr = [list(map(int, input().split())) for _ in range(N)]
    dp = [[0] * N for _ in range(N)]
    dp[0][0] = 1

    for i in range(N):
        for j in range(N):
            if i == N - 1 and j == N - 1:
                break
            if arr[i][j] == 0:
                continue
            if i + arr[i][j] < N:
                dp[i + arr[i][j]][j] += dp[i][j]
            if j + arr[i][j] < N:
                dp[i][j + arr[i][j]] += dp[i][j]
            
    return dp[N-1][N-1]

N = int(input())
print(solution(N))