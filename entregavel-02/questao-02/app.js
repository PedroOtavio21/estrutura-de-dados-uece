/** QUESTÃO 2 — ArrayBinaryTree */
class ArrayBinaryTree {
    constructor(capacity = 20) {
        this.tree = new Array(capacity).fill(null);
        this.capacity = capacity;
    }

    insert(value, index) {
        if (index < 0 || index >= this.capacity)
            throw new Error("Index out of bounds for the tree capacity.");
        this.tree[index] = value;
    }

    getRoot() { return this.tree[0]; }

    getLeftChild(index) {
        const i = 2 * index + 1;
        return i < this.capacity ? this.tree[i] : null;
    }

    getRightChild(index) {
        const i = 2 * index + 2;
        return i < this.capacity ? this.tree[i] : null;
    }

    getParent(index) {
        if (index === 0) return null;
        return this.tree[Math.floor((index - 1) / 2)];
    }

    toString() { return JSON.stringify(this.tree); }
}

// Testes Q2
const treeArr = new ArrayBinaryTree(7);
treeArr.insert('A', 1);
treeArr.insert('B', 2);
treeArr.insert('C', 3);
treeArr.insert('D', 4);
treeArr.insert('E', 5);
console.log("Q2 - Array:", treeArr.toString());
console.log("Q2 - Parent of D (index 4):", treeArr.getParent(3));