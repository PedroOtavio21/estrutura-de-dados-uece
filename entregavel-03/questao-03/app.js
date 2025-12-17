/** QUESTÃO 3 — RedBlackTreeMap */
import { TreeMap } from "../questao-01/app.js";

class RedBlackTreeMap extends TreeMap {
  static RED = true;
  static BLACK = false;

  static Node = class extends LinkedBinaryTree.Node {
    constructor(e, p = null, l = null, r = null) {
      super(e, p, l, r);
      this._red = RedBlackTreeMap.RED;
    }
  };

  _isRed(p) {
    return p && p._node._red === RedBlackTreeMap.RED;
  }

  _setColor(p, color) {
    if (p) p._node._red = color;
  }

  _rebalanceInsert(p) {
    this._setColor(p, RedBlackTreeMap.RED);
    if (p === this.root()) {
      this._setColor(p, RedBlackTreeMap.BLACK);
      return;
    }
    this._resolveRedRed(p);
  }

  _resolveRedRed(p) {
    const parent = this.parent(p);
    if (!this._isRed(parent)) return;

    const grand = this.parent(parent);
    const uncle =
      parent === this.left(grand)
        ? this.right(grand)
        : this.left(grand);

    if (this._isRed(uncle)) {
      this._setColor(parent, RedBlackTreeMap.BLACK);
      this._setColor(uncle, RedBlackTreeMap.BLACK);
      this._setColor(grand, RedBlackTreeMap.RED);
      this._resolveRedRed(grand);
    } else {
      const mid = this._restructure(p);
      this._setColor(mid, RedBlackTreeMap.BLACK);
      this._setColor(this.left(mid), RedBlackTreeMap.RED);
      this._setColor(this.right(mid), RedBlackTreeMap.RED);
    }
  }
}
