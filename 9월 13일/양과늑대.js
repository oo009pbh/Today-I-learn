function solution(info, edges) {
    let answer = 0;
    let graph = {};
    for (let edge of edges) {
        if (graph.hasOwnProperty(edge[0])) {
            graph[edge[0]].push(edge[1]);
        } else {
            graph[edge[0]] = [edge[1]];
        }
    }

    const DFS = (current, nextNodes) => {
        let [sheep, wolf, currentNode] = current;
        let newNextNodes = [...nextNodes];
        let currentIndex = newNextNodes.indexOf(currentNode);
        info[currentNode] === 0 ? sheep += 1 : wolf += 1;
        answer = Math.max(sheep, answer);
        if (sheep === wolf) return ;

        if (graph.hasOwnProperty(currentNode)) {
            newNextNodes.push(...graph[currentNode]);
        }

        newNextNodes.splice(currentIndex, 1);

        for (let nextNode of newNextNodes) {
            DFS([sheep, wolf, nextNode], newNextNodes);
        }
    };
    DFS([0, 0, 0], [0]);
    return answer;
}

console.log(solution([0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1], [[0, 1], [1, 2], [1, 4], [0, 8], [8, 7], [9, 10], [9, 11], [4, 3], [6, 5], [4, 6], [8, 9]]))