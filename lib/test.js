const dsia = require('./index');

// const bst = new dsia.BinarySearchTree;

// bst.insert(bst.root,10);
// bst.insert(bst.root,15);
// bst.insert(bst.root,5);
// bst.insert(bst.root,2);
// bst.insert(bst.root,7);
// bst.insert(bst.root,12);
// bst.insert(bst.root,17);
// bst.insert(bst.root,16);
// bst.insert(bst.root,19);
// bst.delete(bst.root, 10);
// const array = new Array();
// bst.levelOrderTraverse(bst.root, array);
// console.log(array);

// console.log(bst.root.children[1].children[1]);

const linkedList = new dsia.LinkedList();
// linkedList.add(0);
// linkedList.add(1);
// linkedList.add(2);
// linkedList.add(3);
// linkedList.add(4);
// linkedList.print();

// linkedList.remove(2);
// linkedList.remove(1);
// linkedList.print();

// linkedList.remove(4);
// linkedList.remove(0);
// linkedList.print();

const doubleLinkedList = new dsia.DoubleLinkedList();
doubleLinkedList.add(0);
doubleLinkedList.add(1);
doubleLinkedList.add(2);
doubleLinkedList.add(3);
doubleLinkedList.add(4);
doubleLinkedList.remove(3);
doubleLinkedList.print();

console.log(doubleLinkedList.search(4));

