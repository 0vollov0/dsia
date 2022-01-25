class Heap {
  private _tree: number[];
  private is_max_heap: boolean;
  constructor(is_max_heap: boolean) {
    this._tree = new Array(null);
    this.is_max_heap = is_max_heap;
  }
  
  get tree() {
    return this._tree.slice(1,this._tree.length);
  }
  
  insert(data: number) {
    this._tree.push(data);
    let new_node_index = this._tree.length-1;
    let parent_index = Math.floor(new_node_index/2);
    while (parent_index > 0) {
      if (this.is_max_heap
            ? (this._tree[new_node_index] > this._tree[parent_index])
            : (this._tree[new_node_index] < this._tree[parent_index])) {
        const temp = this._tree[new_node_index];
        this._tree[new_node_index] = this._tree[parent_index];
        this._tree[parent_index] = temp;
      } else break;
      new_node_index = parent_index;
      parent_index = Math.floor(new_node_index/2);
    }
  }

  pop() {
    if (this._tree.length <= 1) return;
    this._tree[1] = this._tree[this._tree.length-1];
    this._tree.length = this._tree.length-1;
    
    let parent_node_index = 1;
    if (this.is_max_heap) {
      while (true) {
        const child_node_index = this._tree[parent_node_index*2] > this._tree[parent_node_index*2+1] ? parent_node_index*2 : parent_node_index*2+1;        
        if ((child_node_index < this._tree.length) && (this._tree[parent_node_index] < this._tree[child_node_index])) {
          const temp = this._tree[parent_node_index];
          this._tree[parent_node_index] = this._tree[child_node_index];
          this._tree[child_node_index] = temp;
          parent_node_index = child_node_index;
        } else break;
      }
    }else {
      while (true) {
        const child_node_index = this._tree[parent_node_index*2] < this._tree[parent_node_index*2+1] ? parent_node_index*2 : parent_node_index*2+1;        
        if ((child_node_index < this._tree.length) && (this._tree[parent_node_index] > this._tree[child_node_index])) {
          const temp = this._tree[parent_node_index];
          this._tree[parent_node_index] = this._tree[child_node_index];
          this._tree[child_node_index] = temp;
          parent_node_index = child_node_index;
        } else break;
      }
    }
  }
}

export default Heap;