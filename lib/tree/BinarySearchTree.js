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
    BinarySearchTree.prototype.search = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        if (typeof arg[0] === 'number') {
            return this.search(this.root, arg[0]);
        }
        else if ((arg[0] instanceof TreeNode_1.default || (!arg[0] && arg.length > 1)) && arg[1] != null) {
            var node = arg[0];
            var data = arg[1];
            if (!node)
                return null;
            if (node.data === data)
                return node;
            else if (data < node.data)
                return this.search(node.children[0], data);
            else
                return this.search(node.children[1], data);
        }
        else
            return null;
    };
    BinarySearchTree.prototype.insert = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        if (typeof arg[0] === 'number') {
            if (this.root === null)
                this.root = arg[0];
            else
                this.insert(this.root, arg[0]);
        }
        else if ((arg[0] instanceof TreeNode_1.default || (!arg[0] && arg.length > 1)) && arg[1] != null) {
            var node = arg[0];
            var data = arg[1];
            if (!node)
                return new TreeNode_1.default(data, this._degree_of_tree);
            if (data < node.data) {
                node.children[0] = this.insert(node.children[0], data);
            }
            else if (data > node.data) {
                node.children[1] = this.insert(node.children[1], data);
            }
            return node;
        }
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
    BinarySearchTree.prototype.getHeight = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        if (this.isEmpty())
            return 0;
        if (arg.length === 0) {
            return this.getHeight(this.root, 0);
        }
        else if ((arg[0] instanceof TreeNode_1.default || (!arg[0] && arg.length > 1)) && typeof arg[1] === 'number') {
            var node = arg[0];
            var height = arg[1];
            if (!node)
                return height;
            var left_height = this.getHeight(node.children[0], height + 1);
            var right_height = this.getHeight(node.children[1], height + 1);
            return left_height > right_height ? left_height : right_height;
        }
        return 0;
    };
    return BinarySearchTree;
}(BinaryTree_1.default));
exports.default = BinarySearchTree;
