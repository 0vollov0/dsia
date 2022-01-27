import Edge from './Edge';
import DoubleLinkedListNode from '../node/DoubleLinkedListNode';
import Vertex from './Vertex';

class UndirectedEdge extends DoubleLinkedListNode implements Edge{
  constructor(v1: Vertex, v2: Vertex) {
    super(null);
    this.next = v1;
    this.previous = v2;
  }

  isSame(v1: Vertex, v2: Vertex): boolean {
    return (this.next === v1 || this.previous === v1) && (this.next === v2 || this.previous === v2);
  }
}

export default UndirectedEdge;