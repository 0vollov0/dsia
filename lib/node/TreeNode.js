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
var Node_1 = require("./Node");
var TreeNode = (function (_super) {
    __extends(TreeNode, _super);
    function TreeNode(data, children_size, parent) {
        var _this = _super.call(this, data) || this;
        _this._children = new Array(children_size);
        return _this;
    }
    Object.defineProperty(TreeNode.prototype, "children", {
        get: function () {
            return this._children;
        },
        enumerable: false,
        configurable: true
    });
    TreeNode.prototype.setChildren = function (index, data) {
        if (index > this._children.length - 1 || index < 0)
            return;
        this._children[index] = new TreeNode(data, this._children.length - 1, this);
    };
    TreeNode.prototype.removeChildren = function (data, node) {
        for (var key in this.children) {
            if (Object.prototype.hasOwnProperty.call(this.children, key)) {
                if (this.children[key].data === data) {
                    this.children[key] = node;
                    break;
                }
            }
        }
    };
    return TreeNode;
}(Node_1.default));
exports.default = TreeNode;
