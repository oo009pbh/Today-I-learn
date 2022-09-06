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
    play_time = timeToInt(play_time);
    adv_time = timeToInt(adv_time);
    let all_time = Array.from({length: play_time + 1}, () => 0);

    for (let log of logs) {
        let [start, end] = log.split('-');
        start = timeToInt(start);
        end = timeToInt(end);
        all_time[start] += 1;
        all_time[end] -= 1;
    }
    for (let i = 1; i < all_time.length; i++) {
        all_time[i] = all_time[i] + all_time[i - 1];
    }
    for (let i = 1; i < all_time.length; i++) {
        all_time[i] = all_time[i] + all_time[i - 1];
    }
    let max_val = 0;
    let max_time = 0;
    for (let i = adv_time - 1; i < all_time.length; i++) {
        if (i >= adv_time) {
            if (max_val < all_time[i] - all_time[i - adv_time]) {
                max_val = all_time[i] - all_time[i - adv_time];
                max_time = i - adv_time + 1
            }
        }
        else {
            if (max_val < all_time[i]) {
                max_val = all_time[i];
                max_time = i - adv_time + 1;
            }
        }
    }

    return intToTime(max_time);
}

console.log(solution(	"02:03:55", "00:14:15", ["01:20:15-01:45:14", "00:25:50-00:48:29", "00:40:31-01:00:00", "01:37:44-02:02:30", "01:30:59-01:53:29"]))