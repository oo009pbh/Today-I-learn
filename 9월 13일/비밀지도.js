function solution(n, arr1, arr2) {
    let answer = [];
    arr1 = arr1.map((item, index) => {
        let temp = item.toString(2);
       return "0".repeat(n - temp.length) + temp;
    });
    arr2 = arr2.map((item, index) => {
        let temp = item.toString(2);
        return "0".repeat(n - temp.length) + temp;
    });
    for (let i = 0; i < n ; i++) {
        let temp = "";
        for (let j = 0; j < n; j++) {
            temp += arr1[i][j] === '0' && arr2[i][j] === '0' ? " " : "#";
        }
        answer.push(temp);
    }

    return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]))