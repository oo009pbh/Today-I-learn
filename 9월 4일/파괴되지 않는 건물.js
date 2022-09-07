function solution(board, skill) {
    let answer = 0;
    let N = board.length;
    let M = board[0].length;
    let tempBoard = Array.from(Array(N), () => new Array(M).fill(0));

    for (let item of skill) {
        let [type, r1, c1, r2, c2, degree] = item;
        degree = type === 1 ? -degree : degree;
        tempBoard[r1][c1] += degree;
        if (c2 + 1 < M) {
            tempBoard[r1][c2 + 1] -= degree;
        }
        if (r2 + 1 < N) {
            tempBoard[r2 + 1][c1] -= degree;
        }
        if (c2 + 1 < M && r2 + 1 < N) {
            tempBoard[r2 + 1][c2 + 1] += degree;
        }
    }
    for (let i = 0 ; i < N ; i++) {
        for (let j = 1; j < M; j++) {
            tempBoard[i][j] += tempBoard[i][j - 1];
        }
    }
    for (let i = 1 ; i < N ; i++) {
        for (let j = 0; j < M; j++) {
            tempBoard[i][j] += tempBoard[i - 1][j];
        }
    }

    for (let i = 0 ; i < N ; i++) {
        for (let j = 0; j < M; j++) {
            board[i][j] += tempBoard[i][j];
            answer += board[i][j] > 0 ? 1 : 0;
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