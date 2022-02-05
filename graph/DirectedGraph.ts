import Graph from './Graph';
import EdgeLinkedList from './EdgeLinkedList';
import Edge from './Edge';
import { Heap } from '..';

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
  dijkstra(begin: string, end: string = null) {
    const begin_vertex = this.mapper[begin];
    if(!begin_vertex) return null;
    const heap = new Heap();
    const path_info = {};
    
    Object.keys(this.mapper).forEach(key => {
      path_info[key] = key == begin ? {distance: 0} : {distance: Number.MAX_VALUE};
      heap.insert(path_info[key].distance, {key, previous: null});
    })
    
    while (heap.tree.length > 1) {
      const path = heap.pop();
      const vertex_key = path.node['key'];
      
      if (path_info[vertex_key].distance <= path.data) {
        const edges = this.mapper[vertex_key].getEdges();
        edges.forEach((edge: Edge) => {
          const vertex = this.mapper[vertex_key].getEdge(edge.data);
          const min_distance = Math.min(path_info[edge.data].distance, path.data + vertex.weight);
          if(path_info[edge.data].distance > min_distance) {
            if (path_info[edge.data].route === undefined) path_info[edge.data].route = new Array();
            path_info[edge.data].route.push(path.node['key']);
            heap.insert(min_distance, {'key': edge.data, previous: vertex_key});
            path_info[edge.data].distance = min_distance;
          }
        });
      }
    }

    const result = {
      'distance': path_info[end].distance,
      'route': new Array(),
    }
    this.findRoute(path_info, begin, result.route, [end]);
    result.route = [begin].concat(result.route.reverse());
    return end === null ? path_info : result;
  }
  findRoute(path_info: object, begin: string, array: string[], route: string []) {
    if (!route) return array;
    while (route.length > 0) {
      const t = route.pop();
      if (t !== begin) array.push(t);
      this.findRoute(path_info, begin, array, path_info[t].route !== undefined ? [...path_info[t].route] :  null);
    }
  }
}
export default DirectedGraph;