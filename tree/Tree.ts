import Node from './TreeNode';

interface TreeInterface {
    _root: Node,
    _size: number,
    readonly _degree_of_tree: number,
}

class Tree implements TreeInterface {
    constructor(degree_of_tree: number) {
        this._root = null;
        this._size = 0;
        this._degree_of_tree = degree_of_tree;
    }
    
    _root: Node;
    _size: number;
    _degree_of_tree: number;

    get root(): any {
        return this._root;
    }

    set root(data: number) {
        this._root = new Node(data, this._degree_of_tree, null);
    }

    clear() {
        this.root = null;
    }

    isEmpty(): boolean {
        return this.root ? false : true; 
    }
}

export default Tree;