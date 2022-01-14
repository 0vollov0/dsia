const Node = require('./TreeNode.js');

class Tree {
    constructor() {
        this._root = null;
    }

    get root() {
        return this._root;
    }

    set root(data) {
        this._root = new Node(data);
    }

    clear() {
        this.root = null;
    }

    preOrderTraverse(node, output) {
        if(!node) return;
        // https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript
        if(node === this.root) while(output.length > 0) output.pop();
        output.push(node.data);
        this.preOrderTraverse(node.children[0],output);
        this.preOrderTraverse(node.children[1],output);
    }

    inOrderTraverse(node, output) {
        if(!node) return;
        if(node === this.root) while(output.length > 0) output.pop();
        this.inOrderTraverse(node.children[0],output);
        output.push(node.data);
        this.inOrderTraverse(node.children[1],output);
    }

    postOrderTraverse(node, output) {
        if(!node) return;
        if(node === this.root) while(output.length > 0) output.pop();
        this.postOrderTraverse(node.children[0],output);
        this.postOrderTraverse(node.children[1],output);
        output.push(node.data);
    }

    levelOrderTraverse(node, output) {
        if(!this.root) return;
        while(output.length > 0) output.pop();
        const stackQueue = new Array(node);
        while (stackQueue.length > 0) {
            const shiftedNode = stackQueue.shift();
            output.push(shiftedNode.data);
            if (shiftedNode.children[0]) stackQueue.push(shiftedNode.children[0]);
            if (shiftedNode.children[1]) stackQueue.push(shiftedNode.children[1]);
        }
    }
}

module.exports = Tree;