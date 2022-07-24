def solution(s):
    answer = ''
    s_list = list(s)
    d = {
        'zero' : '0',
        'one' : '1',
        'two' : '2',
        'three' : '3',
        'four' : '4',
        'five' : '5',
        'six' : '6',
        'seven' : '7',
        'eight' : '8',
        'nine' : '9',
    }

    temp = ''
    while s_list:
        t = s_list.pop()
        if t + temp in d:
            answer = d[t + temp] + answer
            temp = ''
        elif t >= '0' and t <= '9':
            answer = t + answer
        else:
            temp = t + temp
    
    return int(answer)


print(solution("one4seveneight"))