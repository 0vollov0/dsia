import BinaryTree from './BinaryTree';
import Node from '../node/TreeNode';

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  search(...arg : any) : Node {
    if (typeof arg[0] === 'number') {
      return this.search(this.root, arg[0]);
    } else if ((arg[0] instanceof Node || (!arg[0] && arg.length > 1))&& arg[1] != null) {
      const node = arg[0];
      const data = arg[1];
      if (!node) return null;
      if (node.data === data) return node;
      else if (data < node.data) return this.search(node.children[0],data);
      else return this.search(node.children[1],data);
    } else return null;
  }

  insert(...arg: any) {
    if (typeof arg[0] === 'number') {
      if (this.root === null) this.root = arg[0];
      else this.insert(this.root, arg[0]);
    } else if ((arg[0] instanceof Node || (!arg[0] && arg.length > 1))&& arg[1] != null) {
      const node = arg[0];
      const data = arg[1];
      if (!node) return new Node(data, this._degree_of_tree);
      if (data < node.data) {
        node.children[0] = this.insert(node.children[0], data);
      } else if (data > node.data) {
        node.children[1] = this.insert(node.children[1], data);
      }
      return node;
    }
  }

  delete(node: Node, data: number) {
    if (!node) return null;
    if (data < node.data) {
      node.children[0] = this.delete(node.children[0], data);
      console.log('!',node.data, node.children[0]);
    } else if (data > node.data) {
      node.children[1] = this.delete(node.children[1], data);
      console.log('@',node.data, node.children[1]);
    } else {
      if (!node.children[0]) {
        return node.children[1];
      } else if (!node.children[1]) {
        return node.children[0];
      }
      let temp = node.children[1];
      while (temp.children[0]) {
        temp = temp.children[0];
      }
      node.data = temp.data;
      node.children[1] = this.delete(node.children[1], temp.data);
    }
    return node;
  }

  getHeight(...arg: any) : number {
    if(this.isEmpty()) return 0;
    if (arg.length === 0) {
      return this.getHeight(this.root, 0);
    } else if ((arg[0] instanceof Node || (!arg[0] && arg.length > 1))&& typeof arg[1] === 'number' ) {
      const node = arg[0];
      const height = arg[1];
      if (!node) return height;
      const left_height = this.getHeight(node.children[0], height + 1);
      const right_height = this.getHeight(node.children[1], height + 1);
      return left_height > right_height ? left_height : right_height;
    }
    return 0;
  }
}

export default BinarySearchTree;