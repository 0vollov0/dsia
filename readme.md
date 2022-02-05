# dsia

### dsia is the shortened name of data structure including algorithm.

# Data Structure

## Linked List

|Object|Extend|Constructor|
|---|---|---|
|LinkedList||none|
|DoubleLinkedList|LinkedList|none|

## Tree

|Object|Extend|Constructor|
|---|---|---|
|Tree||degree_of_tree: number|
|BinaryTree|Tree|none|
|BinarySearchTree|BinaryTree|none|
|Heap||is_max_heap: boolean = false|

## Graph

|Object|Extend|Constructor|
|---|---|---|
|Graph||none|
|UndirectedGraph|Graph|none|
|DirectedGraph|Graph|none|

# Algorithm

## Tree Algorithm

|Function|Class|Parameters|
|---|---|---|
|preOrderTraverse|BinaryTree|(node: Node, output: number[])|
|inOrderTraverse|BinaryTree|(node: Node, output: number[])|
|postOrderTraverse|BinaryTree|(node: Node, output: number[])|
|levelOrderTraverse|BinaryTree|(node: Node, output: number[])|

## Graph Algorithm

|Function|Class|Parameters|Description|
|---|---|---|---|
|dfs|Graph|(begin: any, end: any = null)|If you put an end value, This method would process from begin to end. On the other way, if you didn't an end value, This method would process about all of the vertexes.|
|bfs|Graph|(begin: any, end: any = null)|Same as above.|
|dijkstra|DirectedGraph|(begin: string, end: string = null)|If you put an end value, This method would return an object that included distance and route path. On the other way, if you didn't an end value, This method would return each vertex that included distance and route what is compressed path to the vertex.|

## sort

|Function|Parameters|
|---|---|
|bubbleSort|Number[]|
|selectionSort|Number[]|
|insertSort|Number[]|
|mergeSort|Number[]|
|quickSort|Number[]|
