import Graph from './Graph';
import EdgeLinkedList from './EdgeLinkedList';

class UndirectedGraph implements Graph{
  _mapper: Object;
  constructor() {
    this._mapper = {};
  }
  public get mapper(): Object {
    return this._mapper;
  }
  insertVertex(key: any): boolean {
    if(!this.mapper.hasOwnProperty(key)){
      this.mapper[key] = new EdgeLinkedList();
      this.mapper[key].add(key);
      return true;
    } else return false;
  }
  insertEdge(k1: any, k2: any): boolean {
    if (!this.mapper.hasOwnProperty(k1) || !this.mapper.hasOwnProperty(k2)) return false;
    this.mapper[k1].add(k2);
    this.mapper[k2].add(k1);
    return true;
  }
  deleteVertex(key: any): boolean {
    if(!this.mapper.hasOwnProperty(key)) return false;
    let linked_node = this.mapper[key].head;
    while (linked_node.next) {
      linked_node = linked_node.next;
      this.mapper[linked_node.data].remove(key)
    }
    delete this.mapper[key];
    return true;
  }
  deleteEdge(k1: any, k2: any) {
    if(this.mapper[k1]) this.mapper[k1].remove(k2);
    if(this.mapper[k2]) this.mapper[k2].remove(k1);
  }
  adjacent(): EdgeLinkedList[] {
    return Object.keys(this.mapper).map(key => this.mapper[key]);
  }
  reset(): boolean {
    this._mapper = {};
    return Object.keys(this.mapper).length === 0;
  }
}

export default UndirectedGraph;