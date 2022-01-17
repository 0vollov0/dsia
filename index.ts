// const LinkedList = require('./LinkedList/LinkedList');
import Tree from './tree/Tree';
import TreeNode from './tree/TreeNode';
import LinkedList from './linkedList/LinkedList';

const tree = new Tree();

tree.root = 0;
tree.root.children[0] = new TreeNode(1);
tree.root.children[1] = new TreeNode(2);
tree.root.children[0].children[0] = new TreeNode(3);
tree.root.children[0].children[1] = new TreeNode(4);
tree.root.children[1].children[0] = new TreeNode(5);
tree.root.children[1].children[1] = new TreeNode(6);
const array = new Array();
tree.postOrderTraverse(tree.root, array);
console.log(array);
tree.preOrderTraverse(tree.root, array);
console.log(array.shift(), array);
tree.levelOrderTraverse(tree.root, array);
console.log(array);

const linkedList = new LinkedList();
linkedList.add(0);
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);

console.log(linkedList);
