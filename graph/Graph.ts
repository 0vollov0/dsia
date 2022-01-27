import UndirectedEdge from "./UndirectedEdge";
import Vertex from "./Vertex";

class Graph {
  private _mapper: Object;
  constructor() {
    this._mapper = {};
  }

  insert(key: string, data: number): boolean {
    if(!this.mapper.hasOwnProperty(key)){
      this.mapper[key] = new Vertex(data);
      return true;
    } else return false;
  }

  constructEdge(k1: string, k2: string): boolean {
    if (!this.mapper.hasOwnProperty(k1) || !this.mapper.hasOwnProperty(k2)) return false;
    const edge = new UndirectedEdge(this.mapper[k1], this.mapper[k2]);
    if(this.mapper[k1].hasEdge(edge) || this.mapper[k2].hasEdge(edge)) return false;
    this.mapper[k1].addEdge(edge);
    this.mapper[k2].addEdge(edge);
    return true;
  }

  public get mapper() : Object {
    return this._mapper;
  }
  
}

export default Graph;