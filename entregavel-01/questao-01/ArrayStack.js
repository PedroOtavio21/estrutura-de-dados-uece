export default class ArrayStack {
    constructor() {
        this._data = [];
    }

    length() {
        return this._data.length;
    }

    isEmpty() {
        return this._data.length === 0;
    }

    push(e) {
        this._data.push(e);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("pop from empty stack");
        }
        return this._data.pop();
    }

    top() {
        if (this.isEmpty()) {
            throw new Error("top from empty stack");
        }
        return this._data[this._data.length - 1];
    }
}