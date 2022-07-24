
def find_toy(board, index, n):
    value = 0
    for i in range(n):
        if board[i][index] > 0:
            value = board[i][index]
            board[i][index] = 0
            break

    return value

def solution(board, moves):
    answer = 0
    n = len(board)
    stack = []
    for i in moves:
        toy = find_toy(board, i - 1, n)
        if toy > 0:
            if stack and stack[-1] == toy: 
                answer += 1
                while stack and stack[-1] == toy:
                    stack.pop()
                    answer += 1
            else:
                stack.append(toy)

    return answer

print(solution([
    [0, 0, 0, 0, 0], 
    [0, 0, 1, 0, 3], 
    [0, 2, 5, 0, 1], 
    [4, 2, 4, 4, 2], 
    [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4]))