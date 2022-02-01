import Node from './Node';

class LinkedListNode extends Node {
    private _next: any;
    constructor(data: any) {
        super(data);
        this._next = null;
    }
    
    get next() {
        return this._next;
    }

    set next(node) {
        this._next = node;
    }
}

export default LinkedListNode;