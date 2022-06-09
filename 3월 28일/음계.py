def solution(answers):
    aToggle = True
    bToggle = True
    for idx , answer in enumerate(answers):
        if answer != idx + 1:
            aToggle = False
        if answer != 8 - idx:
            bToggle = False
    if aToggle:
        return "ascending"
    elif bToggle:
        return "descending"
    else:
        return "mixed"

answers = list(map(int, input().split()))
print(solution(answers))