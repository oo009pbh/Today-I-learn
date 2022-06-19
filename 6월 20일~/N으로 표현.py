def solution(N, number):
    if N == number:
        return 1
    dp = { 0 : []}

    for i in range(1, 9):
        dp[i] = []
        dp[i].append(int(str(N) * i))

    for i in range(2, 9):
        for j in (1, i // 2 + 1):
            for x in dp[j]:
                for y in dp[i - j]:
                    dp[i].append(x + y)
                    dp[i].append(x * y)
                    dp[i].append(y - x)
                    dp[i].append(x - y)
                    if x != 0:
                        dp[i].append(y // x)
                    if y != 0:
                        dp[i].append(x // y)
        if number in dp[i]:
            return i     
        
    return -1

print(solution(5, 12))