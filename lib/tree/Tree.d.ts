import Node from './TreeNode';
interface TreeInterface {
    _root: Node;
    _size: number;
    readonly _degree_of_tree: number;
}
declare class Tree implements TreeInterface {
    constructor(degree_of_tree: number);
    _root: Node;
    _size: number;
    _degree_of_tree: number;
    get root(): any;
    set root(data: number);
    clear(): void;
}
export default Tree;
