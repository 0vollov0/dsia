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
var LinkedListNode_1 = require("./LinkedListNode");
var DoubleLinkedListNode = (function (_super) {
    __extends(DoubleLinkedListNode, _super);
    function DoubleLinkedListNode(data) {
        var _this = _super.call(this, data) || this;
        _this._previous = _this.next = _this;
        return _this;
    }
    Object.defineProperty(DoubleLinkedListNode.prototype, "previous", {
        get: function () {
            return this._previous;
        },
        set: function (node) {
            this._previous = node;
        },
        enumerable: false,
        configurable: true
    });
    return DoubleLinkedListNode;
}(LinkedListNode_1.default));
exports.default = DoubleLinkedListNode;
