
export default class ArrayDeque {
    constructor() {
        this.values = [];
    }

    isEmpty() {
        return this.values.length === 0;
    }

    addFirst(value) {
        this.values.unshift(value);
    }

    addLast(value) {
        this.values.push(value);
    }

    removeFirst() {
        if (this.isEmpty()) {
            throw new Error("DequeUnderflow: Não é possível remover do início de um Deque vazio.");
        }
        return this.values.shift();
    }

    removeLast() {
        if (this.isEmpty()) {
            throw new Error("DequeUnderflow: Não é possível remover do fim de um Deque vazio.");
        }
        return this.values.pop();
    }

    size() {
        return this.values.length;
    }

    peekFirst() {
        if (this.isEmpty()) {
            throw new Error("DequeEmpty: Deque está vazio. Não há primeiro elemento.");
        }
        return this.values[0];
    }

    peekLast() {
        if (this.isEmpty()) {
            throw new Error("DequeEmpty: Deque está vazio. Não há último elemento.");
        }
        return this.values[this.values.length - 1];
    }

    showAllElements() {
        for (let value of this.values) {
            console.log(value);
        }
    }
}