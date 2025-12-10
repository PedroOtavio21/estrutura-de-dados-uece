export default class ArrayDeque {
    constructor() {
        this.items = [];
    }

    addFirst(item) {
        this.items.unshift(item);
    }

    addLast(item) {
        this.items.push(item);
    }

    removeFirst() {
        if (this.isEmpty()) {
            throw new Error("remove_first from empty deque");
        }
        return this.items.shift();
    }

    removeLast() {
        if (this.isEmpty()) {
            throw new Error("remove_last from empty deque");
        }
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    peekFirst() {
        if (this.isEmpty()) {
            throw new Error("peek_first from empty deque");
        }
        return this.items[0];
    }

    peekLast() {
        if (this.isEmpty()) {
            throw new Error("peek_last from empty deque");
        }
        return this.items[this.items.length - 1];
    }

    toString() {
        return `ArrayDeque(${this.items.join(", ")})`;
    }
}