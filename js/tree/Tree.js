"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TreeNode_1 = require("./TreeNode");
var Tree = (function () {
    function Tree() {
        this._root = null;
    }
    Object.defineProperty(Tree.prototype, "root", {
        get: function () {
            return this._root;
        },
        set: function (data) {
            this._root = new TreeNode_1.default(data);
        },
        enumerable: false,
        configurable: true
    });
    Tree.prototype.clear = function () {
        this.root = null;
    };
    Tree.prototype.preOrderTraverse = function (node, output) {
        if (!node)
            return;
        if (node === this.root)
            while (output.length > 0)
                output.pop();
        output.push(node.data);
        this.preOrderTraverse(node.children[0], output);
        this.preOrderTraverse(node.children[1], output);
    };
    Tree.prototype.inOrderTraverse = function (node, output) {
        if (!node)
            return;
        if (node === this.root)
            while (output.length > 0)
                output.pop();
        this.inOrderTraverse(node.children[0], output);
        output.push(node.data);
        this.inOrderTraverse(node.children[1], output);
    };
    Tree.prototype.postOrderTraverse = function (node, output) {
        if (!node)
            return;
        if (node === this.root)
            while (output.length > 0)
                output.pop();
        this.postOrderTraverse(node.children[0], output);
        this.postOrderTraverse(node.children[1], output);
        output.push(node.data);
    };
    Tree.prototype.levelOrderTraverse = function (node, output) {
        if (!this.root)
            return;
        while (output.length > 0)
            output.pop();
        var stackQueue = new Array(node);
        while (stackQueue.length > 0) {
            var shiftedNode = stackQueue.shift();
            output.push(shiftedNode.data);
            if (shiftedNode.children[0])
                stackQueue.push(shiftedNode.children[0]);
            if (shiftedNode.children[1])
                stackQueue.push(shiftedNode.children[1]);
        }
    };
    return Tree;
}());
exports.default = Tree;
