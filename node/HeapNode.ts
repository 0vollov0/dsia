import Node from './Node';

class HeapNode extends Node {
  private _node: Object;
  constructor(data: number, node: Object = {}) {
    super(data);
    this._node = node;
  }
  compare(node: Node): number{
    if(this.data > node.data) return 1;
    else if (this.data < node.data) return -1;
    return 0;
  }
  public get node(): Object {
    return this._node;
  }
  public set node(node: Object) {
    this._node = node;
  }
}

export default HeapNode;