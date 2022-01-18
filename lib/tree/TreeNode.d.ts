import Node from '../common/Node';
declare class TreeNode extends Node {
    private _children;
    constructor(data: number, children_size: number);
    get children(): TreeNode[];
    setChildren(index: number, data: number): void;
}
export default TreeNode;
