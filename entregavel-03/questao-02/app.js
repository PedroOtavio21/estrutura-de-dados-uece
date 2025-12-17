/** QUESTÃO 2 — AVLTreeMap */
import { TreeMap } from "../questao-01/app.js";

class AVLTreeMap extends TreeMap {
  static Node = class extends LinkedBinaryTree.Node {
    constructor(e, p = null, l = null, r = null) {
      super(e, p, l, r);
      this._height = 0;
    }
    leftHeight() {
      return this._left ? this._left._height : 0;
    }
    rightHeight() {
      return this._right ? this._right._height : 0;
    }
  };

  _recomputeHeight(p) {
    p._node._height =
      1 + Math.max(p._node.leftHeight(), p._node.rightHeight());
  }

  _isBalanced(p) {
    return Math.abs(
      p._node.leftHeight() - p._node.rightHeight()
    ) <= 1;
  }

  _tallChild(p, favorLeft = false) {
    if (
      p._node.leftHeight() + (favorLeft ? 1 : 0) >
      p._node.rightHeight()
    ) {
      return this.left(p);
    }
    return this.right(p);
  }

  _tallGrandchild(p) {
    const child = this._tallChild(p);
    const align = child === this.left(p);
    return this._tallChild(child, align);
  }

  _rebalance(p) {
    while (p) {
      const old = p._node._height;
      this._recomputeHeight(p);

      if (!this._isBalanced(p)) {
        p = this._restructure(this._tallGrandchild(p));
        this._recomputeHeight(this.left(p));
        this._recomputeHeight(this.right(p));
        this._recomputeHeight(p);
      }

      if (p._node._height === old) break;
      p = this.parent(p);
    }
  }

  _rebalanceInsert(p) {
    this._rebalance(p);
  }

  _rebalanceDelete(p) {
    this._rebalance(p);
  }
}
