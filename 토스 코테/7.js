function solution(ids, days) {
    const answer = [];
    let d = {};
    for (let [index, id] of ids.entries()) {
        if (d.hasOwnProperty(id)) {
            d[id].add(days[index]);
        } else {
            d[id] = new Set(days[index]);
        }
    }

    for (let key of Object.keys(d)) {
        if (d[key].size >= 3) {
            answer.push(parseInt(key));
        }
    }

    return answer;
}

console.log(solution([3, 1, 2, 3, 3, 1, 1, 3], ["월", "월", "화", "목", "수", "수", "일", "일"]))