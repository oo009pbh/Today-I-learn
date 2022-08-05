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

function solution(order) {
    let answer = 0;
    let main_q = new Queue();
    let order_q = new Queue();
    for (let i = 1; i <= order.length; i++) {
        main_q.enqueue(i);
        order_q.enqueue(order[i-1]);
    }
    let sub_stack = [];
    while (!main_q.isEmpty() || (sub_stack.length > 0 && order_q.head.value === sub_stack[sub_stack.length - 1])) {
        if (!main_q.isEmpty() && order_q.head.value === main_q.head.value) {
            answer += 1;
            main_q.dequeue();
            order_q.dequeue();
        } else if (sub_stack.length > 0 && order_q.head.value === sub_stack[sub_stack.length - 1]) {
            answer += 1;
            sub_stack.pop();
            order_q.dequeue();
        } else {
            sub_stack.push(main_q.dequeue());
        }

        if (order_q.isEmpty()) {
            break;
        }
    }
    return answer;
}

console.log(solution([4, 3, 1, 2, 5]));