class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class ListaEncadeada {
    constructor() {
        this.head = null;
    }

    contarRec(no) {
        if (no === null) return 0;
        return 1 + this.contarRec(no.next);
    }

    tamanho() {
        return this.contarRec(this.head);
    }
}