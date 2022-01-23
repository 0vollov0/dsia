const dsia = require('./index');

const bst = new dsia.BinarySearchTree;

bst.insert(10);
bst.insert(15);
bst.insert(5);
bst.insert(2);
// bst.insert(7);
// bst.insert(12);
// bst.insert(17);
// bst.insert(16);
// bst.insert(19);
const array = new Array();
bst.levelOrderTraverse(bst.root, array);
console.log(array);

console.log(bst.getHeight());

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

// const doubleLinkedList = new dsia.DoubleLinkedList();
// doubleLinkedList.add(0);
// doubleLinkedList.add(1);
// doubleLinkedList.add(2);
// doubleLinkedList.add(3);
// doubleLinkedList.add(4);
// doubleLinkedList.remove(3);
// doubleLinkedList.print();

// console.log(doubleLinkedList.search(4));

const bubble = new Array(3,0,1,8,7,2,5,4,6,9);

// dsia.bubbleSort(bubble);

// console.log(bubble);
