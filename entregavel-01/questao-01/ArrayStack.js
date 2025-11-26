export default class ArrayStack {
    constructor() {
        this.values = [];
    }

    isEmpty() {
        return this.values.length === 0;
    }

    size() {
        return this.values.length;
    }

    push(value) {
        this.values.push(value);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("StackUnderflow: Não é possível remover de uma pilha vazia.");
        }
        return this.values.pop();
    }

    top() {
        if (this.isEmpty()) {
            throw new Error("StackEmpty: Pilha está vazia. Não há elemento de topo.");
        }
        return this.values[this.values.length - 1];
    }
}