from sys import stdin
from itertools import combinations
import re
input = stdin.readline

def solution(N, K):
    if (K < 5):
        return 0

    answer = 0
    alphabet = set()
    arr = []

    for _ in range(N):
        word = set(list(re.sub('[aticn]', '', input().rstrip())))
        if len(word) <= K - 5:
            alphabet |= word
            arr.append(word)

    for subset in list(combinations(alphabet, min(len(alphabet),K-5))):
        subset = set(subset)
        temp = 0
        for word in arr:
            if word <= subset:
                temp += 1
        answer = max(temp, answer) 
        
    return answer

N, K = map(int, input().split())
print(solution(N, K))