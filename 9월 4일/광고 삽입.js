function timeToInt (time) {
    let [hour, minute, second] = time.split(":");
    return parseInt(hour) * 3600 + parseInt(minute) * 60 + parseInt(second);
}

function intToTime (time) {
    let hour = Math.floor(time / 3600).toString();
    time %= 3600;
    let minute = Math.floor(time / 60).toString();
    time %= 60;
    let second = time.toString();
    return (hour.length === 1 ? "0" + hour : hour) + ":" + (minute.length === 1 ? "0" + minute : minute) + ":" + (second.length === 1 ? "0" + second : second);
}

function solution(play_time, adv_time, logs) {
    let answer = [0, 0];
    let new_logs = [];
    play_time = timeToInt(play_time);
    adv_time = timeToInt(adv_time);
    for (let log of logs) {
        let [start, end] = log.split('-');
        start = timeToInt(start);
        end = timeToInt(end);
        new_logs.push([start, end]);
    }
    new_logs.sort((a, b) => a[0] - b[0]);
    for (let [i, log] of new_logs.entries()) {
        let end_time = log[0] + adv_time;
        if (end_time <= play_time) {
            let value = 0;
            for (let j = i ; j < new_logs.length; j++) {
                if (new_logs[j][0] <= end_time) {
                    value += end_time - new_logs[j][0];
                } else break;
            }
            answer = answer[1] < value ? [log[0], value] : answer;
        }
    }

    return intToTime(answer[0]);
}

console.log(solution(	"02:03:55", "00:14:15", ["01:20:15-01:45:14", "00:25:50-00:48:29", "00:40:31-01:00:00", "01:37:44-02:02:30", "01:30:59-01:53:29"]))