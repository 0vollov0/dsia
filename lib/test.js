const dsia = require('./index');

const array = new Array(4,33,2,13,5,7,10);

dsia.quickSort(array);

// console.log(array);

const graph = new dsia.Graph();

graph.insert(0,0);
graph.insert(1,1);
graph.insert(2,2);
graph.insert(3,3);
graph.insert(3,3);

graph.constructEdge(0, 1);
graph.constructEdge(0, 2);
graph.constructEdge(0, 3);
graph.constructEdge(0, 3);

console.log(graph.mapper);