/** QUESTÃO 5 — Inserção em Árvore AVL (sem rotação necessária) */

class AVLNode {
    constructor(key, left = null, right = null) {
        this.key = key;
        this.left = left;
        this.right = right;
    }
}

const height = node =>
    node ? 1 + Math.max(height(node.left), height(node.right)) : -1;

const balanceFactor = node =>
    node ? height(node.right) - height(node.left) : 0;

const insertBST = (root, key) => {
    if (!root) return new AVLNode(key);
    if (key < root.key) root.left = insertBST(root.left, key);
    else if (key > root.key) root.right = insertBST(root.right, key);
    return root;
};

const printAVL = root => {
    const printNode = (node, level = 0, prefix = "Root: ") => {
        if (!node) return;
        console.log(
            " ".repeat(level * 4) +
            `${prefix}[${node.key}] (FB: ${balanceFactor(node)}, H: ${height(node)})`
        );
        printNode(node.right, level + 1, "R--- ");
        printNode(node.left, level + 1, "L--- ");
    };
    printNode(root);
    console.log("-".repeat(40));
};

// TESTE
let rootAVL =
    new AVLNode(50,
        new AVLNode(30, new AVLNode(20), new AVLNode(40)),
        new AVLNode(80, new AVLNode(60), new AVLNode(90))
    );

console.log("AVL inicial:");
printAVL(rootAVL);

rootAVL = insertBST(rootAVL, 52);
console.log("Após inserir 52:");
printAVL(rootAVL);
