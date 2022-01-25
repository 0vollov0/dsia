const dsia = require('./index');


const heap = new dsia.Heap();

heap.insert(3);
heap.insert(9);
heap.insert(4);
heap.insert(5);
heap.insert(10);

heap.pop();
// heap.pop();
// heap.pop();
// heap.pop();
// heap.pop();
// heap.pop();


console.log(heap.tree);