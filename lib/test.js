const dsia = require('./index');

const array = new Array(4,33,2,13,5,7,10);

dsia.quickSort(array);

// console.log(array);

const graph = new dsia.UndirectedGraph();

// graph.insertVertex(0);
// graph.insertVertex(1);
// graph.insertVertex(2);
// graph.insertVertex(3);
// graph.insertVertex(3);

// graph.insertEdge(0, 1, 19);
// graph.insertEdge(0, 2);
// graph.insertEdge(0, 3, 30);
// graph.insertEdge(1, 2);
// graph.insertEdge(2, 3, 2);

graph.insertVertex('A');
graph.insertVertex('X');
graph.insertVertex('H');
graph.insertVertex('G');
graph.insertVertex('P');
graph.insertVertex('E');
graph.insertVertex('Y');
graph.insertVertex('M');
graph.insertVertex('J');

graph.insertEdge('A', 'X');
graph.insertEdge('X', 'G');
graph.insertEdge('X', 'H');
graph.insertEdge('G', 'H');
graph.insertEdge('G', 'P');
graph.insertEdge('H', 'E');
graph.insertEdge('H', 'P');
graph.insertEdge('E', 'M');
graph.insertEdge('E', 'Y');
graph.insertEdge('Y', 'M');
graph.insertEdge('M', 'J');

// console.log(JSON.stringify(graph.mapper));

console.log(graph.dfs('A'));
// console.log(graph.visited);

// graph.deleteEdge(0,1);
// graph.deleteEdge(0,2);
// graph.deleteEdge(0,3);
// graph.deleteEdge(3,2);
// graph.deleteEdge(1,2);
// graph.deleteVertex(0);
// graph.deleteVertex(1);
// graph.deleteVertex(2);

// console.log(graph.adjacent());

// console.log(graph.mapper['A'].next());
// console.log(graph.mapper['A'].head.next);

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