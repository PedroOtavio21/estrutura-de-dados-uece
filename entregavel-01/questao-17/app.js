class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    reverseRecursive() {
        this.head = this._reverse(this.head);
    }

    _reverse(node) {
        if (!node || !node.next) return node;

        const newHead = this._reverse(node.next);

        node.next.next = node;
        node.next = null;

        return newHead;
    }
}