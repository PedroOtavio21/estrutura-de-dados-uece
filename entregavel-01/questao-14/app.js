class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function concatenarListas(L, M) {
    if (L === null) return M;

    let current = L;

    while (current.next !== null) {
        current = current.next;
    }

    current.next = M;

    return L;
}

let L = new Node(1);
L.next = new Node(2);
L.next.next = new Node(3);

let M = new Node(4);
M.next = new Node(5);

let result = concatLists(L, M);

let current = result;
while (current !== null) {
    console.log(current.data);
    current = current.next;
}