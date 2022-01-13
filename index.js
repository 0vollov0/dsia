const LinkedList = require('./LinkedList/LinkedList');
const Tree = require('./Tree/Tree');
const TreeNode = require('./Tree/TreeNode');

const tree = new Tree();

tree.root = 0;
tree.root.children[0] = new TreeNode(1);
tree.root.children[1] = new TreeNode(2);
tree.root.children[0].children[0] = new TreeNode(3);
// tree.root.children[0].children[1] = new TreeNode(4);
// tree.root.children[1].children[0] = new TreeNode(5);
tree.root.children[1].children[1] = new TreeNode(6);
const array = new Array();
tree.preOrder(tree.root, array);
console.log(array);
// tree.preOrder(tree.root);