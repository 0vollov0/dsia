import Graph from './Graph';
import EdgeLinkedList from './EdgeLinkedList';
import Edge from './Edge';

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
  dfs(begin: any, end: any = null): EdgeLinkedList[]{
    const begin_vertex = this.mapper[begin];
    if(!begin_vertex) return null;
    const visited = new Array();
    const stack = [begin_vertex.head.data];
    
    while (stack.length > 0) {
      const vertex_key = stack.pop();
      const new_vertex = this.mapper[vertex_key];
      if(new_vertex.head.data !== null && visited.indexOf(new_vertex.head.data) === -1) {
        const vertexes = new_vertex.getEdges()
          // .filter((edge: Edge) => stack.indexOf(edge.data) === -1)
          .map((edge: Edge) => edge.data);
        stack.push(...vertexes);
        visited.push(new_vertex.head.data);
        if(new_vertex.head.data === end) break;
      }
    }
    return visited;
  }
  bfs(begin: any, end: any = null): EdgeLinkedList[]{
    const begin_vertex = this.mapper[begin];
    if(!begin_vertex) return null;
    const visited = new Array();
    const queue = [begin_vertex.head.data];
    while (queue.length > 0) {
      const vertex_key = queue.shift();
      const new_vertex = this.mapper[vertex_key];
      if(new_vertex.head.data !== null && visited.indexOf(new_vertex.head.data) === -1) {
        const vertexes = new_vertex.getEdges()
          // .filter((edge: Edge) => queue.indexOf(edge.data) === -1)
          .map((edge: Edge) => edge.data);
          queue.push(...vertexes);
        visited.push(new_vertex.head.data);
        if(new_vertex.head.data === end) break;
      } 
    }
    return visited;
  }
}
export default DirectedGraph;