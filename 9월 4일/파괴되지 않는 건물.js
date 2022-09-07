function solution(board, skill) {
    let answer = 0;
    let N = board.length;
    let M = board[0].length;
    let tempBoard = Array.from(Array(N), () => new Array(M).fill(0));

    for (let i = 0; i < skill.length ; i ++) {
        for (let j = skill[i][1] ; j <= skill[i][3] ; j++) {
            tempBoard[j][skill[i][2]] += skill[i][0] === 1 ? -skill[i][5] : skill[i][5];
            if (skill[i][4] + 1 < M) {
                tempBoard[j][skill[i][4] + 1] -= skill[i][0] === 1 ? -skill[i][5] : skill[i][5];
            }
        }
    }
    for (let i = 0 ; i < N ; i++) {
        for (let j = 0; j < M; j++) {
            tempBoard[i][j] += j === 0 ? 0 : tempBoard[i][j - 1];
            answer += board[i][j] + tempBoard[i][j] > 0 ? 1 : 0;
        }
    }
    return answer;
}

console.log(
    solution([
            [5, 5, 5, 5, 5],
            [5, 5, 5, 5, 5],
            [5, 5, 5, 5, 5],
            [5, 5, 5, 5, 5]
        ],
        [
            [1, 0, 0, 3, 4, 4],
            [1, 2, 0, 2, 3, 2],
            [2, 1, 0, 3, 1, 2],
            [1, 0, 1, 3, 3, 1]
        ])
)