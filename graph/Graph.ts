import { LinkedList } from "..";
import EdgeLinkedList from './EdgeLinkedList';

interface Graph {
  _mapper: Object;
  get mapper(): Object;
  insertVertex(key: any): boolean;
  insertEdge(k1: any, k2: any, weight: number): boolean;
  deleteVertex(key: any): boolean;
  deleteEdge(k1: any, k2: any): void;
  adjacent(): EdgeLinkedList[];
  reset(): boolean;
}

export default Graph;