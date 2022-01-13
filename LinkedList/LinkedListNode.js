const Node = require('../Node');

class LinkedListNode extends Node {
    constructor(data) {
        super(data);
        this._front = this._rear = this;
    }
    get front() {
        return this._front;
    }

    set front(node) {
        this._front = node;
    }

    get rear() {
        return this._rear;
    }

    set rear(node) {
        this._rear = node;
    }
}

module.exports = LinkedListNode;