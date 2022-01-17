"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedListNode_js_1 = require("./LinkedListNode.js");
var LinkedList = (function () {
    function LinkedList() {
        this._head = this._tail = this._current = null;
    }
    LinkedList.prototype.add = function (data) {
        var node = new LinkedListNode_js_1.default(data);
        if (!this.head || !this.tail) {
            this.head = this.tail = this.current = node;
        }
        else {
            node.front = this.tail;
            this.tail.rear = node;
            node.rear = this.head;
            this.head.front = node;
            this.tail = node;
        }
    };
    LinkedList.prototype.pop = function () {
        if (this.head && this.tail) {
            if (this.head === this.tail) {
                this.clear();
                return;
            }
            this.tail.front.rear = this.head;
            this.head.front = this.tail.front;
            if (this.tail === this.current) {
                this.current = this.tail.front;
            }
            this.tail = this.tail.front;
        }
    };
    LinkedList.prototype.previous = function () {
        if (this.current) {
            this.current = this.current.front;
        }
        return this;
    };
    LinkedList.prototype.next = function () {
        if (this.current) {
            this.current = this.current.rear;
        }
        return this;
    };
    LinkedList.prototype.clear = function () {
        this.head = this.tail = this.current = null;
    };
    LinkedList.prototype.findFirst = function (data) {
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
            this.head = this.head.rear;
        }
        return foundNode;
    };
    LinkedList.prototype.findLast = function (data) {
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
            this.tail = this.tail.front;
        }
        return foundNode;
    };
    LinkedList.prototype.isEmpty = function () {
        return this.head === null || this.tail === null;
    };
    Object.defineProperty(LinkedList.prototype, "head", {
        get: function () {
            return this._head;
        },
        set: function (node) {
            this._head = node;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkedList.prototype, "tail", {
        get: function () {
            return this._tail;
        },
        set: function (node) {
            this._tail = node;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkedList.prototype, "current", {
        get: function () {
            return this._current;
        },
        set: function (node) {
            this._current = node;
        },
        enumerable: false,
        configurable: true
    });
    return LinkedList;
}());
exports.default = LinkedList;
