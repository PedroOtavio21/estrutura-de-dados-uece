class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function encontrarPenultimo(head) {
    if (!head || !head.next) {
        return null;
    }

    let current = head;

    while (current.next.next !== null) {
        current = current.next;
    }

    return current;
}

const head = new Node(15);
head.next = new Node(30);
head.next.next = new Node(45);
head.next.next.next = new Node(60);

const penultimo = encontrarPenultimo(head);

if (penultimo) {
    console.log("Penúltimo nó:", penultimo.data);
} else {
    console.log("A lista não possui penúltimo nó.");
}