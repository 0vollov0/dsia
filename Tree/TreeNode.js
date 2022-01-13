const Node = require('../Node.js');

class TreeNode extends Node {
    constructor(data) {
        super(data);
        this._children = new Array(2);
    }

    get children() {
        return this._children;
    }
}

module.exports = TreeNode;