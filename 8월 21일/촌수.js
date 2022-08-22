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
    let n = input[0];
    let [A, B] = input[1].split(' ').map(item => parseInt(item));
    let edgeLength = input[2];
    let arr = input.slice(3);
    arr = arr.map(line => line.split(' ').map(item => parseInt(item)));
    let graph = {}

    for (let line of arr) {
        if (graph.hasOwnProperty(line[0])) {
            graph[line[0]].push(line[1]);
        } else {
            graph[line[0]] = [line[1]];
        }
        if (graph.hasOwnProperty(line[1])) {
            graph[line[1]].push(line[0]);
        } else {
            graph[line[1]] = [line[0]];
        }
    }

    console.log(DFS(graph, A , B));
    process.exit();
})

const DFS = (graph, to, end) => {
    const visited = []; // 탐색을 마친 노드들
    let needVisit = []; // 탐색해야할 노드들

    needVisit.push([to, 0]);

    while (needVisit.length !== 0) { // 탐색해야할 노드가 남아있다면
        let [current, answer] = needVisit.pop();
        if (current === end) {
            return answer;
        }
        answer += 1;

        if (!visited.includes(current)) {
            visited.push(current);
            needVisit = [...needVisit, ...graph[current].map(item => [item, answer])];
        }
    }
    return -1;
};