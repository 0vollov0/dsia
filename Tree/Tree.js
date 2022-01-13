const Node = require('./TreeNode.js');

class Tree {
    constructor() {
        this._root = null;
    }

    get root() {
        return this._root;
    }

    set root(data) {
        this._root = new Node(data);
    }

    clear() {
        this.root = null;
    }

    preOrder(node, output) {
        if(!node) return;
        output.push(node.data);
        this.preOrder(node.children[0],output);
        this.preOrder(node.children[1],output);
    }
}

module.exports = Tree;