export default class ArrayQueue {
    constructor() {
        this._data = [];
        this._front = 0;
    }

    isEmpty() {
        return this.size() === 0;
    }

    enqueue(item) {
        this._data.push(item);
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("dequeue from empty queue");
        }

        const item = this._data[this._front];
        this._front++;

        if (this._front > Math.floor(this._data.length / 2)) {
            this._data = this._data.slice(this._front);
            this._front = 0;
        }

        return item;
    }

    first() {
        if (this.isEmpty()) {
            throw new Error("first from empty queue");
        }
        return this._data[this._front];
    }

    size() {
        return this._data.length - this._front;
    }
}