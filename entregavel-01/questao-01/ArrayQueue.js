export default class ArrayQueue {
    constructor() {
        this.values = [];
    }

    isEmpty() {
        return this.values.length === 0;
    }

    enqueue(value) {
        this.values.push(value);
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("QueueUnderflow: Não é possível desenfileirar de uma fila vazia.");
        }
        return this.values.shift();
    }

    first() {
        if (this.isEmpty()) {
            throw new Error("QueueEmpty: Fila está vazia. Não há primeiro elemento.");
        }
        return this.values[0];
    }

    size() {
        return this.values.length;
    }
}