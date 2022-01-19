import Node from '../node/Node';

class LinkedListNode extends Node {
    private _front: this;
    private _rear: this;
    constructor(data: any) {
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

export default LinkedListNode;