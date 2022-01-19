const dsia = require('./index');

const bst = new dsia.BinarySearchTree;

// bst.insert(20);
// bst.insert(10);
// bst.insert(30);
// bst.insert(5);
// bst.insert(15);
// bst.insert(25);
// bst.insert(35);

// const array = new Array();

// bst.levelOrderTraverse(bst.root, array);

// bst.remove(10);
// bst.remove(20);
// bst.levelOrderTraverse(bst.root, array);
// console.log(array);

bst.insert(bst.root,10);
bst.insert(bst.root,15);
bst.insert(bst.root,5);
bst.insert(bst.root,2);
bst.insert(bst.root,7);
bst.insert(bst.root,12);
bst.insert(bst.root,17);
bst.insert(bst.root,16);
bst.insert(bst.root,19);
// bst.insert(bst.root,43);
// bst.insert(bst.root,49);
// bst.insert(bst.root,31);
bst.delete(bst.root, 10);
const array = new Array();
bst.levelOrderTraverse(bst.root, array);
console.log(array);

console.log(bst.root.children[1].children[1]);
