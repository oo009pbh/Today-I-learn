from sys import stdin

def solution(N, BOJ):
    answer = [-1] * (N)
    for j in range(1, N):
        if BOJ[j] == "O":
            answer[j] = j * j


    for i in range(1, N):
        if answer[i] == -1: continue
        for j in range(i + 1, N):
            if (BOJ[i] == "B" and BOJ[j] == "O") or (BOJ[i] == "O" and BOJ[j] == "J") or (BOJ[i] == "J" and BOJ[j] == "B"):
                if answer[j] == -1:
                    answer[j] = (j - i) * (j - i)
                else:
                    answer[j] = min(answer[j], (j - i) * (j - i) + answer[i])
        
    return answer[N - 1]

N = int(stdin.readline())
BOJ = stdin.readline().rstrip()
print(solution(N, BOJ))
