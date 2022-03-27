def solution(answers):
    winner = []

    students = [
        [1, 2, 3, 4, 5], 
        [2, 1, 2, 3, 2, 4, 2, 5], 
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]

    max = 0

    for sIndex, student in enumerate(students):
        temp = 0
        for aIndex, answer in enumerate(answers):
            if student[aIndex % len(student)] == answer:
                temp += 1
        if max < temp:
            max = temp
            winner = [sIndex + 1]
        elif max == temp:
            winner.append(sIndex + 1)
    return winner


print(solution([1,2,3,4,5]))