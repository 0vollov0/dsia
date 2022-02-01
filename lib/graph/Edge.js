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
var __1 = require("..");
var Edge = (function (_super) {
    __extends(Edge, _super);
    function Edge(key, weight) {
        var _this = _super.call(this, key) || this;
        _this._weight = weight;
        return _this;
    }
    Object.defineProperty(Edge.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        enumerable: false,
        configurable: true
    });
    return Edge;
}(__1.LinkedListNode));
exports.default = Edge;
