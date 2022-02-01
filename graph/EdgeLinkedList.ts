import { LinkedList } from "..";
import Edge from './Edge';

class EdgeLinkedList extends LinkedList {
  constructor() {
    super();
  }

  add() {
    if(arguments.length === 0) return;
    const edge = arguments.length === 1 ? new Edge(arguments[0], 0) : new Edge(arguments[0], arguments[1]);
    if (!this.head || !this.tail) {
        this.head = this.tail = this.current = edge;
    } else {
        this.tail.next = edge;
        this.tail = edge;
    }
  }
}

export default EdgeLinkedList;