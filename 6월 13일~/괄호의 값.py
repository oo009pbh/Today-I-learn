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
        # 닫는 괄호가 아닐 경우
        if word == "(" or word == "[":
            stack.append(word)
        # 닫는 괄호일 경우
        else :
            # 중간에 껴있는 숫자들을 전부 pop 해준다
            value = 0
            while stack and isinstance(stack[-1], int):
                value += stack.pop()
            # 숫자를 전부 pop 했음에도 맞는 괄호가 없거나 스택이 비었다면 바로 0 리턴
            if not stack or d[word]["bracket"] != stack[-1]:
                return 0
            else:
                if value: # 중간에 숫자가 있었다면 곱해준다.
                    value *= d[word]["value"]
                else: # 중간에 숫자가 없었다면 그대로 append.
                    value = d[word]["value"]
                # 쌍인 괄호를 pop 해준다
                stack.pop()
            # 숫자를 append
            stack.append(value)
    # 스택의 숫자들을 전부 pop 하고 더한다
    while stack and isinstance(stack[-1], int):
        answer += stack.pop()
    # 그럼에도 stack이 비어있지 않으면 쌍이 없는 괄호가 있는것이므로 0 리턴
    if stack:
        return 0
    else:    
        return answer

print(solution(list(input())))