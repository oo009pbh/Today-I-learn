from collections import deque
import re
import datetime

def solution(lines):
    parsed_times = deque([])
    answer = 0

    for line in lines:
        day, time, seconds = line.split()
        seconds = re.sub("[s]", "", seconds)
        date_time_obj = datetime.datetime.strptime(day + " " + time, '%Y-%m-%d %H:%M:%S.%f')
        seconds_obj = datetime.timedelta(seconds=float(seconds))
        parsed_times.append((date_time_obj, seconds_obj))


    while parsed_times:
        time, seconds = parsed_times.popleft()
        count = 1
        top = 0
        while top < len(parsed_times) and parsed_times[top][0] - parsed_times[top][1] + datetime.timedelta(seconds=0.001) <= parsed_times[top][0] + datetime.timedelta(seconds=2.999):
            if parsed_times[top][0] - parsed_times[top][1] + datetime.timedelta(seconds=0.001) < time + datetime.timedelta(seconds=1):
                count += 1
            top += 1
        answer = max(answer, count)
    return answer

print(solution(["2016-09-15 01:00:04.001 0.001s", "2016-09-15 01:00:05.001 0.001s"]))
["2016-09-15 01:00:04.001 2.0s", "2016-09-15 01:00:07.000 2s"]
["2016-09-15 01:00:04.001 0.001s", "2016-09-15 01:00:05.001 0.001s"]