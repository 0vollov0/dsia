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
var BinaryTree_1 = require("./BinaryTree");
var TreeNode_1 = require("../node/TreeNode");
var BinarySearchTree = (function (_super) {
    __extends(BinarySearchTree, _super);
    function BinarySearchTree() {
        return _super.call(this) || this;
    }
    BinarySearchTree.prototype.search = function (node, data) {
        if (!node)
            return null;
        if (node.data === data)
            return node;
        else if (data < node.data)
            return this.search(node.children[0], data);
        else
            return this.search(node.children[1], data);
    };
    BinarySearchTree.prototype.insert = function (node, data) {
        if (this.root === null)
            this.root = data;
        else {
            if (!node)
                return new TreeNode_1.default(data, this._degree_of_tree, null);
            if (data < node.data) {
                node.children[0] = this.insert(node.children[0], data);
            }
            else if (data > node.data) {
                node.children[1] = this.insert(node.children[1], data);
            }
        }
        return node;
    };
    BinarySearchTree.prototype.delete = function (node, data) {
        if (!node)
            return null;
        if (data < node.data) {
            node.children[0] = this.delete(node.children[0], data);
            console.log('!', node.data, node.children[0]);
        }
        else if (data > node.data) {
            node.children[1] = this.delete(node.children[1], data);
            console.log('@', node.data, node.children[1]);
        }
        else {
            if (!node.children[0]) {
                return node.children[1];
            }
            else if (!node.children[1]) {
                return node.children[0];
            }
            var temp = node.children[1];
            while (temp.children[0]) {
                temp = temp.children[0];
            }
            node.data = temp.data;
            node.children[1] = this.delete(node.children[1], temp.data);
        }
        return node;
    };
    return BinarySearchTree;
}(BinaryTree_1.default));
exports.default = BinarySearchTree;
