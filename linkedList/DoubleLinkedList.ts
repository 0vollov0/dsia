import LinkedList from './LinkedList';
import Node from '../node/DoubleLinkedListNode';

class DoubleLinkedList extends LinkedList {
  constructor() {
    super();
  }
  add(data: any) {
      const node = new Node(data);
      if (!this.head || !this.tail) {
          this.head = this.tail = this.current = node;
      } else {
          node.previous = this.tail;
          this.tail.next = node;
          node.next = this.head;
          this.head.previous = node;
          this.tail = node;
      }
  }
  search(...arg : any) : Node {
    if (typeof arg[0] === 'number') {
      return this.search(this.head, arg[0]);
    } else if (arg[0] instanceof Node && arg[1] != null) {
      const node = arg[0];
      const data = arg[1];
      if (!node || node.data === data) return node;
      else if (node === this.tail) return null;
      return this.search(node.next, data);
    } else return null;
  }
  remove(data: any) : boolean {
    const node = this.search(data);
    if(!node) return false;
    if (node.next === node || node.previous === node) this.clear();
    else {
      const previous_node = node.previous;
      const next_node = node.next;
      previous_node.next = next_node;
      next_node.previous = previous_node;
    }
    return true;
  }
  previous() : Node{
    if (this.current.previous != null) {
      this.current = this.current.previous;
    }
    return this.current;
  }

  print(){
    let node = this.head;
    const array = new Array();
    if(node != null) array.push(node.data);
    node = node.next;
    while (node !== this.head) {
      if(!node) break;
      array.push(node.data);
      node = node.next;
    }
    console.log(array);
  }
}

export default DoubleLinkedList;