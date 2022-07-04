from sys import stdin

def solution(N, numbers):
    possilble_way = [0] * 21
    answer = [0] * 21 
    start = numbers.pop(0)
    goal = numbers.pop()
    possilble_way[start] = 1
    
    for number in numbers:
        for i in range(21):
            answer[i] = 0
        for i in range(21 - number):
            if possilble_way[i] != 0:
                answer[i + number] += possilble_way[i]
        for j in range(number, 21):
            if possilble_way[j] != 0:
                answer[j - number] += possilble_way[j]      
        possilble_way = answer.copy()
        
    return answer[goal]

N = int(stdin.readline())
numbers = list(map(int, stdin.readline().rstrip().split()))
print(solution(N, numbers))
