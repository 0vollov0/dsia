"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var UndirectedGraph = (function () {
    function UndirectedGraph() {
        this._mapper = {};
    }
    UndirectedGraph.prototype.insertVertex = function (key) {
        if (!this.mapper.hasOwnProperty(key)) {
            this.mapper[key] = new __1.LinkedList();
            this.mapper[key].add(key);
            return true;
        }
        else
            return false;
    };
    UndirectedGraph.prototype.insertEdge = function (k1, k2) {
        if (!this.mapper.hasOwnProperty(k1) || !this.mapper.hasOwnProperty(k2))
            return false;
        this.mapper[k1].add(k2);
        this.mapper[k2].add(k1);
        return true;
    };
    UndirectedGraph.prototype.deleteVertex = function (key) {
        if (!this.mapper.hasOwnProperty(key))
            return false;
        var linked_node = this.mapper[key].head;
        while (linked_node.next) {
            linked_node = linked_node.next;
            this.mapper[linked_node.data].remove(key);
        }
        delete this.mapper[key];
        return true;
    };
    UndirectedGraph.prototype.deleteEdge = function (k1, k2) {
        this.mapper[k1].remove(k2);
        this.mapper[k2].remove(k1);
        return false;
    };
    UndirectedGraph.prototype.adjacent = function () {
        var _this = this;
        return Object.keys(this.mapper).map(function (key) { return _this.mapper[key]; });
    };
    UndirectedGraph.prototype.reset = function () {
        this._mapper = {};
        return Object.keys(this.mapper).length === 0;
    };
    Object.defineProperty(UndirectedGraph.prototype, "mapper", {
        get: function () {
            return this._mapper;
        },
        enumerable: false,
        configurable: true
    });
    return UndirectedGraph;
}());
exports.default = UndirectedGraph;
