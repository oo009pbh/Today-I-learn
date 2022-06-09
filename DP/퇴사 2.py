from sys import stdin

def solution(N):
    answer = [0] * (N + 1)
    t = []
    p = []
    for _ in range(N):
        day, pay = map(int, stdin.readline().split())
        t.append(day)
        p.append(pay)

    for i in range(N):
        # 미래에 가장 큰값을 갱신
        # 돈 받는 날짜가 N일 보다 넘어가면 의미 없으니 갱신 제외
        if i + t[i] <= N: 
            answer[i + t[i]] = max(answer[i + t[i]], answer[i] + p[i])
        # 이전부터 계속 갱신되어왔던 i+1 일의 최대 금액과 (안되었을수도 있음), 오늘날짜의 최대금액을 비교하며 i+1에 저장
        answer[i + 1] = max(answer[i], answer[i + 1])
    return answer[N]
# i번째 날까지의 최대금액을 계속 갱신해 간다고 생각하면 좋을 것 같다.
N = int(stdin.readline())
print(solution(N))

