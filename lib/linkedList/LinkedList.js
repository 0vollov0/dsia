"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedListNode_1 = require("../node/LinkedListNode");
var LinkedList = (function () {
    function LinkedList() {
        this._head = this._tail = this._current = null;
    }
    LinkedList.prototype.add = function () {
        if (1 < arguments.length)
            return;
        var node = new LinkedListNode_1.default(arguments[0]);
        if (!this.head || !this.tail) {
            this.head = this.tail = this.current = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
    };
    LinkedList.prototype.remove = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        if (!(arg[0] instanceof LinkedListNode_1.default) && !arg[1]) {
            this.head = this.remove(this.head, arg[0]);
            this.current = this.current.data === arg[0] ? this.head : this.current;
            this.tail = this.tail.data === arg[0] ? this.getTail() : this.tail;
        }
        else if (arg[0] instanceof LinkedListNode_1.default && arg[1] != null) {
            var node = arg[0];
            var data = arg[1];
            if (!node)
                return null;
            if (node.data === data) {
                if (this.current === node) {
                    console.log('??');
                    this.current === node ? node.next : node;
                }
                if (this.tail === node)
                    this.tail = node;
                return node.next;
            }
            node.next = this.remove(node.next, data);
            return node;
        }
        else
            return this.head;
    };
    LinkedList.prototype.search = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        if (!(arg[0] instanceof LinkedListNode_1.default) && !arg[1]) {
            return this.search(this.head, arg[0]);
        }
        else if (arg[0] instanceof LinkedListNode_1.default && arg[1] != null) {
            var node = arg[0];
            var data = arg[1];
            if (!node || node.data === data)
                return node;
            return this.search(node.next, data);
        }
        else
            return null;
    };
    LinkedList.prototype.print = function () {
        var node = this.head;
        var array = new Array();
        while (true) {
            if (!node)
                break;
            array.push(node.data);
            node = node.next;
        }
        console.log(array);
    };
    LinkedList.prototype.next = function () {
        if (this.current.next != null) {
            this.current = this.current.next;
        }
        return this.current;
    };
    LinkedList.prototype.isEmpty = function () {
        return !(this.head && this.tail && this.current);
    };
    LinkedList.prototype.clear = function () {
        this.head = this.tail = this.current = null;
        return this.isEmpty();
    };
    LinkedList.prototype.getTail = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        if (arg.length === 0)
            return this.getTail(this.head);
        if (!(arg[0] instanceof LinkedListNode_1.default))
            return null;
        if (arg[0].next)
            return this.getTail(arg[0].next);
        else
            return arg[0];
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
