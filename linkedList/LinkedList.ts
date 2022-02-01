import Node from '../node/LinkedListNode';

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
            this.tail.next = node;
            this.tail = node;
        }
    }
    remove(...arg: (any | Node)[]) {
      if (!(arg[0] instanceof Node) && !arg[1]) {
        this.head = this.remove(this.head, arg[0]);
        this.current = this.current.data === arg[0] ? this.head : this.current;
        this.tail = this.tail.data === arg[0] ? this.getTail() : this.tail;
      } else if (arg[0] instanceof Node && arg[1] != null) {
        const node = arg[0];
        const data = arg[1];
        if(!node) return null;
        if(node.data === data) {
          if (this.current === node) {
            console.log('??');
            
            this.current === node ? node.next : node;
          }
          if (this.tail === node) this.tail = node;

          return node.next;
        }
        node.next = this.remove(node.next, data);
        return node;
      } else return this.head;
    }
    search(...arg: (any | Node)[]): Node {
      if (!(arg[0] instanceof Node) && !arg[1]) {
        return this.search(this.head, arg[0]);
      } else if (arg[0] instanceof Node && arg[1] != null) {
        const node = arg[0];
        const data = arg[1];
        if(!node || node.data === data) return node;
        return this.search(node.next, data);
      } else return null;
    }
    print(): void{
      let node = this.head;
      const array = new Array();
      while (true) {
        if(!node) break;
        array.push(node.data);
        node = node.next;
      }
      console.log(array);
    }
    next(): Node {
      if (this.current.next != null) {
        this.current = this.current.next;
      }
      return this.current;
    }
    isEmpty(): boolean {
      return !(this.head && this.tail && this.current);
    }
    clear(): boolean {
      this.head = this.tail = this.current = null;
      return this.isEmpty();
    }

    getTail(...arg: Node[]): Node {
      if (arg.length === 0) return this.getTail(this.head);
      if (!(arg[0] instanceof Node)) return null;
      if (arg[0].next) return this.getTail(arg[0].next);
      else return arg[0];
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