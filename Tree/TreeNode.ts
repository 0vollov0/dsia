import MotherNode from '../MotherNode';

export class TreeNode extends MotherNode {
    private _children: TreeNode[];
    constructor(data: any) {
        super(data);
        this._children = new Array(2);
    }

    get children() {
        return this._children;
    }
}