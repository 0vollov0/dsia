import {LinkedListNode} from '..';

class Edge extends LinkedListNode {
  private _weight: number;
  constructor(key: any, weight: number) {
    super(key);
    this._weight = weight;
  }
  public get weight() : number {
    return this._weight;
  }
}

export default Edge;