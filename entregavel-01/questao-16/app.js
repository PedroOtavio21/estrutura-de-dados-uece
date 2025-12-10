class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class ListaCircular {
    constructor() {
        this.head = null;
    }

    adicionarNoFinal(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
            return;
        }

        let current = this.head;
        while (current.next !== this.head) {
            current = current.next;
        }

        current.next = newNode;
        newNode.next = this.head;
    }

    contarNos() {
        if (!this.head) return 0;

        let count = 0;
        let current = this.head;

        do {
            count++;
            current = current.next;
        } while (current !== this.head);

        return count;
    }
}
