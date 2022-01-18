"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Tree_1 = require("./Tree");
var BinaryTree = (function (_super) {
    __extends(BinaryTree, _super);
    function BinaryTree() {
        return _super.call(this, 2) || this;
    }
    BinaryTree.prototype.preOrderTraverse = function (node, output) {
        if (!node)
            return;
        if (node === this.root)
            while (output.length > 0)
                output.pop();
        output.push(node.data);
        this.preOrderTraverse(node.children[0], output);
        this.preOrderTraverse(node.children[1], output);
    };
    BinaryTree.prototype.inOrderTraverse = function (node, output) {
        if (!node)
            return;
        if (node === this.root)
            while (output.length > 0)
                output.pop();
        this.inOrderTraverse(node.children[0], output);
        output.push(node.data);
        this.inOrderTraverse(node.children[1], output);
    };
    BinaryTree.prototype.postOrderTraverse = function (node, output) {
        if (!node)
            return;
        if (node === this.root)
            while (output.length > 0)
                output.pop();
        this.postOrderTraverse(node.children[0], output);
        this.postOrderTraverse(node.children[1], output);
        output.push(node.data);
    };
    BinaryTree.prototype.levelOrderTraverse = function (node, output) {
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
    return BinaryTree;
}(Tree_1.default));
exports.default = BinaryTree;
