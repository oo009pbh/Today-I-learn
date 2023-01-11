function solution(fetchPaper) {
    // ...
}

console.log(solution(new Promise((resolve, reject) => {
    setTimeout( function() {
        resolve("성공!")  // 와! 문제 없음!
    }, 1000)
})))