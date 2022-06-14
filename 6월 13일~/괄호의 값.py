def solution(words):
    answer = 0
    stack = []
    d = {
        ")" : {
            "bracket" : "(",
            "value" : 2
        },
        "]" : {
            "bracket" : "[",
            "value" : 3
        }
    }
    for word in words:
        if word == "(" or word == "[":
            stack.append(word)
        else :
            value = 0
            while stack and isinstance(stack[-1], int):
                value += stack.pop()

            if not stack or d[word]["bracket"] != stack[-1]:
                return 0
            else:
                if value: 
                    value *= d[word]["value"]
                else:
                    value = d[word]["value"]
                stack.pop()
            stack.append(value)
    
    while stack and isinstance(stack[-1], int):
        answer += stack.pop()
    if stack:
        return 0
    else:    
        return answer

print(solution(list(input())))