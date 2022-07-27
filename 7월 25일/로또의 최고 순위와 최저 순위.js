function solution(lottos, win_nums) {
    let max_val = 0;
    let min_val = 0;

    for (num of lottos){
        if (num === 0) {
            max_val += 1;
        }
        else if (win_nums.includes(num)){
            max_val += 1;
            min_val += 1;
        }
    }

    return [7 - max_val === 7 ? 6 : 7 - max_val, 7 - min_val === 7 ? 6 : 7 - min_val];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]))