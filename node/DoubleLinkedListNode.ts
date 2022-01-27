import LinkedListNode from './LinkedListNode';

class DoubleLinkedListNode extends LinkedListNode {
    private _previous: any;
    constructor(data: any) {
        super(data);
        this._previous = this.next = this;
    }
    get previous() {
        return this._previous;
    }
    set previous(node) {
        this._previous = node;
    }
}

export default DoubleLinkedListNode;