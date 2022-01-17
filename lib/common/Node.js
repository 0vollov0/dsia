"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = (function () {
    function Node(data) {
        this._data = data;
    }
    Node.prototype.update = function (data) {
        this._data = data;
    };
    Node.prototype.print = function () {
        console.log(this.data);
    };
    Object.defineProperty(Node.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
        },
        enumerable: false,
        configurable: true
    });
    return Node;
}());
exports.default = Node;
