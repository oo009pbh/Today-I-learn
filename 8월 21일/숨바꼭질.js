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
    let [A, B] = input[0].split(' ').map(item => parseInt(item));

    console.log(BFS(A, B));
    process.exit();
})

class NodeQueue{
    constructor(value){
        this.next = null;
        this.value = value;
    }
}
class Queue{
    constructor (){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    enqueue(value){
        let nodeQueue = new NodeQueue(value);
        if(this.size == 0){
            this.head = nodeQueue;
        }else{
            this.tail.next = nodeQueue;
        }
        this.tail = nodeQueue;
        this.size++;
    }
    dequeue(){
        if(this.size== 0){
            return null;
        }
        let value = this.head.value;
        this.head = this.head.next;
        this.size--;
        if(this.size == 0){
            this.tail = null;
        }
        return value;
    }
    isEmpty(){
        return this.size == 0;
    }
}

const BFS = (A, B) => {
    const visited = new Set(); // 탐색을 마친 노드들
    let q = new Queue();

    q.enqueue([A, 0]);

    while (!q.isEmpty()) { // 탐색해야할 노드가 남아있다면
        let [current, answer] = q.dequeue();
        if (current === B) {
            return answer;
        }

        if (!visited.has(current)) {
            visited.add(current);
            if (1 < current && current < B) {
                q.enqueue([current * 2, answer + 1]);
            }
            if (current < B) {
                q.enqueue([current + 1, answer + 1]);
            }
            if (current > 0) {
                q.enqueue([current - 1, answer + 1]);
            }
        }
    }
};