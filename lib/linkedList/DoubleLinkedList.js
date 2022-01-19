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
var LinkedList_1 = require("./LinkedList");
var DoubleLinkedListNode_1 = require("../node/DoubleLinkedListNode");
var DoubleLinkedList = (function (_super) {
    __extends(DoubleLinkedList, _super);
    function DoubleLinkedList() {
        return _super.call(this) || this;
    }
    DoubleLinkedList.prototype.add = function (data) {
        var node = new DoubleLinkedListNode_1.default(data);
        if (!this.head || !this.tail) {
            this.head = this.tail = this.current = node;
        }
        else {
            node.previous = this.tail;
            this.tail.next = node;
            node.next = this.head;
            this.head.previous = node;
            this.tail = node;
        }
    };
    DoubleLinkedList.prototype.search = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        if (typeof arg[0] === 'number') {
            return this.search(this.head, arg[0]);
        }
        else if (arg[0] instanceof DoubleLinkedListNode_1.default && arg[1] != null) {
            var node = arg[0];
            var data = arg[1];
            if (!node || node.data === data)
                return node;
            else if (node === this.tail)
                return null;
            return this.search(node.next, data);
        }
        else
            return null;
    };
    DoubleLinkedList.prototype.remove = function (data) {
        var node = this.search(data);
        if (!node)
            return false;
        if (node.next === node || node.previous === node)
            this.clear();
        else {
            var previous_node = node.previous;
            var next_node = node.next;
            previous_node.next = next_node;
            next_node.previous = previous_node;
        }
        return true;
    };
    DoubleLinkedList.prototype.previous = function () {
        if (this.current.previous != null) {
            this.current = this.current.previous;
        }
        return this.current;
    };
    DoubleLinkedList.prototype.print = function () {
        var node = this.head;
        var array = new Array();
        if (node != null)
            array.push(node.data);
        node = node.next;
        while (node !== this.head) {
            if (!node)
                break;
            array.push(node.data);
            node = node.next;
        }
        console.log(array);
    };
    return DoubleLinkedList;
}(LinkedList_1.default));
exports.default = DoubleLinkedList;
