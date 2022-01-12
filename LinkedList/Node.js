class Node {
    constructor(val) {
        this._data = val;
        this._front = this._rear = this;
    }

    update(val) {
        this._data = val;
    }

    get data() {
        return this._data;
    }

    set data(val) {
        this._data = val;
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

module.exports = Node;