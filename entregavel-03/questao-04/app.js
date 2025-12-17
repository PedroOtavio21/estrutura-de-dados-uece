/** QUESTÃO 4 — Inserção em Árvore de Busca Binária (BST) */

class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(key) {
        const newNode = new Node(key);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true) {
            if (key < current.key) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else if (key > current.key) {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            } else {
                return;
            }
        }
    }

    printTree() {
        if (!this.root) {
            console.log("Árvore vazia.");
            return;
        }

        const printNode = (node, level = 0, prefix = "Root: ") => {
            if (node) {
                console.log(" ".repeat(level * 4) + prefix + node.key);
                printNode(node.left, level + 1, "L--- ");
                printNode(node.right, level + 1, "R--- ");
            }
        };

        printNode(this.root);
        console.log("-".repeat(30));
    }
}

// TESTE
const bst = new BST();
const chavesBST = [20, 30, 14, 48, 38, 16, 1, 3];

chavesBST.forEach((k, i) => {
    console.log(`Inserindo ${k}`);
    bst.insert(k);
    bst.printTree();
});
