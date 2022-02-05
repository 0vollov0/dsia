"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var Heap = (function () {
    function Heap(is_max_heap) {
        if (is_max_heap === void 0) { is_max_heap = false; }
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
    Heap.prototype.insert = function (data, node) {
        if (node === void 0) { node = {}; }
        this._tree.push(new __1.HeapNode(data, node));
        var new_node_index = this._tree.length - 1;
        var parent_index = Math.floor(new_node_index / 2);
        while (parent_index > 0) {
            if (this.is_max_heap
                ? (this._tree[new_node_index].compare(this._tree[parent_index]) > 0)
                : (this._tree[new_node_index].compare(this._tree[parent_index]) < 0)) {
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
        var return_value = this._tree[1];
        this._tree[1] = this._tree[this._tree.length - 1];
        this._tree.length--;
        var parent_node_index = 1;
        var children_count = 0;
        var child_node_index = 0;
        while (true) {
            children_count = this._tree.length - (parent_node_index * 2);
            if (1 < children_count) {
                if (this.is_max_heap) {
                    child_node_index = this._tree[parent_node_index * 2].compare(this._tree[parent_node_index * 2 + 1]) > 0
                        ? parent_node_index * 2
                        : parent_node_index * 2 + 1;
                }
                else {
                    child_node_index = this._tree[parent_node_index * 2].compare(this._tree[parent_node_index * 2 + 1]) < 0
                        ? parent_node_index * 2
                        : parent_node_index * 2 + 1;
                }
            }
            else if (children_count === 1) {
                child_node_index = parent_node_index * 2;
            }
            else
                break;
            if (this.is_max_heap) {
                if (this._tree[parent_node_index].compare(this._tree[child_node_index]) < 0) {
                    var temp = this._tree[parent_node_index];
                    this._tree[parent_node_index] = this._tree[child_node_index];
                    this._tree[child_node_index] = temp;
                    parent_node_index = child_node_index;
                }
                else
                    break;
            }
            else {
                if (this._tree[parent_node_index].compare(this._tree[child_node_index]) > 0) {
                    var temp = this._tree[parent_node_index];
                    this._tree[parent_node_index] = this._tree[child_node_index];
                    this._tree[child_node_index] = temp;
                    parent_node_index = child_node_index;
                }
                else
                    break;
            }
        }
        return return_value;
    };
    Heap.prototype.sort = function () {
        var _a;
        var array = new Array();
        while (this._tree.length > 1) {
            array.push(this.pop());
        }
        (_a = this._tree).push.apply(_a, array);
    };
    return Heap;
}());
exports.default = Heap;
