function solution(N, stages) {
    let d = {};

    for (let i = 1; i < N + 1 ; i ++) {
        d[i] = {
            'all': 0,
            'f': 0
        }
    }

    for (let stage of stages) {
        for (let i = 1; i < stage ; i ++) {
            d[String(i)]['all'] += 1;
        }
        if (stage <= N) {
            d[String(stage)]['all'] += 1;
            d[String(stage)]['f'] += 1;
        }
    }

    return Object.keys(d).sort((a, b) => {
        let avalue = d[a].all > 0 ? d[a].f / d[a].all : 0;
        let bvalue = d[b].all > 0 ? d[b].f / d[b].all : 0;
        return bvalue - avalue;
    }).map(item => parseInt(item));
}

console.log(solution(4, [4, 4, 4, 4, 4]))