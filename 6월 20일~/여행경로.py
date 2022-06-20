from collections import defaultdict

def solution(tickets):
    edge_list = defaultdict(list)
    answer = []
    stack = ["ICN"]

    for ticket in tickets:
        edge_list[ticket[0]].append(ticket[1])
    
    for key in edge_list.keys():
        edge_list[key].sort(reverse = -1)

    while stack:
        top = stack[-1]
        if top not in edge_list or not edge_list[top]:
            answer.append(stack.pop())
        else:
            stack.append(edge_list[top].pop())

    return answer[::-1]

print(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL", "SFO"]]))