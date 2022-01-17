import Node from '../common/Node';
declare class LinkedListNode extends Node {
    private _front;
    private _rear;
    constructor(data: any);
    get front(): this;
    set front(node: this);
    get rear(): this;
    set rear(node: this);
}
export default LinkedListNode;
