class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
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
        newNode.prev = current;
    }

    removeDuplicates() {
        if (!this.head) return;

        const seen = new Set();
        let current = this.head;

        while (current) {
            if (seen.has(current.data)) {
                const prevNode = current.prev;
                const nextNode = current.next;

                prevNode.next = nextNode;
                if (nextNode) nextNode.prev = prevNode;

                current = nextNode;
            } else {
                seen.add(current.data);
                current = current.next;
            }
        }
    }

    toArray() {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.data);
            current = current.next;
        }
        return arr;
    }
}
