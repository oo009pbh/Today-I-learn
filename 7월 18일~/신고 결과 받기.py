from collections import defaultdict
import math

def cal_time(IN, OUT):
    i_hour, i_minute = map(int, IN.split(':'))
    o_hour, o_minute = map(int, OUT.split(':'))

    return (o_hour - i_hour) * 60 + (o_minute - i_minute)
    
def cal_fees(fees, time):
    standard_time, standard_fee, unit_time, unit_fee = fees
    if time <= standard_time:
        return standard_fee
    else:
        return math.ceil((time - standard_time) / unit_time) * unit_fee + standard_fee

def solution(fees, records):
    answer = []
    r_dict = defaultdict(dict)
    
    for r in records:
        time, key, type = r.split(' ')
        r_dict[key][type] = time
        if type == 'OUT':
            if 'time' not in r_dict[key]:
                r_dict[key]['time'] = 0
            r_dict[key]['time'] += cal_time(r_dict[key]['IN'], time)
            r_dict[key]['IN'] = ''
            r_dict[key]['OUT'] = ''
    
    for key in sorted(r_dict.keys()):
        if r_dict[key]['IN']:
            if 'time' not in r_dict[key]:
                r_dict[key]['time'] = 0
            r_dict[key]['time'] += cal_time(r_dict[key]['IN'], '23:59')

        answer.append(cal_fees(fees, r_dict[key]['time']))

    return answer

print(solution([180, 5000, 10, 600], ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]))