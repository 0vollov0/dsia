"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Heap = (function () {
    function Heap(is_max_heap) {
        this._tree = new Array(null);
        this.is_max_heap = is_max_heap;
    }
    Object.defineProperty(Heap.prototype, "tree", {
        get: function () {
            return this._tree.slice(1, this._tree.length);
        },
        enumerable: false,
        configurable: true
    });
    Heap.prototype.insert = function (data) {
        this._tree.push(data);
        var new_node_index = this._tree.length - 1;
        var parent_index = Math.floor(new_node_index / 2);
        while (parent_index > 0) {
            if (this.is_max_heap
                ? (this._tree[new_node_index] > this._tree[parent_index])
                : (this._tree[new_node_index] < this._tree[parent_index])) {
                var temp = this._tree[new_node_index];
                this._tree[new_node_index] = this._tree[parent_index];
                this._tree[parent_index] = temp;
            }
            else
                break;
            new_node_index = parent_index;
            parent_index = Math.floor(new_node_index / 2);
        }
    };
    Heap.prototype.pop = function () {
        if (this._tree.length <= 1)
            return;
        this._tree[1] = this._tree[this._tree.length - 1];
        this._tree.length = this._tree.length - 1;
        var parent_node_index = 1;
        if (this.is_max_heap) {
            while (true) {
                var child_node_index = this._tree[parent_node_index * 2] > this._tree[parent_node_index * 2 + 1] ? parent_node_index * 2 : parent_node_index * 2 + 1;
                if ((child_node_index < this._tree.length) && (this._tree[parent_node_index] < this._tree[child_node_index])) {
                    var temp = this._tree[parent_node_index];
                    this._tree[parent_node_index] = this._tree[child_node_index];
                    this._tree[child_node_index] = temp;
                    parent_node_index = child_node_index;
                }
                else
                    break;
            }
        }
        else {
            while (true) {
                var child_node_index = this._tree[parent_node_index * 2] < this._tree[parent_node_index * 2 + 1] ? parent_node_index * 2 : parent_node_index * 2 + 1;
                if ((child_node_index < this._tree.length) && (this._tree[parent_node_index] > this._tree[child_node_index])) {
                    var temp = this._tree[parent_node_index];
                    this._tree[parent_node_index] = this._tree[child_node_index];
                    this._tree[child_node_index] = temp;
                    parent_node_index = child_node_index;
                }
                else
                    break;
            }
        }
    };
    return Heap;
}());
exports.default = Heap;
