function solution(X, Y) {
    let x = new Set(X);
    let y = new Set(Y);
    let x_d = {};
    let y_d = {};
    let intersect_d = {};
    let intersect = [...x].filter(data => y.has(data));

    for (let word of [...X]) {
        if (x_d.hasOwnProperty(word)) {
            x_d[word] += 1;
        } else {
            x_d[word] = 1;
        }
    }
    for (let word of [...Y]) {
        if (y_d.hasOwnProperty(word)) {
            y_d[word] += 1;
        } else {
            y_d[word] = 1;
        }
    }
    for (let key of intersect) {
        intersect_d[key] = Math.min(x_d[key], y_d[key]);
    }

    if (intersect.length === 0) {
        return "-1";
    } else if(intersect.length === 1 && intersect[0] === "0") {
        return "0"
    }
    else {
        intersect.sort((function(a, b)  {
            return b - a;
        }));
        return intersect.reduce((pre, item) => {
            let val = ''
            for (let i = 0; i < intersect_d[item]; i++) {
                val += item;
            }
            return pre + val;
        }, '');
    }
}

console.log(solution("1111", "11222"))