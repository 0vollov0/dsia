"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DoubleLinkedListNode_1 = require("../node/DoubleLinkedListNode");
var DoubleLinkedList = (function () {
    function DoubleLinkedList() {
        this._head = this._tail = this._current = null;
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
    DoubleLinkedList.prototype.pop = function () {
        if (this.head && this.tail) {
            if (this.head === this.tail) {
                this.clear();
                return;
            }
            this.tail.previous.next = this.head;
            this.head.previous = this.tail.previous;
            if (this.tail === this.current) {
                this.current = this.tail.previous;
            }
            this.tail = this.tail.previous;
        }
    };
    DoubleLinkedList.prototype.previous = function () {
        if (this.current) {
            this.current = this.current.previous;
        }
        return this;
    };
    DoubleLinkedList.prototype.next = function () {
        if (this.current) {
            this.current = this.current.next;
        }
        return this;
    };
    DoubleLinkedList.prototype.clear = function () {
        this.head = this.tail = this.current = null;
    };
    DoubleLinkedList.prototype.findFirst = function (data) {
        if (this.isEmpty())
            return null;
        var foundNode = null;
        while (true) {
            if (this.head.data === data) {
                foundNode = this.head;
                break;
            }
            if (this.head === this.tail) {
                foundNode = null;
                break;
            }
            this.head = this.head.next;
        }
        return foundNode;
    };
    DoubleLinkedList.prototype.findLast = function (data) {
        if (this.isEmpty())
            return null;
        var foundNode = null;
        while (true) {
            if (this.tail.data === data) {
                foundNode = this.tail;
                break;
            }
            if (this.tail === this.head) {
                foundNode = null;
                break;
            }
            this.tail = this.tail.previous;
        }
        return foundNode;
    };
    DoubleLinkedList.prototype.isEmpty = function () {
        return this.head === null || this.tail === null;
    };
    Object.defineProperty(DoubleLinkedList.prototype, "head", {
        get: function () {
            return this._head;
        },
        set: function (node) {
            this._head = node;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DoubleLinkedList.prototype, "tail", {
        get: function () {
            return this._tail;
        },
        set: function (node) {
            this._tail = node;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DoubleLinkedList.prototype, "current", {
        get: function () {
            return this._current;
        },
        set: function (node) {
            this._current = node;
        },
        enumerable: false,
        configurable: true
    });
    return DoubleLinkedList;
}());
exports.default = DoubleLinkedList;
