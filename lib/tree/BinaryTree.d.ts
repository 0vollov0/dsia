import Tree from './Tree';
import Node from './TreeNode';
declare class BinaryTree extends Tree {
    constructor();
    preOrderTraverse(node: Node, output: number[]): void;
    inOrderTraverse(node: Node, output: number[]): void;
    postOrderTraverse(node: Node, output: number[]): void;
    levelOrderTraverse(node: Node, output: number[]): void;
}
export default BinaryTree;
