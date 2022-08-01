class Node {
    constructor(index) {
      this.index = index;
      this.Adjacent = [];
    }
  }

function solution(n, results) {
    var answer = 0;
    let d = {};
    for (let i = 1 ; i <= n ; i ++) {
        d[i] = Node(i);
    }
    return answer;
}

console.log(solution(5, [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]))