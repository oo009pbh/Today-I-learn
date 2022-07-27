String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function BFS(i, j, place) {
    let queue = [[i, j]];
    let temp = [...place];
    while (queue.length > 0) {
        let [x, y] = queue.shift();
        temp[x] = temp[x].replaceAt(y, '_');
        for (let d of [1, -1]) {
            if (x + d >= 0 && x + d < 5 && Math.abs(i - (x + d)) + Math.abs(j - y) <= 2 ) {
                if (temp[x + d][y] === 'P') {
                    return false;
                }
                else if (temp[x + d][y] === 'O') {
                    queue.push([x + d, y]);
                }
            }
            if (y + d >= 0 && y + d < 5 && Math.abs(i - x) + Math.abs(j - (y + d)) <= 2 ) {
                if (temp[x][y + d] === 'P') {
                    return false;
                }
                else if (temp[x][y + d] === 'O') {
                    queue.push([x, y + d])
                }
            }
        }
    }
    return true;
}

function solution(places) {
    var answer = [];
    for (let place of places) {
        let is_right = true;
        for (let i = 0 ; i < 5 ; i ++) {
            for (let j = 0 ; j < 5 ; j ++) {
                if (place[i][j] === 'P') {
                    is_right = BFS(i, j, place);
                    if (!is_right) break;
                }
            }
            if (!is_right) break;
        }
        answer.push(is_right ? 1 : 0);
    }
    return answer;
}

console.log(solution(
    [
        [
            "PXPXP", 
            "OPXPX",  
            "PXPXP", 
            "XPXPX", 
            "PXPXP"
        ], 
        [
            "POOPX", 
            "OXPXP", 
            "PXXXO", 
            "OXXXO", 
            "OOOPP"
        ], 
        [
            "PXOPX", 
            "OXOXP", 
            "OXPOX", 
            "OXXOP", 
            "PXPOX"
        ], 
        [
            "OOOXX", 
            "XOOOX", 
            "OOOXX", 
            "OXOOX", 
            "OOOOO"
        ], 
        [
            "PXPXP", 
            "OPXPX",  
            "PXPXP", 
            "XPXPX", 
            "PXPXP"
        ]
    ]))