def solution(n, k):
    answer = 0
    string_n = ""
    l = []
    
    while n > 0:
        string_n = str(n % k) + string_n
        n //= k

    for temp in string_n.split('0'):
        if temp:
            l.append(int(temp))
    
    for item in l:
        is_prime = True
        temp = 2
        while temp * temp <= item:
            if item % temp == 0:
                is_prime = False
                break
            temp += 1

        if item != 0 and item != 1 and is_prime:
            answer += 1
        
    return answer

print(solution(437674, 3))