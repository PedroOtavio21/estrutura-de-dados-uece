class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedStack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    push(data) {
        const newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("A pilha está vazia");
        }
        const removed = this.top.data;
        this.top = this.top.next;
        this.size--;
        return removed;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("A pilha está vazia");
        }
        return this.top.data;
    }
}