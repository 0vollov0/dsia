const dsia = require('./index');

const array = new Array(4,33,2,13,5,7,10);

dsia.quickSort(array);

// console.log(array);

const graph = new dsia.UndirectedGraph();

graph.insertVertex(0);
graph.insertVertex(1);
graph.insertVertex(2);
graph.insertVertex(3);
graph.insertVertex(3);

graph.insertEdge(0, 1);
graph.insertEdge(0, 2);
graph.insertEdge(0, 3);
graph.insertEdge(1, 2);
graph.insertEdge(2, 3);

// graph.deleteEdge(0,1);
// graph.deleteEdge(0,2);
// graph.deleteEdge(0,3);
// graph.deleteEdge(3,2);
// graph.deleteEdge(1,2);
// graph.deleteVertex(0);
// graph.deleteVertex(1);
// graph.deleteVertex(2);

console.log(graph.adjacent());

// const linkedList = new dsia.LinkedList();
// linkedList.add(0);
// linkedList.add(1);
// linkedList.add(2);

// linkedList.next();
// linkedList.next();

// linkedList.remove(0);
// linkedList.remove(1);
// linkedList.remove(2);

// console.log(linkedList);

// graph.delete('0');