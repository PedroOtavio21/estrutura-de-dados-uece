/** QUESTÃO 1 — TreeMap (BST) */

// LinkedBinaryTree (Mock)
class LinkedBinaryTree {
  static Position = class {
    constructor(node = null) {
      this._node = node;
    }
    element() {
      return this._node?._element;
    }
  };

  static Node = class {
    constructor(element, parent = null, left = null, right = null) {
      this._element = element;
      this._parent = parent;
      this._left = left;
      this._right = right;
    }
  };

  constructor() {
    this._root = null;
    this._size = 0;
  }

  root() {
    return this._root ? new LinkedBinaryTree.Position(this._root) : null;
  }

  isEmpty() {
    return this._size === 0;
  }

  left(p) {
    return p._node._left ? new LinkedBinaryTree.Position(p._node._left) : null;
  }

  right(p) {
    return p._node._right ? new LinkedBinaryTree.Position(p._node._right) : null;
  }

  parent(p) {
    return p._node._parent ? new LinkedBinaryTree.Position(p._node._parent) : null;
  }

  _addRoot(e) {
    this._root = new LinkedBinaryTree.Node(e);
    this._size = 1;
    return new LinkedBinaryTree.Position(this._root);
  }

  _addLeft(p, e) {
    p._node._left = new LinkedBinaryTree.Node(e, p._node);
    this._size++;
    return new LinkedBinaryTree.Position(p._node._left);
  }

  _addRight(p, e) {
    p._node._right = new LinkedBinaryTree.Node(e, p._node);
    this._size++;
    return new LinkedBinaryTree.Position(p._node._right);
  }

  _replace(p, e) {
    p._node._element = e;
  }

  _delete(p) {
    const node = p._node;
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
  }
}

// MapBase 
class MapBase {
  static Item = class {
    constructor(k, v) {
      this._key = k;
      this._value = v;
    }
  };
}

// TreeMap 
export class TreeMap extends LinkedBinaryTree {
  static Item = MapBase.Item;

  static Position = class extends LinkedBinaryTree.Position {
    key() {
      return this.element()._key;
    }
    value() {
      return this.element()._value;
    }
  };

  _subtreeSearch(p, k) {
    if (k === p.key()) return p;
    if (k < p.key()) {
      return this.left(p) ? this._subtreeSearch(this.left(p), k) : p;
    } else {
      return this.right(p) ? this._subtreeSearch(this.right(p), k) : p;
    }
  }

  _subtreeFirst(p) {
    let walk = p;
    while (this.left(walk)) walk = this.left(walk);
    return walk;
  }

  first() {
    return this.isEmpty() ? null : this._subtreeFirst(this.root());
  }

  get(k) {
    if (this.isEmpty()) throw new Error(`Key Error: ${k}`);
    const p = this._subtreeSearch(this.root(), k);
    if (k !== p.key()) throw new Error(`Key Error: ${k}`);
    return p.value();
  }

  set(k, v) {
    if (this.isEmpty()) {
      this._addRoot(new TreeMap.Item(k, v));
    } else {
      const p = this._subtreeSearch(this.root(), k);
      if (k === p.key()) {
        p.element()._value = v;
      } else {
        const item = new TreeMap.Item(k, v);
        k < p.key() ? this._addLeft(p, item) : this._addRight(p, item);
      }
    }
  }

  *[Symbol.iterator]() {
    let p = this.first();
    while (p) {
      yield p.key();
      p = this.after(p);
    }
  }

  after(p) {
    if (this.right(p)) {
      let w = this.right(p);
      while (this.left(w)) w = this.left(w);
      return w;
    }
    let walk = p;
    let above = this.parent(walk);
    while (above && walk === this.right(above)) {
      walk = above;
      above = this.parent(walk);
    }
    return above;
  }
}
