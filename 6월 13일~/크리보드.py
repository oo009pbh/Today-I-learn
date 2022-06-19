def solution(N):
    if N <= 4:
        return N
    dp = [0] * (N + 1)

    dp[1] = 1
    dp[2] = 2
    dp[3] = 3
    dp[4] = 4

    for i in range(5, N + 1):
        dp[i] = max(dp[i - 1] + 1, dp[i - 3] * 2, dp[i - 4] + dp[i - 1])
        
    return dp[N]

N = int(input())
print(solution(N))