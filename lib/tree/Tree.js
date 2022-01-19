"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TreeNode_1 = require("./TreeNode");
var Tree = (function () {
    function Tree(degree_of_tree) {
        this._root = null;
        this._size = 0;
        this._degree_of_tree = degree_of_tree;
    }
    Object.defineProperty(Tree.prototype, "root", {
        get: function () {
            return this._root;
        },
        set: function (data) {
            this._root = new TreeNode_1.default(data, this._degree_of_tree, null);
        },
        enumerable: false,
        configurable: true
    });
    Tree.prototype.clear = function () {
        this.root = null;
    };
    Tree.prototype.isEmpty = function () {
        return this.root ? false : true;
    };
    return Tree;
}());
exports.default = Tree;
