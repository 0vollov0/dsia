const dsia = require('./index');

const array = new Array(4,33,2,13,5,7,10);

dsia.quickSort(array);

// console.log(array);

const graph = new dsia.DirectedGraph();

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

graph.insertVertex('1');
graph.insertVertex('2');
graph.insertVertex('3');
graph.insertVertex('4');
graph.insertVertex('5');
graph.insertVertex('6');
graph.insertVertex('7');

graph.insertEdge('1','3',6);
graph.insertEdge('1','4',3);

graph.insertEdge('2','1',3);

graph.insertEdge('3','4',2);
graph.insertEdge('3','6',0);

graph.insertEdge('4','3',1);
graph.insertEdge('4','2',1);

graph.insertEdge('5','2',4);
graph.insertEdge('5','4',2);
graph.insertEdge('5','7',3);

graph.insertEdge('6','4',3);
graph.insertEdge('6','5',3);
graph.insertEdge('6','7',2);

graph.insertEdge('7','6',2);



// console.log(JSON.stringify(graph.mapper));

console.log(graph.dijkstra('1', '7'));
