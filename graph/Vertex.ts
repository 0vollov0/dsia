import UndirectedEdge from './UndirectedEdge';
;


class Vertex {
  private _data: any;
  private _edges: UndirectedEdge[];
  constructor(data: number) {
    this.data = data;
    this._edges = new Array();
  }

  get data(): any {
    return this._data;
  }

  set data(data: any) {
    this._data = data;
  }

  
  public get edges() : UndirectedEdge[] {
    return this._edges;
  }
  
  addEdge(edge: UndirectedEdge) {
    this.edges.push(edge);
  }

  hasEdge(edge: UndirectedEdge) {
    let flag = false;
    for (let index = 0; index < this.edges.length; index++) {
      if(this.edges[index].isSame(edge.next, edge.previous)) {
        flag = true;
        break;
      }
    }
    return flag;
  }
}

export default Vertex;