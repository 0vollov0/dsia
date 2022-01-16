import Node from './LinkedListNode.js';

class LinkedList {
    private _head: any;
    private _tail: any;
    private _current: any;
    constructor() {
        this._head = this._tail = this._current = null;
    }
    add(data: any) {
        const node = new Node(data);
        if (!this.head || !this.tail) {
            this.head = this.tail = this.current = node;
        } else {
            node.front = this.tail;
            this.tail.rear = node;
            node.rear = this.head;
            this.head.front = node;
            this.tail = node;
        }
    }
    pop() {
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
    }
    previous() {
        if (this.current) {
            this.current = this.current.front;
        }
        return this;
    }
    next() {
        if (this.current) {
            this.current = this.current.rear;
        }
        return this;
    }
    clear() {
        this.head = this.tail = this.current = null;
    }
    findFirst(data: any) {
        if (this.isEmpty()) return null;
        let foundNode = null;
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
    }
    findLast(data: any) {
        if (this.isEmpty()) return null;
        let foundNode = null;
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
    }
    isEmpty() {
        return this.head === null || this.tail === null;
    }
    get head() {
        return this._head;
    }

    set head(node) {
        this._head = node;
    }

    get tail() {
        return this._tail;
    }

    set tail(node) {
        this._tail = node;
    }

    get current() {
        return this._current;
    }

    set current(node) {
        this._current = node;
    }
}

export default LinkedList;