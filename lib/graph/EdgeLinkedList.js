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
var Edge_1 = require("./Edge");
var EdgeLinkedList = (function (_super) {
    __extends(EdgeLinkedList, _super);
    function EdgeLinkedList() {
        return _super.call(this) || this;
    }
    EdgeLinkedList.prototype.add = function () {
        if (arguments.length === 0)
            return;
        var edge = arguments.length === 1 ? new Edge_1.default(arguments[0], 0) : new Edge_1.default(arguments[0], arguments[1]);
        if (!this.head || !this.tail) {
            this.head = this.tail = this.current = edge;
        }
        else {
            this.tail.next = edge;
            this.tail = edge;
        }
    };
    EdgeLinkedList.prototype.print = function () {
        console.log(this.head.data);
    };
    EdgeLinkedList.prototype.getEdges = function () {
        var edges = new Array();
        var ptr = this.head;
        while (ptr) {
            edges.push(ptr);
            ptr = ptr.next;
        }
        return edges;
    };
    return EdgeLinkedList;
}(__1.LinkedList));
exports.default = EdgeLinkedList;
