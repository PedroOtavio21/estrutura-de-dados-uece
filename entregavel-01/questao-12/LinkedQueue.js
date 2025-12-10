class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedQueue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    enqueue(data) {
        const newNode = new Node(data);

        if (this.rear) {
            this.rear.next = newNode;
        }

        this.rear = newNode;

        if (!this.front) {
            this.front = newNode;
        }

        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("A fila está vazia");
        }

        const removed = this.front.data;
        this.front = this.front.next;

        if (!this.front) {
            this.rear = null;
        }

        this.size--;
        return removed;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("A fila está vazia");
        }
        return this.front.data;
    }
}
