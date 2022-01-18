import Node from '../common/Node';

class TreeNode extends Node {
    private _children: TreeNode[];
    constructor(data: number, children_size: number) {
        super(data);
        this._children = new Array(children_size);
    }

    get children() {
        return this._children;
    }

    setChildren(index: number, data: number) {
        if(index > this._children.length-1 || index < 0) return;
        this._children[index] = new TreeNode(data, this._children.length - 1);
    }
}

export default TreeNode;