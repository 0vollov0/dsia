class Heap {
  private _tree: number[];
  private is_max_heap: boolean;
  constructor(is_max_heap: boolean = false) {
    this._tree = new Array(null);
    this.is_max_heap = is_max_heap;
  }
  
  get tree(): number[] {
    return this._tree.slice(1,this._tree.length);
  }
  
  insert(data: number): void {
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

  pop(): number {
    if (this._tree.length <= 1) return;
    const return_value = this._tree[1];
    this._tree[1] = this._tree[this._tree.length-1];
    this._tree.length--;
    
    let parent_node_index = 1;
    let children_count = 0;
    let child_node_index = 0;
    while (true) {
      children_count = this._tree.length - (parent_node_index*2);
      if (1 < children_count) {
        if (this.is_max_heap) {
          child_node_index = this._tree[parent_node_index*2] > this._tree[parent_node_index*2+1]
            ? parent_node_index*2
            : parent_node_index*2+1; 
        } else {
          child_node_index = this._tree[parent_node_index*2] < this._tree[parent_node_index*2+1]
            ? parent_node_index*2
            : parent_node_index*2+1; 
        }
      } else if (children_count === 1) {
        child_node_index = parent_node_index*2;
      } else break;

      if (this.is_max_heap) {
        if (this._tree[parent_node_index] < this._tree[child_node_index]) {
          const temp = this._tree[parent_node_index];
          this._tree[parent_node_index] = this._tree[child_node_index];
          this._tree[child_node_index] = temp;
          parent_node_index = child_node_index;
        } else break;
      } else {
        if (this._tree[parent_node_index] > this._tree[child_node_index]) {
          const temp = this._tree[parent_node_index];
          this._tree[parent_node_index] = this._tree[child_node_index];
          this._tree[child_node_index] = temp;
          parent_node_index = child_node_index;
        } else break;
      }
      
    }
    return return_value;
  }

  sort() {
    const array = new Array();
    while (this._tree.length > 1) {
      array.push(this.pop());
    }
    this._tree.push(...array);
  }
}

export default Heap;