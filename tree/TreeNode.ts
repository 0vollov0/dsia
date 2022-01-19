import Node from '../common/Node';

class TreeNode extends Node {
    private _children: TreeNode[];
    constructor(data: number, children_size: number, parent: TreeNode) {
        super(data);
        this._children = new Array(children_size);
    }

    get children() : TreeNode[]{
        return this._children;
    }

    setChildren(index: number, data: number) {
        if(index > this._children.length-1 || index < 0) return;
        this._children[index] = new TreeNode(data, this._children.length - 1, this);
    }

    removeChildren(data: number, node: TreeNode){
        for (const key in this.children) {
            if (Object.prototype.hasOwnProperty.call(this.children, key)) {
                if (this.children[key].data === data) {
                    this.children[key] = node;
                    break;
                }
            }
        }
    }
}

export default TreeNode;