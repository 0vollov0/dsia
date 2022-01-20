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
}

export default BinarySearchTree;