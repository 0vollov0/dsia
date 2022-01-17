import Node from './TreeNode';
declare class Tree {
    private _root;
    constructor();
    get root(): any;
    set root(data: any);
    clear(): void;
    preOrderTraverse(node: Node, output: any[]): void;
    inOrderTraverse(node: Node, output: any[]): void;
    postOrderTraverse(node: Node, output: any[]): void;
    levelOrderTraverse(node: Node, output: any[]): void;
}
export default Tree;
