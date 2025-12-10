class DoubleNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class LinkedDeque {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    addFront(data) {
        const newNode = new DoubleNode(data);

        if (this.isEmpty()) {
            this.front = this.rear = newNode;
        } else {
            newNode.next = this.front;
            this.front.prev = newNode;
            this.front = newNode;
        }
        this.size++;
    }

    addRear(data) {
        const newNode = new DoubleNode(data);

        if (this.isEmpty()) {
            this.front = this.rear = newNode;
        } else {
            newNode.prev = this.rear;
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    removeFront() {
        if (this.isEmpty()) {
            throw new Error("Deque vazio");
        }

        const data = this.front.data;
        this.front = this.front.next;

        if (this.front) {
            this.front.prev = null;
        } else {
            this.rear = null;
        }

        this.size--;
        return data;
    }

    removeRear() {
        if (this.isEmpty()) {
            throw new Error("Deque vazio");
        }

        const data = this.rear.data;
        this.rear = this.rear.prev;

        if (this.rear) {
            this.rear.next = null;
        } else {
            this.front = null;
        }

        this.size--;
        return data;
    }
}
