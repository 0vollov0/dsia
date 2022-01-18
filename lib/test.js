const dsia = require('./index');

const binaryTree = new dsia.BinaryTree();

binaryTree.root = 0;
binaryTree.root.setChildren(0,1);
binaryTree.root.setChildren(1,2);
const array = new Array();
console.log(binaryTree);
binaryTree.inOrderTraverse(binaryTree.root, array);

console.log(array);