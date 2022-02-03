"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EdgeLinkedList_1 = require("./EdgeLinkedList");
var UndirectedGraph = (function () {
    function UndirectedGraph() {
        this._mapper = {};
    }
    Object.defineProperty(UndirectedGraph.prototype, "mapper", {
        get: function () {
            return this._mapper;
        },
        enumerable: false,
        configurable: true
    });
    UndirectedGraph.prototype.insertVertex = function (key) {
        if (!this.mapper.hasOwnProperty(key)) {
            this.mapper[key] = new EdgeLinkedList_1.default();
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
        if (this.mapper[k1])
            this.mapper[k1].remove(k2);
        if (this.mapper[k2])
            this.mapper[k2].remove(k1);
    };
    UndirectedGraph.prototype.adjacent = function () {
        var _this = this;
        return Object.keys(this.mapper).map(function (key) { return _this.mapper[key]; });
    };
    UndirectedGraph.prototype.reset = function () {
        this._mapper = {};
        return Object.keys(this.mapper).length === 0;
    };
    UndirectedGraph.prototype.dfs = function (begin, end) {
        if (end === void 0) { end = null; }
        var begin_vertex = this.mapper[begin];
        if (!begin_vertex)
            return null;
        var visited = new Array();
        var stack = [begin_vertex.head.data];
        while (stack.length > 0) {
            var vertex_key = stack.pop();
            var new_vertex = this.mapper[vertex_key];
            if (new_vertex.head.data !== null && visited.indexOf(new_vertex.head.data) === -1) {
                var vertexes = new_vertex.getEdges()
                    .filter(function (edge) { return stack.indexOf(edge.data) === -1; })
                    .map(function (edge) { return edge.data; });
                stack.push.apply(stack, vertexes);
                visited.push(new_vertex.head.data);
                if (new_vertex.head.data === end)
                    break;
            }
        }
        return visited;
    };
    UndirectedGraph.prototype.bfs = function (begin, end) {
        if (end === void 0) { end = null; }
        var begin_vertex = this.mapper[begin];
        if (!begin_vertex)
            return null;
        var visited = new Array();
        var queue = [begin_vertex.head.data];
        while (queue.length > 0) {
            var vertex_key = queue.shift();
            var new_vertex = this.mapper[vertex_key];
            if (new_vertex.head.data !== null && visited.indexOf(new_vertex.head.data) === -1) {
                var vertexes = new_vertex.getEdges()
                    .filter(function (edge) { return queue.indexOf(edge.data) === -1; })
                    .map(function (edge) { return edge.data; });
                queue.push.apply(queue, vertexes);
                visited.push(new_vertex.head.data);
                if (new_vertex.head.data === end)
                    break;
            }
        }
        return visited;
    };
    return UndirectedGraph;
}());
exports.default = UndirectedGraph;
