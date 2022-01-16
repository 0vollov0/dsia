import Node from '../common/Node';

class TreeNode extends Node {
    private _children: TreeNode[];
    constructor(data: any) {
        super(data);
        this._children = new Array(2);
    }

    get children() {
        return this._children;
    }
}

export default TreeNode;