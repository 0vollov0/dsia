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
var DoubleLinkedListNode_1 = require("../node/DoubleLinkedListNode");
var UndirectedEdge = (function (_super) {
    __extends(UndirectedEdge, _super);
    function UndirectedEdge(v1, v2) {
        var _this = _super.call(this, null) || this;
        _this.next = v1;
        _this.previous = v2;
        return _this;
    }
    UndirectedEdge.prototype.isSame = function (v1, v2) {
        return (this.next === v1 || this.previous === v1) && (this.next === v2 || this.previous === v2);
    };
    return UndirectedEdge;
}(DoubleLinkedListNode_1.default));
exports.default = UndirectedEdge;
