/** QUESTÕES 1 e 3 — LinkedBinaryTree + Traversals */

class Tree {
    static Position = class {
        element() { throw new Error("must be implemented by subclass"); }
        equals(other) { throw new Error("must be implemented by subclass"); }
    };

    root() { throw new Error("must be implemented by subclass"); }
    parent(p) { throw new Error("must be implemented by subclass"); }
    numChildren(p) { throw new Error("must be implemented by subclass"); }
    size() { throw new Error("must be implemented by subclass"); }

    isRoot(p) { return this.root() && p.equals(this.root()); }
    isLeaf(p) { return this.numChildren(p) === 0; }
    isEmpty() { return this.size() === 0; }
}

class BinaryTree extends Tree {
    left(p) { throw new Error("must be implemented by subclass"); }
    right(p) { throw new Error("must be implemented by subclass"); }

    sibling(p) {
        const parent = this.parent(p);
        if (!parent) return null;
        if (p.equals(this.left(parent))) {
            return this.right(parent);
        } else {
            return this.left(parent);
        }
    }

    *children(p) {
        if (this.left(p)) yield this.left(p);
        if (this.right(p)) yield this.right(p);
    }
}

class LinkedBinaryTree extends BinaryTree {
    static _Node = class {
        constructor(element, parent = null, left = null, right = null) {
            this._element = element;
            this._parent = parent;
            this._left = left;
            this._right = right;
        }
    };

    static Position = class extends Tree.Position {
        constructor(container, node) {
            super();
            this._container = container;
            this._node = node;
        }
        element() { return this._node._element; }
        equals(other) {
            return (other instanceof this.constructor) && (other._node === this._node);
        }
    };

    constructor() {
        super();
        this._root = null;
        this._size = 0;
    }

    size() { return this._size; }

    root() { return this._makePosition(this._root); }

    parent(p) {
        const node = this._validate(p);
        return this._makePosition(node._parent);
    }

    left(p) {
        const node = this._validate(p);
        return this._makePosition(node._left);
    }

    right(p) {
        const node = this._validate(p);
        return this._makePosition(node._right);
    }

    numChildren(p) {
        const node = this._validate(p);
        let count = 0;
        if (node._left) count++;
        if (node._right) count++;
        return count;
    }

    _validate(p) {
        if (!(p instanceof LinkedBinaryTree.Position))
            throw new Error("p must be proper Position type");
        if (p._container !== this)
            throw new Error("p does not belong to this container");
        if (p._node._parent === p._node)
            throw new Error("p is no longer valid");
        return p._node;
    }

    _makePosition(node) {
        return node ? new LinkedBinaryTree.Position(this, node) : null;
    }

    // Métodos de Atualização (Exercício 1)
    _addRoot(e) {
        if (this._root) throw new Error("Root exists");
        this._size = 1;
        this._root = new LinkedBinaryTree._Node(e);
        return this._makePosition(this._root);
    }

    _addLeft(p, e) {
        const node = this._validate(p);
        if (node._left) throw new Error("Left child exists");
        this._size++;
        node._left = new LinkedBinaryTree._Node(e, node);
        return this._makePosition(node._left);
    }

    _addRight(p, e) {
        const node = this._validate(p);
        if (node._right) throw new Error("Right child exists");
        this._size++;
        node._right = new LinkedBinaryTree._Node(e, node);
        return this._makePosition(node._right);
    }

    _replace(p, e) {
        const node = this._validate(p);
        const old = node._element;
        node._element = e;
        return old;
    }

    delete(p) {
        const node = this._validate(p);
        if (this.numChildren(p) === 2) throw new Error("Position has two children");
        const child = node._left || node._right;
        if (child) child._parent = node._parent;
        if (node === this._root) {
            this._root = child;
        } else {
            const parent = node._parent;
            if (node === parent._left) parent._left = child;
            else parent._right = child;
        }
        this._size--;
        node._parent = node;
        return node._element;
    }

    // Travessias (Exercício 3)
    *preorder() {
        if (!this.isEmpty()) yield* this._subtreePreorder(this.root());
    }

    *_subtreePreorder(p) {
        yield p;
        if (this.left(p)) yield* this._subtreePreorder(this.left(p));
        if (this.right(p)) yield* this._subtreePreorder(this.right(p));
    }

    *postorder() {
        if (!this.isEmpty()) yield* this._subtreePostorder(this.root());
    }

    *_subtreePostorder(p) {
        if (this.left(p)) yield* this._subtreePostorder(this.left(p));
        if (this.right(p)) yield* this._subtreePostorder(this.right(p));
        yield p;
    }

    *inorder() {
        if (!this.isEmpty()) yield* this._subtreeInorder(this.root());
    }

    *_subtreeInorder(p) {
        if (this.left(p)) yield* this._subtreeInorder(this.left(p));
        yield p;
        if (this.right(p)) yield* this._subtreeInorder(this.right(p));
    }
}