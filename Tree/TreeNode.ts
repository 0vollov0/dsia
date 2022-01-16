import MotherNode from '../MotherNode';

class TreeNode extends MotherNode {
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