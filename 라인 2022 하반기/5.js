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

function solution(board, r, c) {
    let answer = 0;
    let pos = {}

    for (let i = 0; i < 4 ; i++) {
        for (let j = 0; j < 4 ; j++) {
            if (board[i][j] !== 0) {
                if (pos.hasOwnProperty(board[i][j])) {
                    pos[board[i][j]].push([i , j]);
                } else {
                    pos[board[i][j]]=[[i , j]];
                }
            }
        }
    }

    const BFS = (current, nextNodes) => {
        let [r, c] = current;

    };

    BFS([r, c], [0]);
    return answer;
}

console.log(solution([[1, 0, 0, 3], [2, 0, 0, 0], [0, 0, 0, 2], [3, 0, 1, 0]], 1, 0))