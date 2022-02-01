import { LinkedList } from "..";

class Graph {
  private _mapper: Object;

  constructor() {
    this._mapper = {};
  }

  insertVertex(key: string): boolean {
    if(!this.mapper.hasOwnProperty(key)){
      this.mapper[key] = new LinkedList();
      this.mapper[key].add(key);
      return true;
    } else return false;
  }

  insertEdge(k1: string, k2: string): boolean {
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

  deleteEdge(k1: string, k2: string): boolean {
    this.mapper[k1].remove(k2);
    this.mapper[k2].remove(k1);
    return false;
  }

  adjacent(): LinkedList[] {
    return Object.keys(this.mapper).map(key => this.mapper[key]);
  }
  
  public get mapper() : Object {
    return this._mapper;
  }
  
}

export default Graph;