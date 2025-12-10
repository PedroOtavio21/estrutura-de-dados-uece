class CircularQueue {
    constructor(capacity) {
        this.capacity = capacity;
        this.queue = new Array(capacity).fill(null);
        this.front = 0;
        this.rear = 0;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    isFull() {
        return this.size === this.capacity;
    }

    enqueue(item) {
        if (this.isFull()) {
            throw new Error("Fila circular cheia");
        }
        this.queue[this.rear] = item;
        this.rear = (this.rear + 1) % this.capacity;
        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Fila circular vazia");
        }
        const item = this.queue[this.front];
        this.queue[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.size--;
        return item;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Fila circular vazia");
        }
        return this.queue[this.front];
    }
}
