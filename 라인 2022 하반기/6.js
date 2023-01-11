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



function solution(n, m, x, y, r, c, k) {
    let map = Array.from({length: n}, () => Array.from({length: m}, () => ''))
    let q = new Queue();

    q.enqueue([x-1, y-1, ''])

    while (!q.isEmpty()) {
        let [i, j, val] = q.dequeue();
        if (val.length > k)
            break;

        if (i + 1 < n && map[i + 1][j] < "d" + val) {
            map[i + 1][j] = "d" + val
            q.enqueue([i + 1, j, "d" + val])
        }
        if (i - 1 >= 0 && map[i - 1][j] < "u" + val) {
            map[i - 1][j] = "u" + val
            q.enqueue([i - 1, j, "u" + val])
        }
        if (j + 1 < m && map[i][j + 1] < "r" + val) {
            map[i][j + 1] = "r" + val
            q.enqueue([i, j + 1, "r" + val])
        }
        if (i - 1 >= 0 && map[i][j - 1] < "l" + val) {
            map[i][j - 1] = "l" + val
            q.enqueue([i, j - 1, "l" + val])
        }
    }

    return map[r-1][c-1].length === k ? map[r-1][c-1].split('').reverse().join('') : 'impossible';
}

console.log(solution(3, 4, 2, 3, 3, 1, 5))