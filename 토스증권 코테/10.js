function solution(beginning, target) {
    let answer = 0;
    let n = beginning.length;
    let m = beginning[0].length

    for (let i = 0; i < n; i ++) {
        if (beginning[i][0] !== target[i][0]) {
            for (let j = 0; j < m; j ++) {
                beginning[i][j] = beginning[i][j] === 1 ? 0 : 1;
            }
            answer += 1;
        }
    }

    answer = answer > n / 2 ? n - answer : answer;

    for (let i = 1; i < m; i ++) {
        if (beginning[0][i] !== target[0][i]) {
            for (let j = 0; j < n; j ++) {
                beginning[j][i] = beginning[j][i] === 1 ? 0 : 1;
            }
            answer += 1;
        }
    }

    for (let i = 0; i < n; i ++) {
        for (let j = 0; j < m; j ++) {
            if (beginning[i][j] !== target[i][j]) {
                return -1;
            }
        }
    }

    return answer;
}

console.log(solution(
    [
        [0, 1, 0, 0, 0],
        [1, 0, 1, 0, 1],
        [0, 1, 1, 1, 0],
        [1, 0, 1, 1, 0],
        [0, 1, 0, 1, 0]],
    [
        [0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1],
        [0, 0, 1, 0, 1],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1]]))