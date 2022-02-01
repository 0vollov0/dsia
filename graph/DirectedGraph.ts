import Graph from './Graph';
import EdgeLinkedList from './EdgeLinkedList';

class DirectedGraph implements Graph{
  _mapper: Object;
  constructor() {
    this._mapper = {};
  }
  public get mapper(): Object {
    return this._mapper;
  }
  insertVertex(key: string): boolean {
    if(!this.mapper.hasOwnProperty(key)){
      this.mapper[key] = new EdgeLinkedList();
      this.mapper[key].add(key);
      return true;
    } else return false;
  }
  insertEdge(k1: any, k2: any, weight: number): boolean {
    if (!this.mapper.hasOwnProperty(k1) || !this.mapper.hasOwnProperty(k2)) return false;
    this.mapper[k1].add(k2, !weight ? 0 : weight);
    return true;
  }
  deleteVertex(key: any): boolean {
    if(!this.mapper.hasOwnProperty(key)) return false;
    delete this.mapper[key];
    return !this.mapper.hasOwnProperty(key);
  }
  deleteEdge(k1: any, k2: any) {
    if(this.mapper[k1]) this.mapper[k1].remove(k2);
  }
  adjacent(): EdgeLinkedList[] {
    return Object.keys(this.mapper).map(key => this.mapper[key]);
  }
  reset(): boolean {
    this._mapper = {};
    return Object.keys(this.mapper).length === 0;
  }
}
export default DirectedGraph;