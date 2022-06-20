from collections import deque

def solution(l, w, trucks):
    on_road = deque([])
    trucks = deque(trucks)
    t = 0
    road_weight = 0
    while trucks:
        t += 1
        if on_road and t - on_road[0][1] == l:
            weight, _ = on_road.popleft()
            road_weight -= weight
        
        if road_weight + trucks[0] <= w:
            truck = trucks.popleft()
            road_weight += truck
            on_road.append((truck, t))
    
    if on_road:
        _ , time = on_road.pop()
        t += l - (t - time)
    
    return t

print(solution(	2, 10, [7, 4, 5, 6]))