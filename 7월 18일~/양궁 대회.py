from collections import deque

def BFS(n, info):
    queue = deque([(0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])])
    max_value = 0
    answer = []

    while queue:
        pre_arrow, board = queue.popleft()
        hitted_arrows = sum(board)
        if hitted_arrows == n:
            # 현재 점수 확인
            lion, appeach = (0, 0)
            for i in range(11):
                if board[i] > info[i]:
                    lion += 10 - i
                elif info[i] > 0:
                    appeach += 10 - i
            
            if max_value < lion - appeach:
                max_value = lion - appeach
                answer.clear()
                answer.append(board)
            elif lion - appeach and max_value == lion - appeach:
                answer.append(board)
            continue

        elif hitted_arrows > n:
            continue

        elif pre_arrow == 10:
            temp = board.copy()
            temp[10] += n - hitted_arrows
            queue.append([11, temp])

        else:
            temp = board.copy()
            temp[pre_arrow] = info[pre_arrow] + 1
            queue.append([pre_arrow + 1, temp])

            temp2 = board.copy()
            temp2[pre_arrow] = 0
            queue.append([pre_arrow + 1, temp2])
        
    return answer

def solution(n, info):
    answer = BFS(n, info)
    
    if answer:
        return answer[-1]
    else:
        return [-1]
    

print(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]))