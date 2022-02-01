import { LinkedList } from "..";

interface Graph {
  _mapper: Object;
  insertVertex(key: string): boolean;
  insertEdge(k1: string, k2: string): boolean;
  deleteVertex(key: any): boolean;
  deleteEdge(k1: string, k2: string): boolean;
  adjacent(): LinkedList[];
  reset(): boolean;
}

export default Graph;