/** QUESTÃO 6 — Remoção em Árvore AVL (com rotação simples) */

class AVLNode2 {
    constructor(key, left = null, right = null) {
        this.key = key;
        this.left = left;
        this.right = right;
    }
}

const h = n => (n ? 1 + Math.max(h(n.left), h(n.right)) : -1);
const bf = n => (n ? h(n.right) - h(n.left) : 0);

const rotateLeft = z => {
    const y = z.right;
    z.right = y.left;
    y.left = z;
    return y;
};

const removeBST = (root, key) => {
    if (!root) return null;
    if (key < root.key) root.left = removeBST(root.left, key);
    else if (key > root.key) root.right = removeBST(root.right, key);
    else {
        if (!root.left) return root.right;
        if (!root.right) return root.left;
        let min = root.right;
        while (min.left) min = min.left;
        root.key = min.key;
        root.right = removeBST(root.right, min.key);
    }
    return root;
};

const rebalance = root => {
    if (!root) return root;
    if (bf(root) > 1) return rotateLeft(root);
    return root;
};

const printAVL2 = root => {
    const printNode = (n, lvl = 0, p = "Root: ") => {
        if (!n) return;
        console.log(" ".repeat(lvl * 4) + `${p}[${n.key}] (FB: ${bf(n)}, H: ${h(n)})`);
        printNode(n.right, lvl + 1, "R--- ");
        printNode(n.left, lvl + 1, "L--- ");
    };
    printNode(root);
    console.log("-".repeat(40));
};

// TESTE
let rootRem =
    new AVLNode2(50,
        new AVLNode2(30, new AVLNode2(20), new AVLNode2(40)),
        new AVLNode2(80,
            new AVLNode2(60, null,
                new AVLNode2(70, null, new AVLNode2(75))
            ),
            new AVLNode2(90)
        )
    );

console.log("AVL antes da remoção:");
printAVL2(rootRem);

rootRem = removeBST(rootRem, 62);
rootRem = rebalance(rootRem);

console.log("AVL após remoção de 62:");
printAVL2(rootRem);
