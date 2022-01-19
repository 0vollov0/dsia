import Node from '../node/LinkedListNode';

class LinkedList {
    private _head: Node;
    private _tail: Node;
    private _current: Node;
    constructor() {
        this._head = this._tail = this._current = null;
    }
    add(data: any) {
        const node = new Node(data);
        if (!this.head || !this.tail) {
            this.head = this.tail = this.current = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }
    remove(...arg : any) {
      if (typeof arg[0] === 'number') {
        this.head = this.remove(this.head, arg[0]);
      } else if (arg[0] instanceof Node && arg[1] != null) {
        const node = arg[0];
        const data = arg[1];
        if(!node) return null;
        if(node.data === data) return node.next;
        node.next = this.remove(node.next, data);
        return node;
      } else return this.head;
    }
    search(...arg : any) : Node {
      if (typeof arg[0] === 'number') {
        return this.search(this.head, arg[0]);
      } else if (arg[0] instanceof Node && arg[1] != null) {
        const node = arg[0];
        const data = arg[1];
        if(!node || node.data === data) return node;
        return this.search(node.next, data);
      } else return null;
    }
    print(){
      let node = this.head;
      const array = new Array();
      while (true) {
        if(!node) break;
        array.push(node.data);
        node = node.next;
      }
      console.log(array);
    }
    next() : Node {
      if (this.current.next != null) {
        this.current = this.current.next;
      }
      return this.current;
    }
    isEmpty() : boolean {
      return !(this.head && this.tail && this.current);
    }
    clear() : boolean {
      this.head = this.tail = this.current = null;
      return this.isEmpty();
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