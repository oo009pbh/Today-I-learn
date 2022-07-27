function solution(n, lost, reserve) {
    let arr = Array.from({length: n + 1}, () => 1);
    arr[0] = 0;
    reserve.map(item => {
        arr[item] += 1;
    })
    lost.map(item => {
        arr[item] -= 1;
    })
    arr.map((item, index) => {
        if (item == 0 && index > 0) {
            if (index - 1 > 0 && arr[index - 1] == 2 ) {
                arr[index - 1] -= 1;
                arr[index] += 1;
            }
            else if (index + 1 <= n && arr[index + 1] == 2 ) {
                arr[index + 1] -= 1
                arr[index] += 1;
            }
        }
    })
    return arr.reduce((pre, item) => 
        pre + (item ? 1 : 0)
    );
}

console.log(solution(3, [3], [1]))