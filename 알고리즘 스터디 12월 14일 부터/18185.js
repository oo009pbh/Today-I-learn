const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = []

rl.on("line", (line) => {
    input.push(line);
});

rl.on('close', () => {
    let N = parseInt(input[0]);
    let arr = input[1].split(' ').map(factory => parseInt(factory));
    let answer = 0;
    for (let i = 0 ; i < N; i++){
        if (arr[i] && i < N - 2 && arr[i + 1] > arr[i + 2]) {
            answer += checkRamen(arr, i, N);
        } else if (arr[i]) {
            answer += checkRamen(arr, i, N);

        }
    }
    console.log(answer);
    process.exit();
})

const checkRamen = (arr, i, N) => {
    let value = 0;
    while (arr[i] > 0) {
        if (i < N - 2 && arr[i] && arr[i + 1] && arr[i + 2]) {
            let min = Math.min(arr[i], arr[i + 1], arr[i + 2]);
            arr[i] -= min;
            arr[i + 1] -= min;
            arr[i + 2] -= min;
            value += min * 7;
        } else if (i < N - 1 && arr[i] && arr[i + 1]) {
            let min = Math.min(arr[i], arr[i + 1]);
            arr[i] -= min;
            arr[i + 1] -= min;
            value += min * 5;
        } else {
            value += arr[i] * 3;
            arr[i] = 0;
        }
    }
    return value;
}