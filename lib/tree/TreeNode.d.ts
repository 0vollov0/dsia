import Node from '../common/Node';
declare class TreeNode extends Node {
    private _children;
    constructor(data: any);
    get children(): TreeNode[];
}
export default TreeNode;
