import Vertex from './Vertex';

interface Edge {
  isSame(v1: Vertex, v2: Vertex): boolean;
}

export default Edge;