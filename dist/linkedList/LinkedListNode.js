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
var Node_1 = require("../common/Node");
var LinkedListNode = (function (_super) {
    __extends(LinkedListNode, _super);
    function LinkedListNode(data) {
        var _this = _super.call(this, data) || this;
        _this._front = _this._rear = _this;
        return _this;
    }
    Object.defineProperty(LinkedListNode.prototype, "front", {
        get: function () {
            return this._front;
        },
        set: function (node) {
            this._front = node;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkedListNode.prototype, "rear", {
        get: function () {
            return this._rear;
        },
        set: function (node) {
            this._rear = node;
        },
        enumerable: false,
        configurable: true
    });
    return LinkedListNode;
}(Node_1.default));
exports.default = LinkedListNode;
