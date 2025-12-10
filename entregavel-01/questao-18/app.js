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

    add(data) {
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

function splitLists(originalList) {
    const positives = new LinkedList();
    const negatives = new LinkedList();

    let current = originalList.head;

    while (current) {
        if (current.data > 0) positives.add(current.data);
        else if (current.data < 0) negatives.add(current.data);

        current = current.next;
    }

    return { positives, negatives };
}
