/** QUESTÃO 7 — Árvore Rubro-Negra (RB-Tree) */

class RBNode {
    static RED = true;
    static BLACK = false;

    constructor(key, parent = null, color = RBNode.RED) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.parent = parent;
        this.color = color;
    }

    isRed() {
        return this.color === RBNode.RED;
    }

    toString() {
        return `[${this.key}](${this.isRed() ? "R" : "B"})`;
    }
}

class RedBlackTree {
    constructor() {
        this.root = null;
    }

    rotateLeft(x) {
        const y = x.right;
        x.right = y.left;
        if (y.left) y.left.parent = x;
        y.parent = x.parent;
        if (!x.parent) this.root = y;
        else if (x === x.parent.left) x.parent.left = y;
        else x.parent.right = y;
        y.left = x;
        x.parent = y;
    }

    rotateRight(x) {
        const y = x.left;
        x.left = y.right;
        if (y.right) y.right.parent = x;
        y.parent = x.parent;
        if (!x.parent) this.root = y;
        else if (x === x.parent.right) x.parent.right = y;
        else x.parent.left = y;
        y.right = x;
        x.parent = y;
    }

    insert(key) {
        if (!this.root) {
            this.root = new RBNode(key, null, RBNode.BLACK);
            return;
        }

        let curr = this.root, parent = null;
        while (curr) {
            parent = curr;
            curr = key < curr.key ? curr.left : curr.right;
        }

        const node = new RBNode(key, parent);
        if (key < parent.key) parent.left = node;
        else parent.right = node;

        this.fixViolation(node);
    }

    fixViolation(z) {
        while (z !== this.root && z.parent.isRed()) {
            const p = z.parent;
            const g = p.parent;
            const u = p === g.left ? g.right : g.left;

            if (u && u.isRed()) {
                p.color = u.color = RBNode.BLACK;
                g.color = RBNode.RED;
                z = g;
            } else {
                if (z === p.right && p === g.left) {
                    this.rotateLeft(p);
                    z = p;
                } else if (z === p.left && p === g.right) {
                    this.rotateRight(p);
                    z = p;
                }
                p.color = RBNode.BLACK;
                g.color = RBNode.RED;
                if (z === p.left) this.rotateRight(g);
                else this.rotateLeft(g);
            }
        }
        this.root.color = RBNode.BLACK;
    }

    printTree() {
        const printNode = (n, lvl = 0, p = "Root: ") => {
            if (!n) return;
            console.log(" ".repeat(lvl * 4) + p + n.toString());
            printNode(n.right, lvl + 1, "R--- ");
            printNode(n.left, lvl + 1, "L--- ");
        };
        printNode(this.root);
        console.log("-".repeat(50));
    }
}

// TESTE
const rbt = new RedBlackTree();
const keysRB = [7, 23, 41, 1, 35, 18, 49, 12, 30, 26];

keysRB.forEach((k, i) => {
    console.log(`Inserindo ${k}`);
    rbt.insert(k);
    rbt.printTree();
});
