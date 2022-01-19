import BinaryTree from './BinaryTree';
import TreeNode from '../node/TreeNode';

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  search(node: TreeNode, data: number): TreeNode{
    if (!node) return null;
    if (node.data === data) return node;
    else if (data < node.data) return this.search(node.children[0],data);
    else return this.search(node.children[1],data);
  }

  insert(node: TreeNode, data: number) {
    if(this.root === null) this.root = data;
    else{
      if(!node) return new TreeNode(data, this._degree_of_tree, null);
      if (data < node.data) {
        node.children[0] = this.insert(node.children[0], data);
      } else if (data > node.data) {
        node.children[1] = this.insert(node.children[1], data);
      }
    }
    return node;
  }

  delete(node: TreeNode, data: number) {
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