"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EdgeLinkedList_1 = require("./EdgeLinkedList");
var DirectedGraph = (function () {
    function DirectedGraph() {
        this._mapper = {};
    }
    Object.defineProperty(DirectedGraph.prototype, "mapper", {
        get: function () {
            return this._mapper;
        },
        enumerable: false,
        configurable: true
    });
    DirectedGraph.prototype.insertVertex = function (key) {
        if (!this.mapper.hasOwnProperty(key)) {
            this.mapper[key] = new EdgeLinkedList_1.default();
            this.mapper[key].add(key);
            return true;
        }
        else
            return false;
    };
    DirectedGraph.prototype.insertEdge = function (k1, k2, weight) {
        if (!this.mapper.hasOwnProperty(k1) || !this.mapper.hasOwnProperty(k2))
            return false;
        this.mapper[k1].add(k2, !weight ? 0 : weight);
        return true;
    };
    DirectedGraph.prototype.deleteVertex = function (key) {
        if (!this.mapper.hasOwnProperty(key))
            return false;
        delete this.mapper[key];
        return !this.mapper.hasOwnProperty(key);
    };
    DirectedGraph.prototype.deleteEdge = function (k1, k2) {
        if (this.mapper[k1])
            this.mapper[k1].remove(k2);
    };
    DirectedGraph.prototype.adjacent = function () {
        var _this = this;
        return Object.keys(this.mapper).map(function (key) { return _this.mapper[key]; });
    };
    DirectedGraph.prototype.reset = function () {
        this._mapper = {};
        return Object.keys(this.mapper).length === 0;
    };
    return DirectedGraph;
}());
exports.default = DirectedGraph;
