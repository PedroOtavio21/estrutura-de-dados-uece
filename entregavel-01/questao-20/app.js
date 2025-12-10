class Node {
    constructor(element, prev, next) {
        this.element = element;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedBase {
    constructor() {
        this.header = new Node(null, null, null);
        this.trailer = new Node(null, null, null);

        this.header.next = this.trailer;
        this.trailer.prev = this.header;

        this.size = 0;
    }

    _insertBetween(e, predecessor, successor) {
        const newest = new Node(e, predecessor, successor);
        predecessor.next = newest;
        successor.prev = newest;
        this.size++;
    }

    addLast(e) {
        this._insertBetween(e, this.trailer.prev, this.trailer);
    }

    printList() {
        let current = this.header.next;
        const result = [];

        while (current !== this.trailer) {
            result.push(current.element);
            current = current.next;
        }

        console.log(result.join(" "));
    }

    reverse() {
        const reverseNode = (node) => {
            if (!node) return;

            const temp = node.next;
            node.next = node.prev;
            node.prev = temp;

            if (node.prev === null) {
                this.header = node;
                return;
            }

            reverseNode(node.prev);
        };

        reverseNode(this.header);

        const temp = this.header;
        this.header = this.trailer;
        this.trailer = temp;
    }
}
