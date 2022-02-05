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
var HeapNode = (function (_super) {
    __extends(HeapNode, _super);
    function HeapNode(data, node) {
        if (node === void 0) { node = {}; }
        var _this = _super.call(this, data) || this;
        _this._node = node;
        return _this;
    }
    HeapNode.prototype.compare = function (node) {
        if (this.data > node.data)
            return 1;
        else if (this.data < node.data)
            return -1;
        return 0;
    };
    Object.defineProperty(HeapNode.prototype, "node", {
        get: function () {
            return this._node;
        },
        set: function (node) {
            this._node = node;
        },
        enumerable: false,
        configurable: true
    });
    return HeapNode;
}(Node_1.default));
exports.default = HeapNode;
