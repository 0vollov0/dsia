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

  print() {
    console.log(this.head.data);
  }

  getEdges(): Edge[] {
    const edges = new Array();
    let ptr = this.head;
    while (ptr) {
      if(this.head !== ptr) edges.push(ptr);
      ptr = ptr.next;
    }
    return edges;
  }

  getEdge(data: any): Edge {
    let edge = null;
    let ptr = this.head;
    while (ptr) {
      if (ptr.data == data) {
        edge = ptr;
        break;
      }
      ptr = ptr.next;
    }
    return edge;
  }
}

export default EdgeLinkedList;